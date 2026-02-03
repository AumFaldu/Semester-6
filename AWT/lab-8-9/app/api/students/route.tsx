import {students} from '@/app/data/data'
import { NextRequest } from 'next/server'
export async function GET(){
    //return "Hello World"
    return Response.json(students)
}
export async function POST(request:NextRequest){
    //return "Hello World"
    students.push(await request.json());
    return Response.json({success:true})
}   