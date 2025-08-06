import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route prerender path="/" page={HomePage} name="home" />
      <Route prerender path="/receitas/{slug}" page={RecipePage} name="receita" />

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
