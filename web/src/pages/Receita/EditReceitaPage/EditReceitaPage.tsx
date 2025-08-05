import EditReceitaCell from 'src/components/Receita/EditReceitaCell'

type ReceitaPageProps = {
  id: string
}

const EditReceitaPage = ({ id }: ReceitaPageProps) => {
  return <EditReceitaCell id={id} />
}

export default EditReceitaPage
