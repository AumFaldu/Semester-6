import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import {prisma} from "./lib/prisma";
export default async function Home() {
  const data = await prisma.users.findMany();
  return (
    <>
    <table className="table table-hover">
      <thead>
        <tr>
        <th>UserID</th>
        <th>User Name</th>
        <th>Password</th>
        <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map(d=>(
          <tr key={d.UserID}>
            <td>{d.UserID}</td>
            <td>{d.UserName}</td>
            <td>{d.Password}</td>
            <td><Link href={`/getTasksByUserId/${d.UserID}`} className="btn btn-primary">Task Details</Link></td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
}
