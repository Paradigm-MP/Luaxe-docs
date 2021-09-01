import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'The Perfect Tool',
    Svg: require('../../static/img/axe.svg').default,
    description: (
      <>
        Luaxe chops Valheim up into nice building blocks. Now it's 
        time for you to build a house.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('../../static/img/valheim.svg').default,
    description: (
      <>
        Stop compiling your code and start running it. With Luaxe, no compilation is needed and you can focus on what matters: your gamemode.
      </>
    ),
  },
  {
    title: 'Powered by Lua',
    Svg: require('../../static/img/lua.svg').default,
    description: (
      <>
        Harness the power of Lua 5.4 and script the gamemode of your dreams. 
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
