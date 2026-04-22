import { useState } from 'react';

const menuData = {
  desayunos: {
    title: 'Desayunos',
    categories: [
      {
        name: 'Desayunos',
        items: [
          { name: 'Chicharrón de Chancho', price: 23 },
          { name: 'Frito Chiclayano', price: 23 },
          { name: 'Cau cau', price: 18 },
          { name: 'Patita con maní', price: 21 },
          { name: 'Hígado encebollado', price: 19 },
          { name: 'Sangrecita', price: 18 },
          { name: 'Cabrito con yucas', price: 23 },
          { name: 'Pescado Frito en Filete', price: 28 },
          { name: 'Hueveras fritas', price: 22 },
          { name: 'Lomito al jugo', price: 19 },
          { name: 'Saltadito de pollo', price: 19 },
        ],
      },
      {
        name: 'Sánguches',
        items: [
          { name: 'Chicharrón', price: 13 },
          { name: 'Jamón del país', price: 12 },
          { name: 'Chanchito oriental dulce', price: 12 },
          { name: 'Chanchito Oriental salado', price: 12 },
          { name: 'Pellejito Oriental', price: 9 },
          { name: 'Pavo', price: 12 },
          { name: 'Asado criollo', price: 12 },
          { name: 'Lomito ahumado', price: 14 },
          { name: 'Pollo con mayonesa', price: 12 },
          { name: 'Pollo mechado', price: 12 },
        ],
      },
      {
        name: 'Complementos',
        items: [
          { name: 'Humita de queso', price: 4.5 },
          { name: 'Humita doble queso', price: 6 },
          { name: 'Mote guisado', price: 8 },
          { name: 'Marraquetas x3', price: 2 },
          { name: 'Pan x3', price: 3 },
          { name: 'Camote frito', price: 6 },
          { name: 'Yucas fritas', price: 7 },
          { name: 'Papas crocantes', price: 8 },
          { name: 'Arroz', price: 5 },
          { name: 'Huevos', price: 8 },
        ],
      },
      {
        name: 'Postre del día',
        items: [
          { name: 'Crema Volteada / Pecado de Chocolate / Tentación de Lúcuma', price: 15 },
          { name: 'La Manzana del Deseo', price: 18 },
        ],
      },
    ],
  },
  cartaBrava: {
    title: 'Carta Brava',
    badge: 'Su Lunes de Espesado s/36',
    categories: [
      {
        name: 'Para Picar',
        items: [
          { name: 'Leche de tigre carretillera', price: 28 },
          { name: 'Tortitas acevichadas', price: 34 },
          { name: 'Ceviche norteño', price: 38 },
          { name: 'Ceviche mixto Tollo', price: 46 },
          { name: 'Ceviche de charela', price: 48 },
          { name: 'Causa de Pulpo al Olivo', price: 35 },
          { name: 'Causa acevichada', price: 32 },
          { name: 'Choritos a la chalaca', price: 26 },
          { name: 'Pulpo al olivo', price: 38 },
          { name: 'Jamón de caballa', price: 30 },
          { name: 'Papa rellena de cabrito', price: 21 },
          { name: 'Papa rellena tradicional', price: 18 },
          { name: 'Papa a la huancaína', price: 15 },
          { name: 'Ensaladón de la casa', price: 25, highlight: true },
          { name: 'Spring rolls de carne', price: 25 },
          { name: 'Langostinos al panko', price: 28 },
        ],
      },
      {
        name: 'Cuchara Brava',
        items: [
          { name: 'Arroz con Chancho Próspero', price: 35, highlight: true },
          { name: 'Calentado norteño', price: 36 },
          { name: 'Calentado en salsa de mariscos', price: 38 },
          { name: 'Calentado con lomo saltado', price: 40 },
          { name: 'Cabrito norteño tradicional', price: 32 },
          { name: 'Meloso de pato', price: 38 },
          { name: 'Gallina estofada con arroz y frejoles', price: 28 },
          { name: 'Arroz tapado con huevo montado y plátanos', price: 28 },
          { name: 'Arroz cremoso de mariscos', price: 38 },
          { name: 'Escabeche de bonito', price: 28 },
          { name: 'Lengua guisada con arroz y puré', price: 28 },
          { name: 'Ají de gallina', price: 28 },
          { name: 'Lasaña de la casa', price: 29 },
          { name: 'Lomo saltado', price: 42 },
          { name: 'Milanesa de pollo', price: 25 },
          { name: 'Asado con arroz y puré', price: 28 },
          { name: 'Aeropuerto José Quiñones', price: 30 },
          { name: 'Asado de tira en cocción lenta con puré de loche', price: 42 },
          { name: 'Spaguetti al pesto con sábana de lomo', price: 42 },
          { name: 'Spaguetti a la huancaína con lomo saltado', price: 42 },
          { name: 'Tallarín saltado criollo', price: 29 },
        ],
      },
    ],
  },
  bebidas: {
    title: 'Bebidas',
    categories: [
      {
        name: 'La Cafetería',
        items: [
          { name: 'Chocolate caliente con malvaviscos', price: 15, highlight: true },
          { name: 'Café pasado', price: 7 },
          { name: 'Capuccino', price: 10 },
          { name: 'Expreso', price: 8 },
          { name: 'Café con leche', price: 8 },
          { name: 'Infusiones', price: 6 },
        ],
      },
      {
        name: 'Jugos',
        items: [
          { name: 'Piña', price: 9 },
          { name: 'Papaya', price: 9 },
          { name: 'Mixto', price: 11 },
          { name: 'Fresa', price: 12 },
          { name: 'Fresa con leche', price: 14 },
          { name: 'Naranja', price: 12 },
        ],
      },
      {
        name: 'Refrescantes (Vaso / Jarra)',
        items: [
          { name: 'Maracuyá', price: '8 / 15' },
          { name: 'Chicha morada', price: '8 / 15' },
          { name: 'Hierba fresca de Los Andes', price: '9 / 18' },
          { name: 'Manto cítrico', price: '9 / 18' },
          { name: 'Frozen Clásica', price: '9 / 18' },
        ],
      },
      {
        name: 'Gaseosas',
        items: [
          { name: 'Inca Kola y Coca Cola', price: 5 },
          { name: 'Casinelli y agua', price: 5 },
        ],
      },
      {
        name: 'La Cantina',
        items: [
          { name: 'Chilcano tradicional', price: 20 },
          { name: 'Chilcano de maracuyá', price: 20 },
          { name: 'Chilcano frutos rojos', price: 20 },
          { name: 'Pisco sour', price: 22 },
          { name: 'Tinto de verano', price: 22 },
          { name: 'Cuba libre', price: 15 },
          { name: 'Anisado shot', price: 7 },
          { name: 'Cerveza Pilsen', price: 8 },
          { name: 'Cusqueña Trigo/Negra', price: 11 },
        ],
      },
    ],
  },
};

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState('desayunos');

  const tabs = [
    { id: 'desayunos', label: 'Desayunos' },
    { id: 'cartaBrava', label: 'Carta Brava' },
    { id: 'bebidas', label: 'Bebidas' },
  ];

  return (
    <section id="carta" className="py-20 bg-cream-light reveal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-dark mb-4">Nuestra Carta</h2>
          <p className="text-navy-mid text-lg">Sabores auténticos del norte peruano</p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-sm uppercase text-sm tracking-wider font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-navy text-cream'
                  : 'bg-white text-navy-mid hover:bg-navy hover:text-cream'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {menuData[activeTab].badge && (
          <div className="bg-navy text-cream text-center py-3 px-6 rounded-sm mb-8 inline-block">
            <span className="font-semibold uppercase tracking-wider">{menuData[activeTab].badge}</span>
          </div>
        )}

        <div className="space-y-12">
          {menuData[activeTab].categories.map((category, categoryIndex) => (
            <div key={category.name} className="reveal" style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
              <h3 className="font-serif text-2xl font-bold text-navy-dark mb-6 pb-2 border-b-2 border-navy-mid">
                {category.name}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={item.name}
                    className="flex justify-between items-start p-4 bg-white rounded-sm shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
                  >
                    <span className={`text-navy-dark ${item.highlight ? 'font-semibold' : ''}`}>
                      {item.highlight && <span className="text-amber-600 mr-2">✳</span>}
                      {item.name}
                    </span>
                    <span className="text-navy-mid font-semibold whitespace-nowrap ml-4">
                      s/{item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
