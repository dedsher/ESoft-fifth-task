import Header from "@components/Header/Header";
import Sidebar from "@components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import styles from "./Home.module.css";
import Wrapper from "@components/Wrapper/Wrapper";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.header}>
        <Header />
      </div>
      <Wrapper>
        <div className={styles.main}>
          <section className={styles.content}>
            <Outlet />
          </section>
          <aside className={styles.aside}>
            <Sidebar />
          </aside>
        </div>
      </Wrapper>
    </div>
  );
};

export default Home;
