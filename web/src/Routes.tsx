import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/" page={HomePage} name="home" />
      <Route path="/receitas/{slug}" page={RecipePage} name="receita" />

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
