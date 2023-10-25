'use client'
import React from 'react'
import { useState } from 'react'

const EditTopicForm = () => {
  const [ title, setTitle ] = useState('')
  const [ description, setDescription ] = useState('')

  const handleSubmit = () => {
    
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
        placeholder='Add Description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        />
    <button type='submit' className='bg-green-600 font-bold text-white py-3 px-6 w-fit '>
        Edit Topic
    </button>
</form>

  )
}

export default EditTopicForm