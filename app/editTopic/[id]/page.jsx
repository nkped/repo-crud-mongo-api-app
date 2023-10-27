import React from 'react'
import EditTopicForm from '@/components/EditTopicForm'

const getTopic = async(id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {cache: 'no-store'})
    
    if (!res.ok) {
      throw new Error('Failed to fetch topic by id..')
    }
   
    return res.json()
  }
  catch(err) {
    console.log(err)
  }
}


const EditTopic = async({ params: { id } }) => {  
  console.log('id from edittopicpage: ', id)
  const { topic } = await getTopic(id)
  const { title, description } = topic
  
    return (
      <div>
        <EditTopicForm id={id} title={title} description={description} />
      </div>
    )
}

export default EditTopic