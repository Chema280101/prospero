import { Phone, Clock, MapPin } from 'lucide-react';

const Location = () => {
  return (
    <section id="ubicacion" className="py-20 bg-navy-dark reveal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream mb-4">Ubicación</h2>
          <p className="text-cream-light text-lg">Encuéntranos en el corazón de Chiclayo</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-sm overflow-hidden border-2 border-navy-mid">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.123456789!2d-79.876543!3d-6.789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDcnMjAuNCJTIDc5wrA1Myc1NS41Ilc!5e0!3m2!1ses!2spe!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-navy-mid p-3 rounded-sm">
                <MapPin className="text-cream" size={24} />
              </div>
              <div>
                <h3 className="text-cream font-semibold text-lg mb-1">Dirección</h3>
                <p className="text-cream-light">Av. Balta 636, Chiclayo, Perú</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-navy-mid p-3 rounded-sm">
                <Phone className="text-cream" size={24} />
              </div>
              <div>
                <h3 className="text-cream font-semibold text-lg mb-1">Teléfono</h3>
                <p className="text-cream-light">906 875 085</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-navy-mid p-3 rounded-sm">
                <Clock className="text-cream" size={24} />
              </div>
              <div>
                <h3 className="text-cream font-semibold text-lg mb-1">Horario</h3>
                <p className="text-cream-light">
                  Lunes a Domingo
                  <br />
                  11:00 AM - 3:00 PM | 7:00 PM - 10:00 PM
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/51906875085"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-sm uppercase text-sm tracking-wider font-semibold transition-all hover:transform hover:-translate-y-0.5 hover:shadow-lg"
            >
              Contáctanos por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
