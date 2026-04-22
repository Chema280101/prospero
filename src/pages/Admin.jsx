import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import Sidebar from '../components/admin/Sidebar';
import PedidosPanel from '../components/admin/PedidosPanel';
import ReservasPanel from '../components/admin/ReservasPanel';
import MenuPanel from '../components/admin/MenuPanel';
import { Toaster } from 'sonner';

const Admin = () => {
  const [newOrdersCount, setNewOrdersCount] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/login');
      }
    };
    checkAuth();
  }, [navigate]);

  const renderContent = () => {
    if (location.pathname === '/admin/reservas') {
      return <ReservasPanel />;
    }
    if (location.pathname === '/admin/menu') {
      return <MenuPanel />;
    }
    return <PedidosPanel onNewOrdersCountChange={setNewOrdersCount} />;
  };

  return (
    <div className="min-h-screen bg-navy-dark">
      <Sidebar newOrdersCount={newOrdersCount} />
      {renderContent()}
      <Toaster position="top-right" richColors />
    </div>
  );
};

export default Admin;
