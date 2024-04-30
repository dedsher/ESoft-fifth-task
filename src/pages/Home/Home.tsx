import Header from "@components/Header/Header";
import Sidebar from "@components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home_wrapper}>
      <div className={styles.header_wrapper}>
        <Header />
      </div>
      <aside className={styles.aside_wrapper}>
        <Sidebar />
      </aside>
      <section className={styles.content_wrapper}>
        <Outlet />
      </section>
    </div>
  );
};

export default Home;
