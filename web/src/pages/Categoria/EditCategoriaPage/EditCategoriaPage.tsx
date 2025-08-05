import EditCategoriaCell from 'src/components/Categoria/EditCategoriaCell'

type CategoriaPageProps = {
  id: string
}

const EditCategoriaPage = ({ id }: CategoriaPageProps) => {
  return <EditCategoriaCell id={id} />
}

export default EditCategoriaPage
