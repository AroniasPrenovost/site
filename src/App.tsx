import React from 'react';
import './App.scss';

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const FileTextIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
    <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
    <path d="M16 13H8"/>
    <path d="M16 17H8"/>
  </svg>
);

function App() {
  return (
    <>
      <nav className='contact-nav' aria-label='Contact'>
        <a href='mailto:aronprenovostmktg@gmail.com' aria-label='Email' title='Email Aron'>
          <MailIcon />
        </a>
        <a href='https://www.linkedin.com/in/aronprenovost' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn' title='LinkedIn'>
          <LinkedInIcon />
        </a>
        <a href='Aron-Prenovost-Resume.pdf' target='_blank' aria-label='Resume' title='Resume'>
          <FileTextIcon />
        </a>
      </nav>

      <main className='page'>

        <header className='site-header'>
          <h1>Aron Prenovost</h1>
          <p className='tagline'>Technical Lead, PALM @ Booz Allen Hamilton</p>
        </header>

        <section className='projects'>

          <article className='project'>
            <h2 className='project-name'>PALM</h2>
            <p className='project-desc'>Enterprise AI platform I lead at Booz Allen, now open source. RAG pipelines, custom agents, multi-model routing, and a workflow builder. Used across 20+ teams.</p>
            <a className='project-link' href='https://github.com/boozallen/palm' target='_blank' rel='noopener noreferrer' title='PALM on GitHub'>github.com/boozallen/palm</a>
          </article>

          <article className='project'>
            <h2 className='project-name'>ResumAI</h2>
            <p className='project-desc'>Resume tailoring SaaS with a self-running blog — calibrated author personas that slowly evolve, publishing SEO-researched career content on a human rhythm.</p>
            <a className='project-link' href='https://resumai.services' target='_blank' rel='noopener noreferrer' title='ResumAI'>resumai.services</a>
          </article>

          <article className='project'>
            <h2 className='project-name'>docker-node-ts-mysql</h2>
            <p className='project-desc'>A clean, containerized REST API reference: Node, TypeScript, MySQL, and Redis in Docker.</p>
            <a className='project-link' href='https://github.com/AroniasPrenovost/docker_node_ts_mysql' target='_blank' rel='noopener noreferrer' title='docker-node-ts-mysql on GitHub'>github.com/AroniasPrenovost/docker_node_ts_mysql</a>
          </article>

          <a className='more-link' href='https://github.com/AroniasPrenovost' target='_blank' rel='noopener noreferrer' title='More projects on GitHub'>more on GitHub →</a>

        </section>

      </main>
    </>
  );
}

export default App;
