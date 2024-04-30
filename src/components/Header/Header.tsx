import { NavLink } from "react-router-dom"
import styles from "./Header.module.css"

const Header = () => {
  return (
    <div className={styles.header_wrapper}>
      <h1 className={styles.header_title}>KINOSOFT</h1>
      <nav>
        <ul className={styles.header_nav}>
          <li className={styles.header_item}>
            <NavLink to={"/films"}>Все фильмы</NavLink>
          </li>
          <li className={styles.header_item}>
            <NavLink to={"/films/search"}>Поиск</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header