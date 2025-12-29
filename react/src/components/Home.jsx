import React from 'react'
import { useState } from 'react';

const Home = () => {

    const [list, setList] = useState([])
    const [item, setItem] = useState('')
    
    const addToList = () =>{
        list.push(item)
        setList([...list])
        setItem(' ')
    }
    const remove = (id) => {
        list.splice(id,1)
        setList([...list])
    }
    
  return (
    <div>
        <ul>
            {
                list.map((lists,index)=>(
                    <li key={index}>{lists} <button onClick={()=>remove(index)}>Remove</button></li>
                ))
            }
        </ul>
        <input onChange={(e)=>setItem(e.target.value)} type="text" placeholder='name' />
        <button onClick={addToList}>Add</button>
    </div>
  )
}

export default Home