import styles from "../styles/Layout.module.css";
import React from "react";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>{children}</main>
    </div>
  );
}

export default Layout;
