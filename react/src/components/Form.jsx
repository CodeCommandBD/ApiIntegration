import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Form = () => {

    const [formObj, setFormObj] = useState({
        fname:'',
        lname:'',
        gender:''
    })

    const InputChange = (property, value) => {
        setFormObj(prev => ({
            ...prev,
            [property]: value
        }))
    }


    const submit = (e) => {
        e.preventDefault();
        console.log(formObj);
        
        // try{
        //     const res = await axios.post('/api/form', formObj)
        //     console.log('Server response:', res.data)
        //     alert('Submitted successfully')
        //     setFormObj({ fname:'', lname:'', gender:'' })
        // }catch(err){
        //     console.error(err)
        //     alert('Submit failed')
        // }
    }
  return (
    <div>
        <form onSubmit={submit}>
            <input onChange={(e)=>InputChange('fname',e.target.value)} value={formObj.fname} type="text" placeholder='fname'/>
            <br />
            <br />
            <input onChange={(e)=>InputChange('lname',e.target.value)} value={formObj.lname} type="text" placeholder='lname'/>
            <br />
            <br />
            <input onChange={()=>InputChange('gender', 'Male')} type="radio"  name='gender' checked={formObj.gender === 'Male'}/>Male

            <input onChange={()=>InputChange('gender', 'Female')} type="radio"  name='gender' checked={formObj.gender === 'Female' }/>Female
            <br />
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default Form