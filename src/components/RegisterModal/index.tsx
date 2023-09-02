import { useForm } from 'react-hook-form'
import { Modal } from '../Modal'
import { Field } from '../Field'
import { ButtonsWrapper, FieldsWrapper, ModalTitle } from './styles'
import { Button } from '../Button'
import { IUser } from '@/types'
import { createBarbecue } from '@/service/user'
import { v4 as uuidv4 } from 'uuid'
import { formatCurrencyToCents } from '@/utils'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const createBarbecueFormSchema = z.object({
  title: z.string().nonempty('O título do evento é obrigatório'),
  eventDate: z
    .string()
    .nonempty('A data do churras é obrigatória')
    .refine(
      (eventDate) => /\d{2}\/\d{2}\/\d{4}/.test(eventDate),
      'Valor inserido não é uma data válida',
    ),
  descripton: z.string().optional(),
  observation: z.string().optional(),
  priceWithDrinks: z
    .string()
    .optional()
    .refine(
      (priceWithDrinks = '') =>
        /^(0|[1-9]\d*)(,\d+)?$/.test(priceWithDrinks) || priceWithDrinks === '',
      'Este campo aceita apenas números. Ex: 10,00',
    )
    .transform((priceWithDrinks) =>
      priceWithDrinks
        ? formatCurrencyToCents(priceWithDrinks)
        : priceWithDrinks,
    ),
  priceWithoutDrinks: z
    .string()
    .optional()
    .refine(
      (priceWithoutDrinks = '') =>
        /^(0|[1-9]\d*)(,\d+)?$/.test(priceWithoutDrinks) ||
        priceWithoutDrinks === '',
      'Este campo aceita apenas números. Ex: 10,00',
    )
    .transform((priceWithoutDrinks) =>
      priceWithoutDrinks
        ? formatCurrencyToCents(priceWithoutDrinks)
        : priceWithoutDrinks,
    ),
})

interface IRegisterModalProps {
  isOpened: boolean
  onClose: () => void
  user: IUser
}

export const RegisterModal = ({
  isOpened,
  onClose,
  user,
}: IRegisterModalProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createBarbecueFormSchema),
  })

  const onSubmit = async (data: Record<string, string>) => {
    await createBarbecue({
      user,
      barbecue: {
        id: uuidv4(),
        title: data.title,
        description: data.description || '',
        observation: data.observation || '',
        priceWithDrinks: +data.priceWithDrinks,
        priceWithoutDrinks: +data.priceWithoutDrinks,
        eventDate: data.eventDate,
        participants: [],
      },
    })

    onClose()
    reset()
  }

  return (
    <Modal
      onClose={() => {
        onClose()
        reset()
      }}
      isOpened={isOpened}
    >
      <ModalTitle>Cadastrar churras</ModalTitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FieldsWrapper>
          <Field
            label={'Título'}
            placeholder={'Título do evento'}
            type={'text'}
            error={errors.title || null}
            formProps={{ ...register('title') }}
          />

          <Field
            label={'Data do churras'}
            placeholder={'dd/mm/aaaa'}
            type={'text'}
            error={errors.eventDate || null}
            formProps={{ ...register('eventDate') }}
          />

          <Field
            label={'Descrição'}
            placeholder={'Descrição'}
            type={'textarea'}
            error={errors.description || null}
            formProps={{ ...register('description') }}
          />

          <Field
            label={'Observação'}
            placeholder={'Observação'}
            type={'text'}
            error={errors.observation || null}
            formProps={{ ...register('observation') }}
          />

          <Field
            label={'Valor sugerido com bebida'}
            placeholder={'Valor sugerido com bebida'}
            type={'text'}
            error={errors.priceWithDrinks || null}
            formProps={{ ...register('priceWithDrinks') }}
          />

          <Field
            label={'Valor sugerido sem bebida'}
            placeholder={'Valor sugerido sem bebida'}
            type={'text'}
            error={errors.priceWithoutDrinks || null}
            formProps={{ ...register('priceWithoutDrinks') }}
          />
        </FieldsWrapper>

        <ButtonsWrapper>
          <Button
            onClick={() => {
              onClose()
              reset()
            }}
          >
            Fechar
          </Button>
          <Button type="submit" value="Cadastrar" as="input" />
        </ButtonsWrapper>
      </form>
    </Modal>
  )
}
