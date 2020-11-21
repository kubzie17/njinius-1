import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';


const features = [
    {
      title: 'C++',
      imageUrl: 'img/c++.png',
      destination: '/videos',
      description: (
        <>
          Brief descriptin of what Njinius is.
        </>
      ),
    },
    {
      title: 'C#',
      imageUrl: 'img/csharp.jpg',
      destination: '/videos2',
      description: (
        <>
          Brief description of the video tutorials and code sharing tasks
        </>
      ),
    },
    {
      title: 'Python',
      imageUrl: 'img/python.png',
      destination: '/videos2',
      description: (
        <>
          Brief description of the book clubs
        </>
      ),
    },
    {
      title: 'JavaScript',
      imageUrl: 'img/js.png',
      destination: '/videos3',
      description: (
        <>
          Brief descriptin of what Njinius is.
        </>
      ),
    },
    {
      title: 'Multiple Stack',
      imageUrl: 'img/fullstack.png',
      destination: '/videos4',
      description: (
        <>
          Brief description of the video tutorials and code sharing tasks
        </>
      ),
    },
    {
      title: 'Tools/IDE',
      imageUrl: 'img/IDE.gif',
      destination: '/videos4',
      description: (
        <>
          Brief description of the book clubs
        </>
      ),
    },
  ];
  
  function Feature({imageUrl, title, description, destination}) {
    const imgUrl = useBaseUrl(imageUrl);
    return (
      <div className={clsx('col col--4', styles.feature)}>
        {imgUrl && (
          <div className="text--center">
              <Link to={destination}>
                <img className="{styles.featureImage}" src={imgUrl} alt={title} width="200" height="155" />
              </Link>
          </div>
        )}
        <h3 style={{textAlign: 'center', alignItems: 'center',justifyContent: 'center',}}>{title}</h3>
        <p>{description}</p>
      </div>
    );
  }

function About() {
    const context = useDocusaurusContext();
  return (
    <Layout title="About">
        <header >
            <div
             style={{
                   // display: 'flex',
                   textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <h1 className="tilte">{'Programing'} </h1>
                    <p className="subtitle">{"description about the njinius and how it cam about and the founders"}</p>
            </div>
        </header>
        <main>
            {features && features.length > 0 && (
            <section className={styles.features}>
                <div className="container">
                <div className="row">
                    {features.map((props, idx) => (
                    <Feature key={idx} {...props} />
                    ))}
                </div>
                </div>
            </section>
        )}
        </main>
      
    </Layout>
  );
}

export default About;