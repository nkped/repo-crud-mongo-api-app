'use client'
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'


const addTopic = () => {

  const [ title, setTitle ] = useState('')
  const [ description, setDescription ] = useState('')
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!title || !description ) {
      alert('Description and Title are required!')
      return
    }

    try {
      const res = await fetch('http://localhost:3000/api/topics', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        }, body: JSON.stringify({title, description})
      })

      if (res.ok) {
        router.push('/')
        router.refresh()
        } else {
          throw new Error('Error message from post add topic from page.jsx')
        }     
      } catch(err) {
        console.log(err)
    }
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
        <input 
            className='border border-slate-500 px-8 py-2' 
            type='text' 
            placeholder='Add Topic'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
        <input 
            className='border border-slate-500 px-8 py-2' 
            type='text' 
            placeholder='Type Description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
        <button type='submit' className='bg-green-600 font-bold text-white py-3 px-6 w-fit '>
            Add Topic
        </button>
    </form>
  )
}

export default addTopic