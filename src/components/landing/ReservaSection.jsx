import { useState } from 'react';
import { supabase } from '../../lib/supabase';
import { toast } from 'sonner';
import { Check, Clock, MapPin, X } from 'lucide-react';

const ReservaSection = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    personas: '',
    fecha: '',
    hora: '',
  });

  const timeSlots = [
    '11:00 AM',
    '12:00 PM',
    '1:00 PM',
    '2:00 PM',
    '7:00 PM',
    '8:00 PM',
    '9:00 PM',
    '9:30 PM',
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.nombre || !formData.personas || !formData.fecha || !formData.hora) {
      toast.error('Por favor completa todos los campos requeridos');
      return;
    }

    try {
      const { error } = await supabase.from('reservas').insert([
        {
          nombre: formData.nombre,
          telefono: formData.telefono,
          personas: parseInt(formData.personas),
          fecha: formData.fecha,
          hora: formData.hora,
          estado: 'pendiente',
        },
      ]);

      if (error) throw error;

      const whatsappMessage = `Hola Próspero! Quiero reservar 🪑
Nombre: ${formData.nombre}
Personas: ${formData.personas}
Fecha: ${formData.fecha}
Hora: ${formData.hora}`;

      const whatsappUrl = `https://wa.me/51906875085?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank');

      toast.success('Reserva enviada con éxito');
      setFormData({ nombre: '', telefono: '', personas: '', fecha: '', hora: '' });
    } catch (error) {
      console.error('Error:', error);
      toast.error('Error al enviar la reserva');
    }
  };

  return (
    <section id="reservas" className="py-20 bg-cream-light reveal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-dark mb-4">Reserva tu Mesa</h2>
          <p className="text-navy-mid text-lg">Garantiza tu lugar para una experiencia memorable</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-navy p-8 rounded-sm">
            <h3 className="font-serif text-2xl font-bold text-cream mb-6">¿Por qué reservar?</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-navy-mid p-3 rounded-sm">
                  <Check className="text-cream" size={24} />
                </div>
                <div>
                  <h4 className="text-cream font-semibold mb-1">Confirmación Rápida</h4>
                  <p className="text-cream-light text-sm">Te confirmamos tu reserva en minutos</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-navy-mid p-3 rounded-sm">
                  <Armchair className="text-cream" size={24} />
                </div>
                <div>
                  <h4 className="text-cream font-semibold mb-1">Mesa Garantizada</h4>
                  <p className="text-cream-light text-sm">Tu lugar estará listo cuando llegues</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-navy-mid p-3 rounded-sm">
                  <MapPin className="text-cream" size={24} />
                </div>
                <div>
                  <h4 className="text-cream font-semibold mb-1">Ubicación Privilegiada</h4>
                  <p className="text-cream-light text-sm">Av. Balta 636, Chiclayo</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-sm shadow-lg">
            <h3 className="font-serif text-2xl font-bold text-navy-dark mb-6">Haz tu Reserva</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-navy-dark text-sm uppercase tracking-wider mb-2">
                  Nombre *
                </label>
                <input
                  type="text"
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  className="w-full px-4 py-3 bg-cream-light border border-navy-mid rounded-sm text-navy-dark placeholder-navy-mid focus:border-navy focus:outline-none transition-colors"
                  placeholder="Tu nombre"
                  required
                />
              </div>

              <div>
                <label className="block text-navy-dark text-sm uppercase tracking-wider mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  value={formData.telefono}
                  onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                  className="w-full px-4 py-3 bg-cream-light border border-navy-mid rounded-sm text-navy-dark placeholder-navy-mid focus:border-navy focus:outline-none transition-colors"
                  placeholder="Tu teléfono"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-navy-dark text-sm uppercase tracking-wider mb-2">
                    Personas *
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="20"
                    value={formData.personas}
                    onChange={(e) => setFormData({ ...formData, personas: e.target.value })}
                    className="w-full px-4 py-3 bg-cream-light border border-navy-mid rounded-sm text-navy-dark placeholder-navy-mid focus:border-navy focus:outline-none transition-colors"
                    placeholder="N°"
                    required
                  />
                </div>
                <div>
                  <label className="block text-navy-dark text-sm uppercase tracking-wider mb-2">
                    Fecha *
                  </label>
                  <input
                    type="date"
                    value={formData.fecha}
                    onChange={(e) => setFormData({ ...formData, fecha: e.target.value })}
                    className="w-full px-4 py-3 bg-cream-light border border-navy-mid rounded-sm text-navy-dark placeholder-navy-mid focus:border-navy focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-navy-dark text-sm uppercase tracking-wider mb-2">
                  Hora *
                </label>
                <div className="flex flex-wrap gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setFormData({ ...formData, hora: time })}
                      className={`px-4 py-2 rounded-sm text-sm font-medium transition-all ${
                        formData.hora === time
                          ? 'bg-navy text-cream'
                          : 'bg-cream-light text-navy-dark hover:bg-navy hover:text-cream'
                      } ${time === '7:00 PM' ? 'opacity-50 cursor-not-allowed' : ''}`}
                      disabled={time === '7:00 PM'}
                    >
                      {time}
                      {time === '7:00 PM' && ' (lleno)'}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-navy text-cream px-8 py-4 rounded-sm uppercase text-sm tracking-wider font-semibold transition-all hover:transform hover:-translate-y-0.5 hover:shadow-lg"
              >
                Reservar Mesa
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservaSection;
