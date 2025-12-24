import { prisma } from "@/app/lib/prisma"
import Link from "next/link"

export default async function getTasksByID({params}:{params:Promise<{id:string}>}) {
  const {id} = await params
  const data = await prisma.tasks.findMany({
    include:{
      users:true
    },
    where:{
      UserID:Number(id)
    }
  })
  return(
    <>
    <Link href={'/'} className="btn btn-secondary">Back</Link>
    <table className="table table-hover">
      <thead>
        <tr>
          <th>TaskID</th>
          <th>Title</th>
          <th>Desciption</th>
          <th>Is Completed</th>
        </tr>
      </thead>
      <tbody>
        {data.map((t:any)=>(
            <tr key={t.TaskID}>
              <td>{t.TaskID}</td>
              <td>{t.TaskTitle}</td>
              <td>{t.TaskDescription}</td>
              <td>{t.IsCompleted.toString()}</td>
            </tr>
          )
        )}
      </tbody>
      </table></>
  )
}
