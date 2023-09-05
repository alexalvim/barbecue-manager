import { useForm } from 'react-hook-form'
import { Modal } from '../Modal'
import { Field } from '../Field'
import {
  ButtonsWrapper,
  FieldDisclaimer,
  FieldsWrapper,
  ModalTitle,
} from './styles'
import { Button } from '../Button'
import { IBarbecue, IUser } from '@/types'
import { addParticipant } from '@/service/user'
import { v4 as uuidv4 } from 'uuid'
import {
  formatCentsToCurrency,
  formatCurrencyToCents,
} from '@/utils/formatters'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const addParticipantFormSchema = z.object({
  name: z
    .string()
    .nonempty('Nome do participante é obrigatório')
    .min(2, 'Nome deve ter no mínimo 2 caracteres'),
  contributeValue: z
    .string()
    .optional()
    .refine(
      (priceWithoutDrinks = '') =>
        /^(0|[1-9]\d*)(,\d+)?$/.test(priceWithoutDrinks) ||
        priceWithoutDrinks === '',
      'Este campo aceita apenas números. Ex: 10,00',
    )
    .transform((contributeValue) =>
      contributeValue ? formatCurrencyToCents(contributeValue) : 0,
    ),
})

interface IAddParticipantModalProps {
  isOpened: boolean
  onClose: () => void
  user: IUser
  barbecue?: IBarbecue
}

export const AddParticipantModal = ({
  isOpened,
  onClose,
  user,
  barbecue,
}: IAddParticipantModalProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(addParticipantFormSchema),
  })

  const onSubmit = async (data: Record<string, string>) => {
    await addParticipant({
      user,
      barbecueId: barbecue?.id || '',
      participant: {
        id: uuidv4(),
        name: data.name,
        contributeValue: +data.contributeValue,
        paid: false,
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
      isOpened={isOpened && !!barbecue}
    >
      <ModalTitle>Adicionar Participante</ModalTitle>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          return handleSubmit(onSubmit)
        }}
      >
        <FieldsWrapper>
          <Field
            label={'Nome'}
            placeholder={'Nome do participante'}
            type={'text'}
            errorMessage={errors?.name?.message?.toString() || null}
            formProps={{ ...register('name') }}
          />
          <Field
            label={'Valor da contribuição em reais'}
            placeholder={'Ex: 10,00'}
            type={'text'}
            errorMessage={errors?.contributeValue?.message?.toString() || null}
            formProps={{ ...register('contributeValue') }}
          />
          {barbecue?.priceWithoutDrinks || barbecue?.priceWithDrinks ? (
            <FieldDisclaimer>
              Valor de contribuição sugerido:
              {barbecue?.priceWithoutDrinks ? (
                <>
                  <br />
                  <span>
                    R$ {formatCentsToCurrency(barbecue?.priceWithoutDrinks)} sem
                    bebida
                  </span>
                </>
              ) : null}
              {barbecue?.priceWithDrinks ? (
                <>
                  <br />
                  <span>
                    R$ {formatCentsToCurrency(barbecue?.priceWithDrinks)} com
                    bebida
                  </span>
                </>
              ) : null}
            </FieldDisclaimer>
          ) : null}
        </FieldsWrapper>
        <ButtonsWrapper>
          <Button
            onClick={(e) => {
              e.preventDefault()
              onClose()
              reset()
            }}
          >
            Fechar
          </Button>
          <Button type="submit" value="Adicionar" as="input" />
        </ButtonsWrapper>
      </form>
    </Modal>
  )
}
