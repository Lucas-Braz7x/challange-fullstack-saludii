import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/" page={HomePage} name="home" />
      <Set wrap={ScaffoldLayout} title="Tags" titleTo="tags" buttonLabel="New Tag" buttonTo="newTag">
        <Route path="/tags/new" page={TagNewTagPage} name="newTag" />
        <Route path="/tags/{id}/edit" page={TagEditTagPage} name="editTag" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Categorias" titleTo="categorias" buttonLabel="New Categoria" buttonTo="newCategoria">
        <Route path="/categorias/new" page={CategoriaNewCategoriaPage} name="newCategoria" />
        <Route path="/categorias/{id}/edit" page={CategoriaEditCategoriaPage} name="editCategoria" />
      </Set>

      <Route path="/receitas/new" page={ReceitaNewReceitaPage} name="newReceita" />
      <Route path="/receitas/{id}/edit" page={ReceitaEditReceitaPage} name="editReceita" />
      <Route path="/receitas/{id}" page={ReceitaReceitaPage} name="receita" />
      <Route path="/receitas" page={ReceitaReceitasPage} name="receitas" />

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
