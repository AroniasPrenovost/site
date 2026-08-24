import React, { useState, useEffect } from 'react';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const TOTAL_LINES = 27;
const LINE_DELAY_MS = 35;

const Terminal = () => {
  const [visibleLines, setVisibleLines] = useState(() =>
    prefersReducedMotion() ? TOTAL_LINES : 0
  );

  useEffect(() => {
    if (visibleLines >= TOTAL_LINES) return;
    const t = setTimeout(() => setVisibleLines(v => v + 1), LINE_DELAY_MS);
    return () => clearTimeout(t);
  }, [visibleLines]);

  const row = (n: number, content: React.ReactNode, indentCh = 0) => {
    if (n > visibleLines) return null;
    return (
      <div
        key={n}
        className='json-line'
        style={indentCh > 0 ? { paddingLeft: `${indentCh}ch` } : undefined}
      >
        {content}
      </div>
    );
  };

  const jk = (v: string) => <span className='syn-key'>"{v}"</span>;
  const jv = (v: string) => <span className='syn-str'>"{v}"</span>;
  const jp = (v: string) => <span className='syn-punct'>{v}</span>;

  return (
    <div className='json-block'>
      {row(1,  jp('{'))}
      {row(2,  <>{jk('stack')}{jp(': [')}</>, 2)}
      {row(3,  <>{jv('TypeScript')}{jp(',')}</>, 4)}
      {row(4,  <>{jv('React / Next.js')}{jp(',')}</>, 4)}
      {row(5,  <>{jv('Node / tRPC')}{jp(',')}</>, 4)}
      {row(6,  <>{jv('PostgreSQL / pgvector')}{jp(',')}</>, 4)}
      {row(7,  <>{jv('RAG / GraphRAG')}{jp(',')}</>, 4)}
      {row(8,  <>{jv('AI agents')}{jp(',')}</>, 4)}
      {row(9,  <>{jv('AWS')}{jp(',')}</>, 4)}
      {row(10, jv('Kubernetes'), 4)}
      {row(11, jp('],'), 2)}
      {row(12, <>{jk('interests')}{jp(': [')}</>, 2)}
      {row(13, <>{jv('AI agents')}{jp(',')}</>, 4)}
      {row(14, <>{jv('retrieval systems')}{jp(',')}</>, 4)}
      {row(15, <>{jv('developer tools')}{jp(',')}</>, 4)}
      {row(16, <>{jv('guitar')}{jp(',')}</>, 4)}
      {row(17, <>{jv('hiking')}{jp(',')}</>, 4)}
      {row(18, jv('dogs'), 4)}
      {row(19, jp('],'), 2)}
      {row(20, <>{jk('meta')}{jp(': {')}</>, 2)}
      {row(21, <>{jk('location')}{jp(': ')}{jv('Seattle, Washington')}{jp(',')}</>, 4)}
      {row(22, <>{jk('email')}{jp(': ')}<a className='syn-link' href='mailto:aronprenovostmktg@gmail.com' title='Email Aron'>"aronprenovostmktg@gmail.com"</a>{jp(',')}</>, 4)}
      {row(23, <>{jk('resume')}{jp(': ')}<a className='syn-link' href='Aron-Prenovost-Resume.pdf' target='_blank' title="Aron's Resume">"resume.pdf"</a>{jp(',')}</>, 4)}
      {row(24, <>{jk('linkedin')}{jp(': ')}<a className='syn-link' rel='noopener noreferrer' target='_blank' href='https://www.linkedin.com/in/aronprenovost' title="Aron's LinkedIn">"linkedin.com/in/aronprenovost"</a>{jp(',')}</>, 4)}
      {row(25, <>{jk('github')}{jp(': ')}<a className='syn-link' rel='noopener noreferrer' target='_blank' href='https://github.com/AroniasPrenovost' title="Aron's GitHub">"github.com/AroniasPrenovost"</a></>, 4)}
      {row(26, jp('}'), 2)}
      {row(27, jp('}'))}
    </div>
  );
};

export default Terminal;
