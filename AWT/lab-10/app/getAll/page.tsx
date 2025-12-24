import Image from "next/image";
import Link from "next/link";
export default async function getAll() {
  const data = await fetch(
    "https://6940e329993d68afba6d66af.mockapi.io/api/students/students"
  );
  const dataJson = await data.json();

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {dataJson.map((stu: any) => (
            <tr key={stu.id}>
              <td>{stu.id}</td>
              <td>{stu.name}</td>
              <td><Link href={`/getId/${stu.id}`} className="btn btn-primary">Describe</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}