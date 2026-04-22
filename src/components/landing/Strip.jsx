const Strip = () => {
  return (
    <section id="strip" className="bg-navy py-8 border-y border-navy-mid">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl mb-2">🛵</div>
            <p className="text-cream font-semibold uppercase text-sm tracking-wider">Delivery a domicilio</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🪑</div>
            <p className="text-cream font-semibold uppercase text-sm tracking-wider">Reserva de mesa</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🛍️</div>
            <p className="text-cream font-semibold uppercase text-sm tracking-wider">Recojo en local</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">📱</div>
            <p className="text-cream font-semibold uppercase text-sm tracking-wider">Yape · Plin · Efectivo</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strip;
