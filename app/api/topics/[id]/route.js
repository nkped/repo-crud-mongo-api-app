import connectMongoDB from "@/libs/mongodb"
import { NextResponse } from "next/server"
import Topic from "@/models/topic"

export async function PUT(request, { params }) {

    const { id } = params
    console.log('id from update-route: ', id)
    //const topic = await request.json()
    //console.log('update-topic from update-route: ', topic)
    const { newTitle: title, newDescription: description } = await request.json()
    console.log('title and desc from update-route: ', title, description)
    await connectMongoDB()
    await Topic.findByIdAndUpdate(id, { title, description })
    
    return NextResponse.json({ message: 'Topic was updated'}, {status: 200}) 
}


export async function GET(request, { params: { id } }) {

        await connectMongoDB()
        const topic = await Topic.findOne({_id: id})

        console.log('returned topic from id-route :', topic)

        return NextResponse.json({ topic }, {status: 200})
}