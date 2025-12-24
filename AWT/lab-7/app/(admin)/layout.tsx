export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="d-flex">
      
      {/* Sidebar */}
      <div
        className="bg-dark text-white p-3"
        style={{ width: "250px", minHeight: "100vh" }}
      >
        <h4 className="text-center mb-4">Admin Panel</h4>

        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <a href="#" className="nav-link text-white">Dashboard</a>
          </li>

          <li className="nav-item mb-2">
            <a href="#" className="nav-link text-white">Users</a>
          </li>

          <li className="nav-item mb-2">
            <a href="#" className="nav-link text-white">Settings</a>
          </li>

          <li className="nav-item mb-2">
            <a href="#" className="nav-link text-white">Logout</a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1">

        {/* Top Navbar */}
        <nav className="navbar navbar-light bg-light px-4 shadow-sm">
          <span className="navbar-brand mb-0 h5">Admin Dashboard</span>
        </nav>

        {/* Page Content */}
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
}
