import { useState } from 'react';
import { supabase } from '../../lib/supabase';
import { toast } from 'sonner';
import { Bike, ShoppingBag, Armchair } from 'lucide-react';

const OrderSection = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    tipo: 'delivery',
    direccion: '',
    pedido: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.nombre || !formData.pedido) {
      toast.error('Por favor completa los campos requeridos');
      return;
    }

    try {
      const { error } = await supabase.from('pedidos').insert([
        {
          nombre: formData.nombre,
          telefono: formData.telefono,
          tipo: formData.tipo,
          direccion: formData.direccion,
          pedido: formData.pedido,
          estado: 'nuevo',
        },
      ]);

      if (error) throw error;

      const whatsappMessage = `Hola Próspero! 👋
Nombre: ${formData.nombre}
Tipo: ${formData.tipo}
${formData.tipo === 'delivery' ? `Dirección: ${formData.direccion}` : ''}
Pedido: ${formData.pedido}`;

      const whatsappUrl = `https://wa.me/51906875085?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank');

      toast.success('Pedido enviado con éxito');
      setFormData({ nombre: '', telefono: '', tipo: 'delivery', direccion: '', pedido: '' });
      setSelectedOption(null);
    } catch (error) {
      console.error('Error:', error);
      toast.error('Error al enviar el pedido');
    }
  };

  const options = [
    { id: 'delivery', label: 'Delivery', icon: Bike, description: 'Te lo llevamos a domicilio' },
    { id: 'recojo', label: 'Recojo', icon: ShoppingBag, description: 'Pasa por tu pedido' },
    { id: 'reservar', label: 'Reservar', icon: Armchair, description: 'Reserva tu mesa' },
  ];

  const handleOptionClick = (option) => {
    if (option.id === 'reservar') {
      document.getElementById('reservas')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    setSelectedOption(option.id);
    setFormData({ ...formData, tipo: option.id });
  };

  return (
    <section id="pedidos" className="py-20 bg-navy reveal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream mb-4">Haz tu Pedido</h2>
          <p className="text-cream-light text-lg">Elige cómo quieres disfrutar nuestra comida</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="font-serif text-2xl font-bold text-cream mb-6">¿Cómo quieres tu pedido?</h3>
            <div className="space-y-4">
              {options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleOptionClick(option)}
                  className={`w-full p-6 rounded-sm border-2 transition-all hover:-translate-y-0.5 ${
                    selectedOption === option.id
                      ? 'border-cream bg-navy-mid'
                      : 'border-navy-mid bg-navy-dark hover:border-cream'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <option.icon size={32} className="text-cream" />
                    <div className="text-left">
                      <h4 className="text-cream font-semibold uppercase tracking-wider">{option.label}</h4>
                      <p className="text-cream-light text-sm">{option.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {selectedOption && (
            <div className="bg-navy-mid p-8 rounded-sm border border-navy-mid">
              <h3 className="font-serif text-2xl font-bold text-cream mb-6">
                Pedido por {selectedOption === 'delivery' ? 'Delivery' : 'Recojo'}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-cream text-sm uppercase tracking-wider mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    className="w-full px-4 py-3 bg-navy-dark border border-navy-mid rounded-sm text-cream placeholder-cream-muted focus:border-cream focus:outline-none transition-colors"
                    placeholder="Tu nombre"
                    required
                  />
                </div>

                <div>
                  <label className="block text-cream text-sm uppercase tracking-wider mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    className="w-full px-4 py-3 bg-navy-dark border border-navy-mid rounded-sm text-cream placeholder-cream-muted focus:border-cream focus:outline-none transition-colors"
                    placeholder="Tu teléfono"
                  />
                </div>

                {selectedOption === 'delivery' && (
                  <div>
                    <label className="block text-cream text-sm uppercase tracking-wider mb-2">
                      Dirección
                    </label>
                    <input
                      type="text"
                      value={formData.direccion}
                      onChange={(e) => setFormData({ ...formData, direccion: e.target.value })}
                      className="w-full px-4 py-3 bg-navy-dark border border-navy-mid rounded-sm text-cream placeholder-cream-muted focus:border-cream focus:outline-none transition-colors"
                      placeholder="Tu dirección"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-cream text-sm uppercase tracking-wider mb-2">
                    Pedido *
                  </label>
                  <textarea
                    value={formData.pedido}
                    onChange={(e) => setFormData({ ...formData, pedido: e.target.value })}
                    className="w-full px-4 py-3 bg-navy-dark border border-navy-mid rounded-sm text-cream placeholder-cream-muted focus:border-cream focus:outline-none transition-colors resize-none"
                    rows={4}
                    placeholder="Describe tu pedido..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-cream text-navy-dark px-8 py-4 rounded-sm uppercase text-sm tracking-wider font-semibold transition-all hover:transform hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Enviar Pedido
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
