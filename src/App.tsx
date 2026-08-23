import React, { useEffect, useState } from 'react';
import './App.scss';

import Navigation from './Components/Navigation';
import Hero from './Components/Hero';
import About from './Components/About';
import Terminal from './Components/Terminal';
import Headline from './Components/Headline';
import ProjectList from './Components/ProjectList';
import withListLoading from './Components/withListLoading.jsx';
import Footer from './Components/Footer';

// remove repos w/ < 1 topic
function clean(obj:any) {
  for (var propName in obj) {
    if (obj[propName].topics.length < 1 || obj[propName].topics === null || obj[propName].topics === undefined) {
      delete obj[propName];
    }
  }
}

// reorder repo list
function reorder(obj:any) {
  let projectList:any = [];
  let order = [
    { name: 'resgen', demo: true, demoUrl: 'https://resumai.services' },
    { name: 'docker_node_ts_mysql', demo: false },
    { name: 'chatterbug', demo: false },
  ];

  for (var i = 0; i < order.length; i++) {
    for (var name in obj) {
      if (obj[name].name === order[i].name) {
        obj[name].has_demo = order[i].demo;
        obj[name].demo_url = (order[i] as any).demoUrl || null;
        projectList.push(obj[name]);
      }
    }
  }

  return projectList;
}

function App() {

  const ListLoading = withListLoading(ProjectList);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true, repos: null });
    const apiUrl = `https://api.github.com/users/AroniasPrenovost/repos?per_page=100`;
    fetch(apiUrl, {
        mode: 'cors',
        headers: new Headers({
            'Accept':'application/vnd.github.mercy-preview+json' // required to get GitHub repo topics
        })
      })
      .then((res) => res.json())
      .then((repos) => {
        clean(repos);
        repos = reorder(repos);
        setAppState({ loading: false, repos: repos });
      });
  }, [setAppState]);

  return (
    <div>
      <Navigation />
      <Hero />
      <About />
      <Terminal />
      <Headline headline='Projects' />
      <main>
        <div className='project featured-project'>
          <div className='col-project'>
            <div className='project-content'>
              <h3>BA-PALM <span className='project-employer'>@ Booz Allen Hamilton</span></h3>
              <p>Open-source enterprise AI platform I lead at Booz Allen Hamilton. Grew from a prompt library into a full agentic platform — RAG pipelines, custom agents, multi-model routing, and a workflow builder. Deployed across 20+ internal teams and delivered to government clients.</p>
              <div className='project-skills'>
                <span className='project-skill'>Next.js</span>
                <span className='project-skill'>TypeScript</span>
                <span className='project-skill'>tRPC</span>
                <span className='project-skill'>PostgreSQL</span>
                <span className='project-skill'>pgvector</span>
                <span className='project-skill'>RAG / GraphRAG</span>
                <span className='project-skill'>AWS Bedrock</span>
                <span className='project-skill'>Kubernetes</span>
              </div>
              <div className='project-links'>
                <a rel='noopener noreferrer' target='_blank' href='https://github.com/boozallen/palm' title='View BA-PALM on GitHub' className='project-link'>View on GitHub <i className='fa fa-github'></i></a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <ListLoading isLoading={appState.loading} repos={appState.repos} />
      <div style={{ textAlign: 'center', padding: '10px 0 60px' }}>
        <a
          rel='noopener noreferrer'
          target='_blank'
          href='https://github.com/AroniasPrenovost'
          className='project-link secondary'
          style={{ display: 'inline-block' }}
        >
          More on GitHub <i className='fa fa-github'></i>
        </a>
      </div>
      <Headline headline='Contact' />
      <Footer />
    </div>
  );
}

export default App;
