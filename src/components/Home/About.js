import React from 'react';
import Title from '../Title';
import styles from '../../css/about.module.css';
import img from '../../images/defaultBcg.jpeg';

const About = () => {
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} alt="about us" />
          </div>
        </article>

        <article className={styles.aboutInfo}>
          <h4>explore the difference</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
            quibusdam assumenda dolorum expedita laboriosam eligendi non
            inventore dolore? Reprehenderit quis nemo repellendus cupiditate cum
            exercitationem sapiente ut voluptas non ullam!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
            quibusdam assumenda dolorum expedita laboriosam eligendi non
            inventore dolore? Reprehenderit quis nemo repellendus cupiditate cum
            exercitationem sapiente ut voluptas non ullam!
          </p>
          <button type="button" className="btn-primary">
            read more
          </button>
        </article>
      </div>
    </section>
  );
};

export default About;
