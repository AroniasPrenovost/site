import React, { useState, useEffect } from 'react';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Lines visible in default state: stack/interests/meta collapsed, projects expanded
const INITIAL_LINES = 19;
const LINE_DELAY_MS = 35;

type Key = 'stack' | 'interests' | 'projects' | 'meta';
type Collapsed = Record<Key, boolean>;

const Terminal = () => {
  const reduced = prefersReducedMotion();
  const [collapsed, setCollapsed] = useState<Collapsed>({
    stack: true, interests: true, projects: false, meta: true,
  });
  const [visibleLines, setVisibleLines] = useState(reduced ? INITIAL_LINES : 0);
  const animDone = visibleLines >= INITIAL_LINES;

  useEffect(() => {
    if (animDone) return;
    const t = setTimeout(() => setVisibleLines(v => v + 1), LINE_DELAY_MS);
    return () => clearTimeout(t);
  }, [visibleLines, animDone]);

  const toggle = (key: Key) => {
    if (!animDone) return;
    setCollapsed(c => ({ ...c, [key]: !c[key] }));
  };

  // Line counter — reset each render; rows not yet "typed" return null
  let n = 0;
  const row = (content: React.ReactNode, indent = 0, mt = 0) => {
    n++;
    const idx = n;
    if (!animDone && idx > visibleLines) return null;
    const style: React.CSSProperties = {};
    if (indent) style.paddingLeft = `${indent}ch`;
    if (mt) style.marginTop = `${mt}px`;
    return (
      <div key={idx} className='json-line' style={style}>
        {content}
      </div>
    );
  };

  const tri = (key: Key) => (
    <button
      className={`tri-btn${collapsed[key] ? '' : ' tri-btn--open'}`}
      onClick={() => toggle(key)}
      aria-expanded={!collapsed[key]}
      aria-label={`${collapsed[key] ? 'Expand' : 'Collapse'} ${key}`}
      tabIndex={animDone ? 0 : -1}
    >
      ▶
    </button>
  );

  const jk = (v: string) => <span className='syn-key'>"{v}"</span>;
  const jv = (v: string) => <span className='syn-str'>"{v}"</span>;
  const jn = (v: string) => <span className='syn-name'>"{v}"</span>;
  const jp = (v: string) => <span className='syn-punct'>{v}</span>;
  const ct = (c: number) => <span className='syn-count'> … {c} </span>;

  return (
    <div className='json-block'>
      {row(jp('{'))}
      {row(<>{jk('name')}{jp(': ')}{jv('Aron Prenovost')}{jp(',')}</>, 2)}
      {row(<>{jk('title')}{jp(': ')}<span className='syn-title'>"Technical Lead, PALM @ Booz Allen Hamilton"</span>{jp(',')}</>, 2)}

      {/* STACK */}
      {collapsed.stack
        ? row(<>{tri('stack')}{jk('stack')}{jp(': [')}{ct(8)}{jp('],')}</>, 2)
        : <>
            {row(<>{tri('stack')}{jk('stack')}{jp(': [')}</>, 2)}
            {row(<>{jv('TypeScript')}{jp(',')}</>, 4)}
            {row(<>{jv('React / Next.js')}{jp(',')}</>, 4)}
            {row(<>{jv('Node / tRPC')}{jp(',')}</>, 4)}
            {row(<>{jv('PostgreSQL / pgvector')}{jp(',')}</>, 4)}
            {row(<>{jv('RAG / GraphRAG')}{jp(',')}</>, 4)}
            {row(<>{jv('AI agents')}{jp(',')}</>, 4)}
            {row(<>{jv('AWS')}{jp(',')}</>, 4)}
            {row(jv('Kubernetes'), 4)}
            {row(jp('],'), 2)}
          </>
      }

      {/* INTERESTS */}
      {collapsed.interests
        ? row(<>{tri('interests')}{jk('interests')}{jp(': [')}{ct(6)}{jp('],')}</>, 2)
        : <>
            {row(<>{tri('interests')}{jk('interests')}{jp(': [')}</>, 2)}
            {row(<>{jv('AI agents')}{jp(',')}</>, 4)}
            {row(<>{jv('retrieval systems')}{jp(',')}</>, 4)}
            {row(<>{jv('developer tools')}{jp(',')}</>, 4)}
            {row(<>{jv('guitar')}{jp(',')}</>, 4)}
            {row(<>{jv('hiking')}{jp(',')}</>, 4)}
            {row(jv('dogs'), 4)}
            {row(jp('],'), 2)}
          </>
      }

      {/* PROJECTS */}
      {collapsed.projects
        ? row(<>{tri('projects')}{jk('projects')}{jp(': [')}{ct(2)}{jp('],')}</>, 2)
        : <>
            {row(<>{tri('projects')}{jk('projects')}{jp(': [')}</>, 2)}
            {row(jp('{'), 4)}
            {row(<>{jk('name')}{jp(': ')}{jn('PALM')}{jp(',')}</>, 6)}
            {row(<>{jk('description')}{jp(': ')}{jv('Enterprise AI platform at Booz Allen Hamilton — RAG pipelines, custom agents, multi-model routing, workflow builder.')}{jp(',')}</>, 6)}
            {row(<>{jk('link')}{jp(': ')}<a className='syn-link' rel='noopener noreferrer' target='_blank' href='https://github.com/boozallen/palm'>"github.com/boozallen/palm"</a></>, 6)}
            {row(jp('},'), 4)}
            {row(jp('{'), 4, 14)}
            {row(<>{jk('name')}{jp(': ')}{jn('resgen')}{jp(',')}</>, 6)}
            {row(<>{jk('description')}{jp(': ')}{jv('AI résumé generator — paste a job description, get your content rewritten and tailored for the specific role.')}{jp(',')}</>, 6)}
            {row(<>{jk('link')}{jp(': ')}<a className='syn-link' rel='noopener noreferrer' target='_blank' href='https://github.com/AroniasPrenovost/resgen'>"github.com/AroniasPrenovost/resgen"</a></>, 6)}
            {row(jp('}'), 4)}
            {row(jp('],'), 2)}
          </>
      }

      {/* META */}
      {collapsed.meta
        ? row(<>{tri('meta')}{jk('meta')}{jp(': {')}{ct(5)}{jp('}')}</>, 2)
        : <>
            {row(<>{tri('meta')}{jk('meta')}{jp(': {')}</>, 2)}
            {row(<>{jk('location')}{jp(': ')}{jv('Seattle, Washington')}{jp(',')}</>, 4)}
            {row(<>{jk('email')}{jp(': ')}<a className='syn-link' href='mailto:aronprenovostmktg@gmail.com'>"aronprenovostmktg@gmail.com"</a>{jp(',')}</>, 4)}
            {row(<>{jk('resume')}{jp(': ')}<a className='syn-link' href='Aron-Prenovost-Resume.pdf' target='_blank'>"resume.pdf"</a>{jp(',')}</>, 4)}
            {row(<>{jk('linkedin')}{jp(': ')}<a className='syn-link' rel='noopener noreferrer' target='_blank' href='https://www.linkedin.com/in/aronprenovost'>"linkedin.com/in/aronprenovost"</a>{jp(',')}</>, 4)}
            {row(<>{jk('github')}{jp(': ')}<a className='syn-link' rel='noopener noreferrer' target='_blank' href='https://github.com/AroniasPrenovost'>"github.com/AroniasPrenovost"</a></>, 4)}
            {row(jp('}'), 2)}
          </>
      }

      {row(jp('}'))}
    </div>
  );
};

export default Terminal;
