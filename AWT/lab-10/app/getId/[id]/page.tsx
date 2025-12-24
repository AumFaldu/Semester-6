import Image from "next/image"
export default async function GetById({params}:{params:Promise<{id:string}>}){
    const {id} = await params
    const response = await fetch(`https://6940e329993d68afba6d66af.mockapi.io/api/students/students/${id}`,{cache:"no-store"})
    const data = await response.json()
    return (
        <>
        <div>Name: {data.name}</div>
        <div>ID: {data.id}</div>
        <div>Created At: {data.createdAt}</div>
        <div>Avatar: <Image alt="No Image Found" src={data.avatar} height={100} width={150}></Image></div>
        </>
    )
}