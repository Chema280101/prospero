# Próspero. Taberna Peruana

Sistema digital completo para el restaurante Próspero en Chiclayo, Perú.

## 🚀 Stack Tecnológico

- **React + Vite** - Framework frontend
- **Tailwind CSS** - Estilos con diseño customizado
- **Supabase** - Base de datos, autenticación y realtime
- **React Router v6** - Enrutamiento
- **Sonner** - Notificaciones toast
- **Lucide React** - Iconos

## 📋 Requisitos Previos

- Node.js 18+ instalado
- Cuenta en [Supabase](https://supabase.com)
- Logo circular del restaurante en `src/assets/logo.jpg`

## 🛠️ Instalación

1. **Clonar o navegar al proyecto**
   ```bash
   cd d:\Proyectos\Prospero
   ```

2. **Instalar dependencias** (ya ejecutado)
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   ```bash
   cp .env.example .env
   ```
   Editar `.env` con tus credenciales de Supabase:
   ```
   VITE_SUPABASE_URL=tu_url_aqui
   VITE_SUPABASE_ANON_KEY=tu_key_aqui
   ```

## 🗄️ Configuración de Base de Datos (Supabase)

Ejecuta este SQL en el SQL Editor de Supabase:

```sql
-- Tabla de Pedidos
create table pedidos (
  id uuid default gen_random_uuid() primary key,
  nombre text not null,
  telefono text,
  tipo text default 'delivery',  -- 'delivery' | 'recojo'
  direccion text,
  pedido text not null,
  estado text default 'nuevo',   -- 'nuevo' | 'en_preparacion' | 'listo' | 'entregado'
  created_at timestamptz default now()
);

-- Tabla de Reservas
create table reservas (
  id uuid default gen_random_uuid() primary key,
  nombre text not null,
  telefono text,
  personas int,
  fecha date,
  hora text,
  estado text default 'pendiente', -- 'pendiente' | 'confirmada' | 'cancelada'
  created_at timestamptz default now()
);

-- Habilitar Realtime para pedidos y reservas
alter publication supabase_realtime add table pedidos;
alter publication supabase_realtime add table reservas;
```

## 👤 Crear Usuario Admin

1. Ve a tu panel de Supabase
2. Navega a **Authentication** → **Users**
3. Click en **Add user** → **Create new user**
4. Ingresa email y contraseña para el admin
5. Confirma el email del usuario

## 🏃 Ejecutar en Desarrollo

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

- **Landing pública**: `http://localhost:5173`
- **Panel admin**: `http://localhost:5173/admin` (requiere login)
- **Login**: `http://localhost:5173/login`

## 🚀 Deploy en Vercel

1. **Crear repositorio en GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/prospero.git
   git push -u origin main
   ```

2. **Conectar a Vercel**
   - Ve a [vercel.com](https://vercel.com)
   - Click en "New Project"
   - Importa tu repositorio de GitHub
   - En "Environment Variables", agrega:
     - `VITE_SUPABASE_URL` = tu URL de Supabase
     - `VITE_SUPABASE_ANON_KEY` = tu anon key de Supabase
   - Click en "Deploy"

3. **Configurar dominio** (opcional)
   - En Vercel, ve a Settings → Domains
   - Agrega tu dominio personalizado

## 📁 Estructura del Proyecto

```
src/
├── pages/
│   ├── Landing.jsx       # Página principal pública
│   ├── Login.jsx         # Login de admin
│   └── Admin.jsx         # Panel de administración
├── components/
│   ├── landing/          # Componentes de landing page
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Strip.jsx
│   │   ├── MenuSection.jsx
│   │   ├── OrderSection.jsx
│   │   ├── ReservaSection.jsx
│   │   ├── Location.jsx
│   │   └── Footer.jsx
│   └── admin/            # Componentes de admin
│       ├── Sidebar.jsx
│       ├── PedidosPanel.jsx
│       ├── ReservasPanel.jsx
│       └── MenuPanel.jsx
├── lib/
│   └── supabase.js       # Cliente de Supabase
├── assets/
│   └── logo.jpg          # Logo circular
├── App.jsx               # Router principal
└── index.css             # Estilos globales + Tailwind
```

## ✨ Características

### Landing Page
- **Hero animado** con fade-up escalonado
- **Navbar** con scroll effect (transparent → blur)
- **Menú interactivo** con tabs (Desayunos, Carta Brava, Bebidas)
- **Sistema de pedidos** con formulario y WhatsApp
- **Sistema de reservas** con selección de horario
- **Mapa de ubicación** con Google Maps
- **Diseño responsivo** para móvil y desktop

### Panel Admin
- **Dashboard de pedidos** en tiempo real
- **Gestión de estados** (Nuevo → En preparación → Listo → Entregado)
- **Notificación sonora** cuando llega pedido nuevo
- **Panel de reservas** con filtros por fecha
- **Gestión de menú** (precios y disponibilidad)
- **Badge de contador** de pedidos nuevos

### Integraciones
- **WhatsApp**: Pedidos y reservas envían mensaje automático
- **Supabase Realtime**: Actualizaciones en vivo sin recargar
- **Supabase Auth**: Autenticación segura para admin

## 🎨 Identidad Visual

- **Colores**:
  - Navy: `#0D2B4E` (fondo principal)
  - Navy Dark: `#071A30` (hero, footer)
  - Navy Mid: `#163660`
  - Cream: `#F0EAD6` (texto)
  - Cream Light: `#F7F3EA` (fondo secciones claras)

- **Tipografías**:
  - Títulos: Playfair Display (serif)
  - Cuerpo: DM Sans (sans-serif)

- **Estilo**: Elegante, oscuro, norteño. Sin colores brillantes ni gradientes.

## 📞 Contacto del Restaurante

- **Dirección**: Av. Balta 637, Chiclayo, Perú
- **WhatsApp**: 906 875 085
- **Horario**: Lun-Dom 11:00-15:00 | 19:00-22:00

## 📝 Licencia

Copyright © 2026 Próspero. Taberna Peruana. Todos los derechos reservados.
