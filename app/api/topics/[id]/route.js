import connectMongoDB from "@/libs/mongodb"
import { NextResponse } from "next/server"
import Topic from "@/models/topic"

export async function PUT(request, { params }) {

    const { id } = params
    const { 'newTitle': title, 'newDescription': description } = await request.json()
    await connectMongoDB()
    await Topic.findByIdAndUpdate(id, { title, description })
    
    return NextResponse.json({ message: 'Topic was updated'}, {status: 200}) 
}


export async function GET(request, { params: { id } }) {

        await connectMongoDB()
        const topic = await Topic.findOne({_id: id})

        return NextResponse.json({ topic }, {status: 200})
}