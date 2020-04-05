import React from 'react';
import Title from '../Title';
import styles from '../../css/contact.module.css';

const Contact = () => {
  return (
    <section className={styles.contact}>
      <Title title="contact" subtitle="us" />
      <div className={styles.center}>
        <form
          className={styles.form}
          action="https://formspree.io/mqkdeyyl"
          method="POST"
        >
          <label htmlFor="name">name</label>
          <input
            type="text"
            name="name"
            id="name"
            className={styles.formControl}
            placeHolder="your name"
            required
          />
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            id="email"
            className={styles.formControl}
            placeHolder="email@email.com"
          />
          <label htmlFor="message">message</label>
          <textarea
            name="message"
            id="message"
            rows="10"
            className={styles.formControl}
            placeholder="txt"
          />

          <input type="submit" value="submt" className={styles.submit} />
        </form>
      </div>
    </section>
  );
};

export default Contact;
