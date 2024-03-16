import styles from "./Contact.module.css";
import { MdPerson } from "react-icons/md";
import { MdPhone } from "react-icons/md";

const Contact = ({ data }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.textbox}>
          <MdPerson size="24" />
          <p className={styles.text}>{data.name}</p>
        </div>
        <div className={styles.textbox}>
          <MdPhone size="24" />
          <p className={styles.text}>{data.number}</p>
        </div>
      </div>
      <button type="button" className={styles.button}>
        Delite
      </button>
    </>
  );
};

export default Contact;
