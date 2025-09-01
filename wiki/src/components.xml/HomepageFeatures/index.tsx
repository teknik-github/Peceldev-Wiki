import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import FeatureImage from './FeatureImage';


type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  image?: string;
  description: ReactNode;
};


const FeatureList: FeatureItem[] = [
  {
    title: 'Mudah Di Pelajari',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Semua Pelajaran DevOps, GitHub Action, dan CI/CD di dalam satu tempat.
      </>
    ),
  },
  {
    title: 'Pelajaran Yang Terstruktur',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Pelajaran yang terstruktur dan mudah diikuti. Anda dapat belajar dengan
        cepat dan efisien.
      </>
    ),
  },
  {
    title: 'Responsive dan Interaktif',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Dapatkan pengalaman belajar yang lebih baik dengan tampilan yang
        responsif dan interaktif.
      </>
    ),
  },
];


function Feature({ title, Svg, image, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <FeatureImage Svg={Svg} image={image} alt={title} className={styles.featureSvg} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}



export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
          
        </div>
      </div>
    </section>
  );
}
