export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mt-4">
      <h2 className="mb-3">User Section</h2>
      <div className="card p-4">{children}</div>
    </div>
  );
}
