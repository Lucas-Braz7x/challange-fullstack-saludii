import type { EditCategoriaById, UpdateCategoriaInput } from 'types/graphql'

import type { RWGqlError } from '@redwoodjs/forms'
import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

type FormCategoria = NonNullable<EditCategoriaById['categoria']>

interface CategoriaFormProps {
  categoria?: EditCategoriaById['categoria']
  onSave: (data: UpdateCategoriaInput, id?: FormCategoria['id']) => void
  error: RWGqlError
  loading: boolean
}

const CategoriaForm = (props: CategoriaFormProps) => {
  const onSubmit = (data: FormCategoria) => {
    props.onSave(data, props?.categoria?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormCategoria> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="nome"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Nome
        </Label>

        <TextField
          name="nome"
          defaultValue={props.categoria?.nome}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="nome" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default CategoriaForm
