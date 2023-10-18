import styles from "./style.module.css";
import "../globals.css"

export default function Home({ params }: { params: {} }) {
  return (
    <>
      {" "}
      <div className={styles.something}>something</div>
      <div className={styles.another}>this is some paragraph</div>
      <div className="fromGlobal">this is some paragraph</div>
    </>
  );
}
