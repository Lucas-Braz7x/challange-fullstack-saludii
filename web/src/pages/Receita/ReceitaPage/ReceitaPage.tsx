import ReceitaCell from 'src/components/Receita/ReceitaCell'

type ReceitaPageProps = {
  id: string
}

const ReceitaPage = ({ id }: ReceitaPageProps) => {
  return <ReceitaCell id={id} />
}

export default ReceitaPage
