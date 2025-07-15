import { Link, Outlet } from 'react-router-dom';
import '../../styles/Admin/AdminLayout.css'; // we'll style later

function AdminLayout() {
  return (
    <div className="admin-container">
      <aside className="sidebar">
        <h2>Admin Panel</h2>
        <nav>
          <ul>
            <li><Link to="/admin">Bookings</Link></li>
            {/* You can add more links here later */}
          </ul>
        </nav>
      </aside>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
