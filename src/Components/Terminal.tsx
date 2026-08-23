import React, { useState, useEffect } from 'react';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const Terminal = () => {
  const [minimized, setMinimized] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const [closed, setClosed] = useState(false);

  // Escape closes zoom
  useEffect(() => {
    if (!zoomed) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setZoomed(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [zoomed]);

  if (closed) return null;

  return (
    <>
      {zoomed && (
        <div
          className='terminal-zoom-overlay'
          onClick={() => setZoomed(false)}
          aria-hidden='true'
        />
      )}
      <div className={`about-container${zoomed ? ' about-container--zoomed' : ''}`}>
        <div className='terminal-header'>
          <button
            className='header-button red'
            aria-label='Close aron.ts'
            onClick={() => setClosed(true)}
          />
          <button
            className='header-button yellow'
            aria-label='Minimize aron.ts'
            aria-expanded={!minimized}
            onClick={() => setMinimized(p => !p)}
          />
          <button
            className='header-button green'
            aria-label='Zoom aron.ts'
            aria-expanded={zoomed}
            onClick={() => setZoomed(p => !p)}
          />
          <span className='filename-tab'>aron.ts</span>
        </div>

        <div className={`terminal-window${minimized ? ' terminal-window--minimized' : ''}`}>
          <div className='statement'>
            <div className='input-statement'>aron.role</div>
            <div className='return-statement'>'Senior Software Engineer &amp; Technical Lead'</div>
          </div>
          <div className='statement'>
            <div className='input-statement'>aron.location</div>
            <div className='return-statement'>'Seattle, Washington'</div>
          </div>
          <div className='statement'>
            <div className='input-statement'>aron.focus</div>
            <div className='return-statement'>['AI platforms', 'agentic systems', 'developer experience', 'design &amp; UX']</div>
          </div>
          <div className='statement'>
            <div className='input-statement'>aron.leading</div>
            <div className='return-statement'>'PALM — enterprise AI platform (open source, 1,000+ engineers)'</div>
          </div>
          <div className='statement'>
            <div className='input-statement'>aron.stack</div>
            <div className='return-statement'>['TypeScript', 'React / Next.js', 'Node / tRPC', 'PostgreSQL / pgvector', 'RAG / GraphRAG', 'AI agents', 'AWS', 'Kubernetes']</div>
          </div>
          <div className='statement'>
            <div className='input-statement'>aron.interests</div>
            <div className='return-statement'>['system design', 'mentoring', 'guitar', 'hiking', 'dogs']</div>
          </div>
          <div className='statement'>
            <div className='input-statement'>aron.meta</div>
            <div className='return-statement'>
              <ul>
                <li>&#123;</li>
                <li>email: '<a title="Email Aron" href='mailto:aronprenovostmktg@gmail.com'>aronprenovostmktg@gmail.com</a>',</li>
                <li>resume: '<a target='_blank' title="Aron's Resume" href='Aron-Prenovost-Resume.pdf'>resume.pdf</a>',</li>
                <li>linkedin: '<a rel='noopener noreferrer' target='_blank' title="Aron's LinkedIn" href='https://www.linkedin.com/in/aronprenovost'>linkedin.com/in/aronprenovost</a>',</li>
                <li>github: '<a rel='noopener noreferrer' target='_blank' title="Aron's GitHub" href='https://github.com/AroniasPrenovost'>github.com/AroniasPrenovost</a>'</li>
                <li>&#125;</li>
              </ul>
            </div>
          </div>
          <div className='statement'>
            <div className='input-statement blink-cursor'>&gt;</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terminal;
