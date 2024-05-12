import { useAppSelector } from "@hooks/useReducerHooks";
import styles from "./Sidebar.module.css";
import SidebarItem from "@components/SidebarItem/SidebarItem";

const Sidebar = () => {
  const favorites = useAppSelector((state) => state.favFilms.favFilms);
  const later = useAppSelector((state) => state.laterFilms.laterFilms);

  return (
    <div>
      <h2>Избранные</h2>
      <ul className={styles.sidebar_list}>
        {favorites.map((film) => (
          <SidebarItem key={film.id} film={film} />
        ))}
      </ul>

      <h2>Посмотреть позже</h2>
      <ul className={styles.sidebar_list}>
        {later.map((film) => (
          <SidebarItem key={film.id} film={film} isFav={false} />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
