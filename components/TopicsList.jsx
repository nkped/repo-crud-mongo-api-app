import React from 'react'
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'
import { HiPencilAlt } from 'react-icons/hi'


const getTopics = async () => {
try {
  const res = await fetch('http://localhost:3000/api/topics', {cache: 'no-store'})
  
  if (!res.ok) {
    throw new Error('Message from Error..')
  }

  return res.json()
}
catch(err) {
  console.log('Message from console log with err following: ', err)
  }
}

const TopicsList = async () => {
  const { topics } = await getTopics()
  return (
    <>
    {topics.map((t) => (
    <div className='p-4 border border-slate-300 my-3 flex justify-between items-start'>
        <div>
          <h2 className='text-2xl font-bold'>{t.title}</h2>
          <div>{t.description}</div>
        </div>
        <div className='flex gap-2'>
          <RemoveBtn />
          <Link href={`editTopic/${t._id}`}>
            <HiPencilAlt size={24}/>
          </Link>
        </div>
    </div>
    ))}
  </>
  )
}

export default TopicsList