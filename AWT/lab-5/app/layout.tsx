'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon w-100"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" href="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        {children}
      <footer className="bg-dark text-light text-center py-3 mt-5">
  <p className="mb-0">
    © {new Date().getFullYear()} My Website — All Rights Reserved
  </p>
</footer>
      </body>
    </html>
  );
}
