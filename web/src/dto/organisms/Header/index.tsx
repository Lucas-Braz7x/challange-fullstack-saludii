import { MENU_OPTIONS } from './constants'
import './styles.scss'

export const Header = () => {
  return (
    <header className="menu-flex">
      <div>Receitas++</div>

      <ul className="menu-options">
        {MENU_OPTIONS.map((record) => (
          <li key={record.name}>{record.name}</li>
        ))}
      </ul>
    </header>
  )
}
