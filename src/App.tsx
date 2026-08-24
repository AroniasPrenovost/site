import React from 'react';
import './App.scss';

function App() {
  return (
    <main className='page'>

      <header className='site-header'>
        <h1>Aron Prenovost</h1>
        <p className='tagline'>Technical Lead, PALM @ Booz Allen Hamilton</p>
      </header>

      <section className='projects'>

        <article className='project'>
          <h2 className='project-name'>PALM</h2>
          <p className='project-desc'>Enterprise AI platform I lead at Booz Allen, now open source. RAG pipelines, custom agents, multi-model routing, and a workflow builder. Used across 20+ teams.</p>
          <a className='project-link' href='https://github.com/boozallen/palm' target='_blank' rel='noopener noreferrer'>github.com/boozallen/palm</a>
        </article>

        <article className='project'>
          <h2 className='project-name'>ResumAI</h2>
          <p className='project-desc'>AI resume and career-content SaaS with a self-running blog engine that researches and publishes on its own, web-search-backed.</p>
          <a className='project-link' href='https://resumai.services' target='_blank' rel='noopener noreferrer'>resumai.services</a>
        </article>

        <article className='project'>
          <h2 className='project-name'>docker-node-ts-mysql</h2>
          <p className='project-desc'>A clean, containerized REST API reference: Node, TypeScript, MySQL, and Redis in Docker.</p>
          <a className='project-link' href='https://github.com/AroniasPrenovost/docker_node_ts_mysql' target='_blank' rel='noopener noreferrer'>github.com/AroniasPrenovost/docker_node_ts_mysql</a>
        </article>

        <a className='more-link' href='https://github.com/AroniasPrenovost' target='_blank' rel='noopener noreferrer'>more on GitHub →</a>

      </section>

      <footer className='contact'>
        <a href='mailto:aronprenovostmktg@gmail.com'>email</a>
        <span className='sep' aria-hidden='true'>·</span>
        <a href='https://www.linkedin.com/in/aronprenovost' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
        <span className='sep' aria-hidden='true'>·</span>
        <a href='Aron-Prenovost-Resume.pdf' target='_blank'>résumé</a>
      </footer>

    </main>
  );
}

export default App;
