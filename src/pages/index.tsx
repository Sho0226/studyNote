import { Header } from '../components/model/header/header';
import styles from './index.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <h1>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
    </div>
  );
};

export default Home;
