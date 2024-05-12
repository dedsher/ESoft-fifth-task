import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import styles from './Index.module.css';

const Index = () => {
  return (
    <div className={styles.container}>
        <h1>Главная страница</h1>
        <div className={styles.buttons}>
            <Button variant="text" color="primary">
                <Link to="/films" className={styles.link}>Все фильмы</Link>
            </Button>
            <Button variant="text" color="primary">
                <Link to="/films/search" className={styles.link}>Поиск</Link>
            </Button>
        </div>
    </div>
  )
}

export default Index