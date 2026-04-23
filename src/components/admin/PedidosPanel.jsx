import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { Bike, ShoppingBag, Clock, CircleCheck, XCircle } from 'lucide-react';

const PedidosPanel = ({ onNewOrdersCountChange }) => {
  const [pedidos, setPedidos] = useState([]);
  const [filter, setFilter] = useState('todos');
  const [audioContext, setAudioContext] = useState(null);

  useEffect(() => {
    fetchPedidos();

    const subscription = supabase
      .channel('pedidos-channel')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'pedidos',
        },
        (payload) => {
          if (payload.eventType === 'INSERT') {
            playBeep();
          }
          fetchPedidos();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, []);

  const playBeep = () => {
    if (!audioContext) {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      setAudioContext(ctx);
    }
    
    const ctx = audioContext || new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.frequency.value = 800;
    oscillator.type = 'sine';
    gainNode.gain.value = 0.3;

    oscillator.start();
    setTimeout(() => oscillator.stop(), 200);
  };

  const fetchPedidos = async () => {
    const today = new Date().toISOString().split('T')[0];
    const { data, error } = await supabase
      .from('pedidos')
      .select('*')
      .gte('created_at', today)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching pedidos:', error);
      return;
    }

    setPedidos(data);
    const newCount = data.filter((p) => p.estado === 'nuevo').length;
    onNewOrdersCountChange(newCount);
  };

  const updateEstado = async (id, nuevoEstado) => {
    const { error } = await supabase
      .from('pedidos')
      .update({ estado: nuevoEstado })
      .eq('id', id);

    if (error) {
      console.error('Error updating estado:', error);
      return;
    }

    fetchPedidos();
  };

  const filteredPedidos = pedidos.filter((pedido) => {
    if (filter === 'todos') return true;
    return pedido.estado === filter;
  });

  const tabs = [
    { id: 'todos', label: 'Todos' },
    { id: 'nuevo', label: 'Nuevos' },
    { id: 'en_preparacion', label: 'En preparación' },
    { id: 'listo', label: 'Listos' },
    { id: 'entregado', label: 'Entregados' },
  ];

  const estadoColors = {
    nuevo: 'bg-amber-500',
    en_preparacion: 'bg-blue-500',
    listo: 'bg-green-500',
    entregado: 'bg-gray-500',
  };

  const estadoLabels = {
    nuevo: 'Nuevo',
    en_preparacion: 'En preparación',
    listo: 'Listo',
    entregado: 'Entregado',
  };

  const getNextEstado = (currentEstado) => {
    const flow = ['nuevo', 'en_preparacion', 'listo', 'entregado'];
    const currentIndex = flow.indexOf(currentEstado);
    if (currentIndex < flow.length - 1) {
      return flow[currentIndex + 1];
    }
    return null;
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="ml-64 p-8">
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-cream mb-2">Pedidos de hoy</h1>
        <p className="text-cream-light">
          Total: {pedidos.length} · Nuevos: {pedidos.filter((p) => p.estado === 'nuevo').length}
        </p>
      </div>

      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id)}
            className={`px-4 py-2 rounded-sm uppercase text-xs tracking-wider font-semibold whitespace-nowrap transition-all ${
              filter === tab.id
                ? 'bg-cream text-navy-dark'
                : 'bg-navy-mid text-cream hover:bg-navy'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid gap-4">
        {filteredPedidos.map((pedido, index) => (
          <div
            key={pedido.id}
            className="bg-navy-mid p-6 rounded-sm border border-navy-mid hover:border-cream transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <span className="text-cream-light text-sm font-mono">#{String(index + 1).padStart(3, '0')}</span>
                <div className="flex items-center gap-2">
                  {pedido.tipo === 'delivery' ? (
                    <Bike size={20} className="text-cream" />
                  ) : (
                    <ShoppingBag size={20} className="text-cream" />
                  )}
                  <span className="text-cream font-semibold uppercase text-sm">
                    {pedido.tipo === 'delivery' ? 'Delivery' : 'Recojo'}
                  </span>
                </div>
                <span className={`px-3 py-1 rounded-sm text-xs uppercase font-semibold text-white ${estadoColors[pedido.estado]}`}>
                  {estadoLabels[pedido.estado]}
                </span>
              </div>
              <span className="text-cream-light text-sm">{formatTime(pedido.created_at)}</span>
            </div>

            <div className="mb-4">
              <p className="text-cream font-semibold mb-1">{pedido.nombre}</p>
              {pedido.telefono && <p className="text-cream-light text-sm">{pedido.telefono}</p>}
              {pedido.direccion && <p className="text-cream-light text-sm">{pedido.direccion}</p>}
            </div>

            <div className="bg-navy-dark p-4 rounded-sm mb-4">
              <p className="text-cream-light text-sm whitespace-pre-wrap">{pedido.pedido}</p>
            </div>

            <div className="flex gap-2">
              {getNextEstado(pedido.estado) && (
                <button
                  onClick={() => updateEstado(pedido.id, getNextEstado(pedido.estado))}
                  className="flex items-center gap-2 px-4 py-2 bg-cream text-navy-dark rounded-sm uppercase text-xs font-semibold hover:bg-cream-light transition-all"
                >
                  <CircleCheck size={16} />
                  {estadoLabels[getNextEstado(pedido.estado)]}
                </button>
              )}
            </div>
          </div>
        ))}

        {filteredPedidos.length === 0 && (
          <div className="bg-navy-mid p-12 rounded-sm text-center">
            <p className="text-cream-light">No hay pedidos en esta categoría</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PedidosPanel;
