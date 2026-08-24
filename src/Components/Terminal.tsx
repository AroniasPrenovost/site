import React, { useState, useEffect } from 'react';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const TOTAL_LINES = 41;
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

  const row = (n: number, content: React.ReactNode, indentCh = 0, mt = 0) => {
    if (n > visibleLines) return null;
    const style: React.CSSProperties = {};
    if (indentCh > 0) style.paddingLeft = `${indentCh}ch`;
    if (mt > 0) style.marginTop = `${mt}px`;
    return (
      <div key={n} className='json-line' style={Object.keys(style).length ? style : undefined}>
        {content}
      </div>
    );
  };

  const jk = (v: string) => <span className='syn-key'>"{v}"</span>;
  const jv = (v: string) => <span className='syn-str'>"{v}"</span>;
  const jn = (v: string) => <span className='syn-name'>"{v}"</span>;
  const jp = (v: string) => <span className='syn-punct'>{v}</span>;

  return (
    <div className='json-block'>
      {row(1,  jp('{'))}
      {row(2,  <>{jk('name')}{jp(': ')}<h1 className='json-name'>"Aron Prenovost"</h1>{jp(',')}</>, 2)}
      {row(3,  <>{jk('title')}{jp(': ')}<span className='syn-title'>"Technical Lead, PALM @ Booz Allen Hamilton"</span>{jp(',')}</>, 2)}
      {row(4,  <>{jk('stack')}{jp(': [')}</>, 2)}
      {row(5,  <>{jv('TypeScript')}{jp(',')}</>, 4)}
      {row(6,  <>{jv('React / Next.js')}{jp(',')}</>, 4)}
      {row(7,  <>{jv('Node / tRPC')}{jp(',')}</>, 4)}
      {row(8,  <>{jv('PostgreSQL / pgvector')}{jp(',')}</>, 4)}
      {row(9,  <>{jv('RAG / GraphRAG')}{jp(',')}</>, 4)}
      {row(10, <>{jv('AI agents')}{jp(',')}</>, 4)}
      {row(11, <>{jv('AWS')}{jp(',')}</>, 4)}
      {row(12, jv('Kubernetes'), 4)}
      {row(13, jp('],'), 2)}
      {row(14, <>{jk('interests')}{jp(': [')}</>, 2)}
      {row(15, <>{jv('AI agents')}{jp(',')}</>, 4)}
      {row(16, <>{jv('retrieval systems')}{jp(',')}</>, 4)}
      {row(17, <>{jv('developer tools')}{jp(',')}</>, 4)}
      {row(18, <>{jv('guitar')}{jp(',')}</>, 4)}
      {row(19, <>{jv('hiking')}{jp(',')}</>, 4)}
      {row(20, jv('dogs'), 4)}
      {row(21, jp('],'), 2)}
      {row(22, <>{jk('projects')}{jp(': [')}</>, 2)}
      {row(23, jp('{'), 4)}
      {row(24, <>{jk('name')}{jp(': ')}{jn('PALM')}{jp(',')}</>, 6)}
      {row(25, <>{jk('description')}{jp(': ')}{jv('Enterprise AI platform at Booz Allen Hamilton — RAG pipelines, custom agents, multi-model routing, workflow builder.')}{jp(',')}</>, 6)}
      {row(26, <>{jk('link')}{jp(': ')}<a className='syn-link' rel='noopener noreferrer' target='_blank' href='https://github.com/boozallen/palm' title='View PALM on GitHub'>"github.com/boozallen/palm"</a></>, 6)}
      {row(27, jp('},'), 4)}
      {row(28, jp('{'), 4, 14)}
      {row(29, <>{jk('name')}{jp(': ')}{jn('resgen')}{jp(',')}</>, 6)}
      {row(30, <>{jk('description')}{jp(': ')}{jv('AI résumé generator — paste a job description, get your content rewritten and tailored for the specific role.')}{jp(',')}</>, 6)}
      {row(31, <>{jk('link')}{jp(': ')}<a className='syn-link' rel='noopener noreferrer' target='_blank' href='https://github.com/AroniasPrenovost/resgen' title='View resgen on GitHub'>"github.com/AroniasPrenovost/resgen"</a></>, 6)}
      {row(32, jp('}'), 4)}
      {row(33, jp('],'), 2)}
      {row(34, <>{jk('meta')}{jp(': {')}</>, 2)}
      {row(35, <>{jk('location')}{jp(': ')}{jv('Seattle, Washington')}{jp(',')}</>, 4)}
      {row(36, <>{jk('email')}{jp(': ')}<a className='syn-link' href='mailto:aronprenovostmktg@gmail.com' title='Email Aron'>"aronprenovostmktg@gmail.com"</a>{jp(',')}</>, 4)}
      {row(37, <>{jk('resume')}{jp(': ')}<a className='syn-link' href='Aron-Prenovost-Resume.pdf' target='_blank' title="Aron's Resume">"resume.pdf"</a>{jp(',')}</>, 4)}
      {row(38, <>{jk('linkedin')}{jp(': ')}<a className='syn-link' rel='noopener noreferrer' target='_blank' href='https://www.linkedin.com/in/aronprenovost' title="Aron's LinkedIn">"linkedin.com/in/aronprenovost"</a>{jp(',')}</>, 4)}
      {row(39, <>{jk('github')}{jp(': ')}<a className='syn-link' rel='noopener noreferrer' target='_blank' href='https://github.com/AroniasPrenovost' title="Aron's GitHub">"github.com/AroniasPrenovost"</a></>, 4)}
      {row(40, jp('}'), 2)}
      {row(41, jp('}'))}
    </div>
  );
};

export default Terminal;
