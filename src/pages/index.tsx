import Sidebar from '../components/model/sidebar/Sidebar';
import styles from './index.module.css';

const Home = () => {
  return (
    <>
      {' '}
      <Sidebar />
      <div className={styles.container}>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </div>
    </>
  );
};

export default Home;
