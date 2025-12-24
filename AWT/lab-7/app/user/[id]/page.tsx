export default async function UserPage({ params }: { params: Promise<{ id: string }> }) {
  const {id} = await params
  console.log("ID = ", id);

  return (
    <div>
      <h1>User: {id}</h1>
    </div>
  );
}
