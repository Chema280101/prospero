import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { Check, X, Calendar } from 'lucide-react';

const ReservasPanel = () => {
  const [reservas, setReservas] = useState([]);
  const [filterDate, setFilterDate] = useState(new Date().toISOString().split('T')[0]);

  useEffect(() => {
    fetchReservas();
  }, [filterDate]);

  const fetchReservas = async () => {
    const { data, error } = await supabase
      .from('reservas')
      .select('*')
      .eq('fecha', filterDate)
      .order('hora', { ascending: true });

    if (error) {
      console.error('Error fetching reservas:', error);
      return;
    }

    setReservas(data);
  };

  const updateEstado = async (id, nuevoEstado) => {
    const { error } = await supabase
      .from('reservas')
      .update({ estado: nuevoEstado })
      .eq('id', id);

    if (error) {
      console.error('Error updating estado:', error);
      return;
    }

    fetchReservas();
  };

  const estadoColors = {
    pendiente: 'bg-amber-500',
    confirmada: 'bg-green-500',
    cancelada: 'bg-red-500',
  };

  const estadoLabels = {
    pendiente: 'Pendiente',
    confirmada: 'Confirmada',
    cancelada: 'Cancelada',
  };

  return (
    <div className="ml-64 p-8">
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-cream mb-2">Reservas</h1>
        <p className="text-cream-light">Gestiona las reservas del restaurante</p>
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-4">
          <Calendar className="text-cream" size={20} />
          <input
            type="date"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
            className="bg-navy-mid border border-navy-mid text-cream px-4 py-2 rounded-sm focus:border-cream focus:outline-none"
          />
        </div>
      </div>

      <div className="grid gap-4">
        {reservas.map((reserva) => (
          <div
            key={reserva.id}
            className="bg-navy-mid p-6 rounded-sm border border-navy-mid hover:border-cream transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <span className={`px-3 py-1 rounded-sm text-xs uppercase font-semibold text-white ${estadoColors[reserva.estado]}`}>
                  {estadoLabels[reserva.estado]}
                </span>
                <span className="text-cream font-semibold">{reserva.hora}</span>
                <span className="text-cream-light">·</span>
                <span className="text-cream-light">{reserva.personas} personas</span>
              </div>
              <span className="text-cream-light text-sm">{reserva.fecha}</span>
            </div>

            <div className="mb-4">
              <p className="text-cream font-semibold mb-1">{reserva.nombre}</p>
              {reserva.telefono && <p className="text-cream-light text-sm">{reserva.telefono}</p>}
            </div>

            <div className="flex gap-2">
              {reserva.estado === 'pendiente' && (
                <>
                  <button
                    onClick={() => updateEstado(reserva.id, 'confirmada')}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-sm uppercase text-xs font-semibold hover:bg-green-700 transition-all"
                  >
                    <Check size={16} />
                    Confirmar
                  </button>
                  <button
                    onClick={() => updateEstado(reserva.id, 'cancelada')}
                    className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-sm uppercase text-xs font-semibold hover:bg-red-700 transition-all"
                  >
                    <X size={16} />
                    Cancelar
                  </button>
                </>
              )}
            </div>
          </div>
        ))}

        {reservas.length === 0 && (
          <div className="bg-navy-mid p-12 rounded-sm text-center">
            <p className="text-cream-light">No hay reservas para esta fecha</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReservasPanel;
