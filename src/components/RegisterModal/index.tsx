import { useForm } from "react-hook-form";
import { Modal } from "../Modal";
import { Field } from "../Field";
import { ButtonsWrapper, FieldsWrapper, ModalTitle } from "./styles";
import { Button } from "../Button";
import { IUser } from "@/types";
import { createBarbecue } from "@/service/user";
import { v4 as uuidv4 } from 'uuid';
import { formatCurrencyToCents } from "@/utils";

interface IRegisterModalProps {
  isOpened: boolean;
  onClose: () => void;
  user: IUser
}

export const RegisterModal = ({ isOpened, onClose, user }: IRegisterModalProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: Record<string, string>) => {
    createBarbecue({
      user,
      barbecue: {
        id: uuidv4(),
        title: data.title,
        description: data.description || '',
        observation: data.observation || '',
        priceWithDrinks: formatCurrencyToCents(data.priceWithDrinks),
        priceWithoutDrinks: formatCurrencyToCents(data.priceWithoutDrinks),
        participants: [],
      }
    })
  }

  return (
    <Modal
      onClose={onClose}
      isOpened={isOpened}>
      <ModalTitle>
        Cadastrar churras
      </ModalTitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FieldsWrapper>
          <Field
            label={'Título'}
            placeholder={'Título do evento'}
            type={'text'}
            error={errors.title || null}
            formProps={{
              ...register('title', {
                required: true,
              })}}/>

          <Field
            label={'Data do evento'}
            placeholder={'dd/mm/aaaa'}
            type={'text'}
            error={errors.eventDate || null}
            formProps={{
              ...register('eventDate', {
                required: true,
              })}}/>
          
          <Field
            label={'Descrição'}
            placeholder={'Descrição'}
            type={'textarea'}
            error={errors.description || null}
            formProps={{
              ...register('description')}}/>
            
          <Field
            label={'Observação'}
            placeholder={'Observação'}
            type={'text'}
            error={errors.observation || null}
            formProps={{
              ...register('observation')}}/>
            
          <Field
            label={'Valor com bebida'}
            placeholder={'Valor sugerido com bebida'}
            type={'text'}
            error={errors.priceWithDrinks || null}
            customErrorMessages={{
              pattern: 'Este campo aceita apenas números'
            }}
            formProps={{
              ...register('priceWithDrinks', {
                pattern: /^(0|[1-9]\d*)(,\d+)?$/,
                min: 1
              })}}/>
          
          <Field
            label={'Valor sem bebida'}
            placeholder={'Valor sugerido sem bebida'}
            type={'text'}
            error={errors.priceWithoutDrinks || null}
            customErrorMessages={{
              pattern: 'Este campo aceita apenas números'
            }}
            formProps={{
              ...register('priceWithoutDrinks', {
                pattern: /^(0|[1-9]\d*)(,\d+)?$/,
                min: 1
              })}}/>
        </FieldsWrapper>

        <ButtonsWrapper>
          <Button onClick={onClose}>
            Fechar
          </Button>
          <Button
            type='submit'
            value='Cadastrar'
            as='input'/>
        </ButtonsWrapper>
      </form>

    </Modal>
  );
}