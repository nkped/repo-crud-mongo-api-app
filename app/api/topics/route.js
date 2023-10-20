import connectMongoDB from "@/libs/mongodb"
import Topic from "@/models/topic"
import { NextResponse } from "next/server"


export async function POST(request) {
    const { title, description } = await request.json()
    await connectMongoDB()
    await Topic.create({  title, description })
    return NextResponse.json({ message: 'Topic was created' }, {status: 201})
}


export async function GET() {
    await connectMongoDB()
    const topics = await Topic.find()
    return NextResponse.json({topics})
}


export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get('id')
    console.log('id from delete route', id)
    await connectMongoDB()
    await Topic.findByIdAndDelete(id)

    return NextResponse.json({message: 'Topic was deleted'}, {status: 200})
}  