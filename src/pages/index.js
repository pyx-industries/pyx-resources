import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx('container', styles.heroContainer)}>
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"  // Applying button styles
            to="/docs/intro"
          >
            Pyx Introduction - 5min
            <img 
              src="/img/clock-icon.svg"  // Path to your image
              alt="Clock Icon" 
              className={styles.buttonImage}  // CSS class for image styling
            />
          </Link>       
        </div>
      </div>
      {/* Hero image background */}
      <div className={styles.heroImage}></div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Your Knowledge Base for Technical Documentation`}  // Updated title
      description="The PYX Knowledge Base offers comprehensive technical documentation and articles to support your learning and development."  // Updated description
    >      
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
