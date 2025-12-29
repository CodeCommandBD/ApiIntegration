
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';


const useSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    age: z.coerce.number().min(1, 'Age is required'),
    password: z.string().min(6, 'Password is required'),
    confirm_password: z.string().min(6, 'confirm Password is required'),
}).refine((value)=> {
    if(value.password !== value.confirm_password){
        return false
    }
    return true
},{message: 'Passwords does not match', path:['confirm_password']})


const FormHook = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(useSchema),
        defaultValues: {
            name: '',
            age: '',
            password:'',
            confirm_password:''
        }
    })

    const onHandleSubmit = (data) => {
        alert(JSON.stringify(data))
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onHandleSubmit)}>

                <input {...register('name')} type="text" placeholder="name" />
                {errors.name && <p style={{ color: 'red', margin: 4 }}>{errors.name.message}</p>}
                <br />
                <br />
                <input {...register('age')} type="number" placeholder="age" />
                {errors.age && <p style={{ color: 'red', margin: 4 }}>{errors.age.message}</p>}
                <br />
                <br />
               
                <input {...register('password')} type="text" placeholder="password" />
                {errors.password && <p style={{ color: 'red', margin: 4 }}>{errors.password.message}</p>}
                <br />
                <br />

                <input {...register('confirm_password')} type="text" placeholder="confirm password" />
                {errors.confirm_password && <p style={{ color: 'red', margin: 4 }}>{errors.confirm_password.message}</p>}
                <br />
                <br />

                <input type="submit" />
            </form>
        </div>
    )
}

export default FormHook