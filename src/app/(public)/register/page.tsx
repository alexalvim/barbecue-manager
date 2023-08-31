'use client';

import { registerUser } from "@/service/user";
import { IRegisterUser } from "@/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const Register = () => {
  const router = useRouter();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = async (data: Record<string, string>) => {
    const registerStatus = await registerUser(data as unknown as IRegisterUser);

    if(!registerStatus.error) {
      router.push('/login')
    }
  }
  
  return (
    <div>
      <p>Register</p>
      <Link href={'/login'}>
       Login
      </Link>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="test" {...register('name', { required: true })} />
        <input defaultValue="test" {...register('email', { required: true })} />
        <input type='password'  {...register('password', { required: true })} />
        
        <input type="submit" />
      </form>
    </div>
  )
}

export default Register;