'use client';

import { registerUser } from "@/service/user";
import { IRegisterUser } from "@/types";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { ActionsHolder, ContentHolder, ContentWrapper } from "./styles";
import { Field } from "@/components/Field";
import { Button } from "@/components/Button";
import { Link } from "@/components/Link";
import { ErrorArea } from "@/components/ErrorArea";
import { useState } from "react";

const Register = () => {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [formError, setFormError] = useState<string>('');
  const onSubmit = async (data: Record<string, string>) => {
    const registerStatus = await registerUser(data as unknown as IRegisterUser);

    if(!registerStatus.error) {
      router.push('/login')
    } else {
      if(registerStatus.error === 'User already exist') {
        setFormError('Usuário já existente com esse email')
      } else {
        setFormError('Erro na conexão com o servidor')
      }
    }
  }
  
  return (
    <ContentWrapper>
      <ContentHolder>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Field
            label={'Nome'}
            placeholder={'nome'}
            type={'text'}
            error={errors.name || null}
            customErrorMessages={{
              minLength: 'Nome deve conter no mínimo 2 cararteres'
            }}
            formProps={{...register('name', {
              required: true,
              minLength: 2,
            })}}/>

          <Field
            label={'Login'}
            placeholder={'email'}
            type={'email'}
            error={errors.email || null}
            customErrorMessages={{
              pattern: 'Valor digitado não é um email'
            }}
            formProps={{...register('email', {
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              required: true
            })}}/>

          <Field
            label={'Senha'}
            placeholder={'senha'}
            type={'password'}
            error={errors.password || null}
            customErrorMessages={{
              minLength: 'Senha deve conter no mínimo 8 caracteres'
            }}
            formProps={{...register('password', {
              minLength: 8,
              required: true,
            })}}/>
          
          {formError ? 
            <ErrorArea
              message={formError}/>: null}

          <ActionsHolder>
            <Link href={'/login'}>
              Voltar para o login
            </Link>

            <Button
              value='Cadastrar'
              as='input'
              type="submit" />
          </ActionsHolder>
        </form>
      </ContentHolder>
    </ContentWrapper>
  )
}

export default Register;