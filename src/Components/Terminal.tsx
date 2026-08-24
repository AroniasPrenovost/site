import React, { useState, useEffect } from 'react';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const TOTAL_LINES = 29;
const LINE_DELAY_MS = 55;

const Terminal = () => {
  const [minimized, setMinimized] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const [closed, setClosed] = useState(false);
  const [visibleLines, setVisibleLines] = useState(() =>
    prefersReducedMotion() ? TOTAL_LINES : 0
  );

  useEffect(() => {
    if (visibleLines >= TOTAL_LINES) return;
    const t = setTimeout(() => setVisibleLines(v => v + 1), LINE_DELAY_MS);
    return () => clearTimeout(t);
  }, [visibleLines]);

  useEffect(() => {
    if (!zoomed) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setZoomed(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [zoomed]);

  if (closed) return null;

  const row = (n: number, content: React.ReactNode, indentCh = 0) => {
    if (n > visibleLines) return null;
    return (
      <div
        key={n}
        className='json-line'
        style={indentCh > 0 ? { paddingLeft: `calc(52px + ${indentCh}ch)` } : undefined}
      >
        {content}
      </div>
    );
  };

  const jk = (v: string) => <span className='syn-key'>"{v}"</span>;
  const jv = (v: string) => <span className='syn-str'>"{v}"</span>;
  const jp = (v: string) => <span className='syn-punct'>{v}</span>;

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
          <button className='header-button red' aria-label='Close aron.json' onClick={() => setClosed(true)} />
          <button className='header-button yellow' aria-label='Minimize aron.json' aria-expanded={!minimized} onClick={() => setMinimized(prev => !prev)} />
          <button className='header-button green' aria-label='Zoom aron.json' aria-expanded={zoomed} onClick={() => setZoomed(prev => !prev)} />
          <span className='filename-tab'>aron.json</span>
        </div>

        <div className={`terminal-window${minimized ? ' terminal-window--minimized' : ''}`}>
          {row(1,  jp('{'))}
          {row(2,  <>{jk('location')}{jp(': ')}{jv('Seattle, Washington')}{jp(',')}</>, 2)}
          {row(3,  <>{jk('stack')}{jp(': [')}</>, 2)}
          {row(4,  <>{jv('TypeScript')}{jp(',')}</>, 4)}
          {row(5,  <>{jv('React / Next.js')}{jp(',')}</>, 4)}
          {row(6,  <>{jv('Node / tRPC')}{jp(',')}</>, 4)}
          {row(7,  <>{jv('PostgreSQL / pgvector')}{jp(',')}</>, 4)}
          {row(8,  <>{jv('RAG / GraphRAG')}{jp(',')}</>, 4)}
          {row(9,  <>{jv('AI agents')}{jp(',')}</>, 4)}
          {row(10, <>{jv('AWS')}{jp(',')}</>, 4)}
          {row(11, jv('Kubernetes'), 4)}
          {row(12, jp('],'), 2)}
          {row(13, <>{jk('interests')}{jp(': [')}</>, 2)}
          {row(14, <>{jv('AI platforms')}{jp(',')}</>, 4)}
          {row(15, <>{jv('agentic systems')}{jp(',')}</>, 4)}
          {row(16, <>{jv('developer experience')}{jp(',')}</>, 4)}
          {row(17, <>{jv('design & UX')}{jp(',')}</>, 4)}
          {row(18, <>{jv('mentoring')}{jp(',')}</>, 4)}
          {row(19, <>{jv('guitar')}{jp(',')}</>, 4)}
          {row(20, <>{jv('hiking')}{jp(',')}</>, 4)}
          {row(21, jv('dogs'), 4)}
          {row(22, jp('],'), 2)}
          {row(23, <>{jk('meta')}{jp(': {')}</>, 2)}
          {row(24, <>{jk('email')}{jp(': ')}<a className='syn-link' href='mailto:aronprenovostmktg@gmail.com' title='Email Aron'>"aronprenovostmktg@gmail.com"</a>{jp(',')}</>, 4)}
          {row(25, <>{jk('resume')}{jp(': ')}<a className='syn-link' href='Aron-Prenovost-Resume.pdf' target='_blank' title="Aron's Resume">"resume.pdf"</a>{jp(',')}</>, 4)}
          {row(26, <>{jk('linkedin')}{jp(': ')}<a className='syn-link' rel='noopener noreferrer' target='_blank' href='https://www.linkedin.com/in/aronprenovost' title="Aron's LinkedIn">"linkedin.com/in/aronprenovost"</a>{jp(',')}</>, 4)}
          {row(27, <>{jk('github')}{jp(': ')}<a className='syn-link' rel='noopener noreferrer' target='_blank' href='https://github.com/AroniasPrenovost' title="Aron's GitHub">"github.com/AroniasPrenovost"</a></>, 4)}
          {row(28, jp('}'), 2)}
          {row(29, jp('}'))}
        </div>
      </div>
    </>
  );
};

export default Terminal;
