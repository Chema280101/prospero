import { useLocation, useNavigate } from 'react-router-dom';
import { Utensils, ClipboardList, CalendarDays, LogOut, Home } from 'lucide-react';
import { supabase } from '../../lib/supabase';

const Sidebar = ({ newOrdersCount }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  const menuItems = [
    { id: 'pedidos', label: 'Pedidos', icon: ClipboardList, path: '/admin', badge: newOrdersCount },
    { id: 'reservas', label: 'Reservas', icon: CalendarDays, path: '/admin/reservas' },
    { id: 'menu', label: 'Menú', icon: Utensils, path: '/admin/menu' },
  ];

  return (
    <aside className="w-64 bg-navy-dark min-h-screen fixed left-0 top-0 border-r border-navy-mid">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
          <img
            src="/logo.jpg"
            alt="Próspero Logo"
            className="w-10 h-10 rounded-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          <div>
            <h1 className="font-serif text-xl font-bold text-cream">Próspero.</h1>
            <p className="text-xs text-muted uppercase tracking-widest">Admin</p>
          </div>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.id}
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-sm transition-all ${
                  isActive
                    ? 'bg-navy-mid text-cream'
                    : 'text-cream-light hover:bg-navy-mid hover:text-cream'
                }`}
              >
                <div className="flex items-center gap-3">
                  <item.icon size={20} />
                  <span className="uppercase text-sm tracking-wider">{item.label}</span>
                </div>
                {item.badge > 0 && (
                  <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-sm">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        <div className="absolute bottom-6 left-6 right-6">
          <button
            onClick={() => navigate('/')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-sm text-cream-light hover:bg-navy-mid hover:text-cream transition-all mb-2"
          >
            <Home size={20} />
            <span className="uppercase text-sm tracking-wider">Ir al sitio</span>
          </button>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-sm text-red-400 hover:bg-navy-mid hover:text-red-300 transition-all"
          >
            <LogOut size={20} />
            <span className="uppercase text-sm tracking-wider">Cerrar sesión</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
