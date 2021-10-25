import Nav from "../Components/Nav";
import styles from "../styles/Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
}

export default Layout;
