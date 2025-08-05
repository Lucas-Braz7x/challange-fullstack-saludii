import CategoriaCell from 'src/components/Categoria/CategoriaCell'

type CategoriaPageProps = {
  id: string
}

const CategoriaPage = ({ id }: CategoriaPageProps) => {
  return <CategoriaCell id={id} />
}

export default CategoriaPage
