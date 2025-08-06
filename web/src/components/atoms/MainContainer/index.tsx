import { Container } from '@mui/material'
import './styles.scss'

export const MainContainer = ({ children }) => {
  return <Container className="container">{children}</Container>
}
