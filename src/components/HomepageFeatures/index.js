import clsx from 'clsx';
import IconTech from '@site/static/img/icon-tech.svg';
import IconArticles from '@site/static/img/icon-articles.svg';
import IconForums from '@site/static/img/icon-forums.svg';
import styles from './styles.module.css';


const FeatureList = [
  {
    title: (
      <a href="https://kb.pyx.io/docs/intro" target="_blank" rel="noopener noreferrer" className={styles.featureLink}>
        <div className={styles.iconAndText}>
          <IconTech className={styles.icon} alt="Technical Documents Icon" />
          <span>Tech Docs</span>
        </div>
      </a>
    ),
    description: (
      <p className={styles.description}>
        Technical documents for developers and trust architects implementing UNTP.
      </p>
    ),
  },
  {
    title: (
      <a href="https://pulse.pyx.io/" target="_blank" rel="noopener noreferrer" className={styles.featureLink}>
        <div className={styles.iconAndText}>
          <IconArticles className={styles.icon} alt="Articles Icon" />
          <span>Blog</span>
        </div>
      </a>
    ),
    description: (
      <p className={styles.description}>
        Pyx Pulse News and views on the latest developments in the world of UNTP and Pyx.
      </p>
    ),
  },
  {
    title: (
      <a href="https://forum.pyx.io/" target="_blank" rel="noopener noreferrer" className={styles.featureLink}>
        <div className={styles.iconAndText}>
          <IconForums className={styles.icon} alt="Forums Icon" />
          <span>Forums</span>
        </div>
      </a>
    ),
    description: (
      <p className={styles.description}>
        Pyx forums are here for community support of your open-source implementation of UNTP.
      </p>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx('col col--4', styles.card)}> {/* Added the card class */}
      <div className={styles.cardContent}> {/* Card content styling */}
        <div className="text--center">
          {title}
        </div>
        <div className="text--center padding-horiz--md">
          {description}
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((feature, idx) => (
            <Feature key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
