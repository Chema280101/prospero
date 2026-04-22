import { useState } from 'react';

const MenuPanel = () => {
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: 'Chicharrón de Chancho', price: 23, category: 'Desayunos', available: true },
    { id: 2, name: 'Ceviche norteño', price: 38, category: 'Carta Brava', available: true },
    { id: 3, name: 'Arroz con Chancho Próspero', price: 35, category: 'Carta Brava', available: true },
    { id: 4, name: 'Chocolate caliente con malvaviscos', price: 15, category: 'Bebidas', available: true },
  ]);

  const toggleAvailability = (id) => {
    setMenuItems(
      menuItems.map((item) =>
        item.id === id ? { ...item, available: !item.available } : item
      )
    );
  };

  const updatePrice = (id, newPrice) => {
    setMenuItems(
      menuItems.map((item) =>
        item.id === id ? { ...item, price: parseFloat(newPrice) || 0 } : item
      )
    );
  };

  return (
    <div className="ml-64 p-8">
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-cream mb-2">Gestión de Menú</h1>
        <p className="text-cream-light">Edita precios y disponibilidad de los platos</p>
      </div>

      <div className="bg-navy-mid rounded-sm border border-navy-mid overflow-hidden">
        <table className="w-full">
          <thead className="bg-navy-dark">
            <tr>
              <th className="text-left px-6 py-4 text-cream uppercase text-xs tracking-wider font-semibold">
                Plato
              </th>
              <th className="text-left px-6 py-4 text-cream uppercase text-xs tracking-wider font-semibold">
                Categoría
              </th>
              <th className="text-left px-6 py-4 text-cream uppercase text-xs tracking-wider font-semibold">
                Precio
              </th>
              <th className="text-left px-6 py-4 text-cream uppercase text-xs tracking-wider font-semibold">
                Disponible
              </th>
            </tr>
          </thead>
          <tbody>
            {menuItems.map((item) => (
              <tr key={item.id} className="border-t border-navy-mid">
                <td className="px-6 py-4 text-cream">{item.name}</td>
                <td className="px-6 py-4 text-cream-light">{item.category}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="text-cream-light">s/</span>
                    <input
                      type="number"
                      value={item.price}
                      onChange={(e) => updatePrice(item.id, e.target.value)}
                      className="w-20 bg-navy-dark border border-navy-mid text-cream px-3 py-1 rounded-sm focus:border-cream focus:outline-none"
                    />
                  </div>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => toggleAvailability(item.id)}
                    className={`w-12 h-6 rounded-sm transition-all ${
                      item.available ? 'bg-green-600' : 'bg-gray-600'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 bg-white rounded-sm transition-all ${
                        item.available ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 p-4 bg-navy-mid rounded-sm border border-navy-mid">
        <p className="text-cream-light text-sm">
          💡 Esta es una versión simplificada del panel de menú. En una futura versión podrás agregar,
          editar y eliminar platos completos.
        </p>
      </div>
    </div>
  );
};

export default MenuPanel;
