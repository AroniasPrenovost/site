import React, { useState, useEffect } from 'react';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Lines in default state: projects expanded, stack/interests/meta collapsed
const INITIAL_LINES = 19;
const LINE_DELAY_MS = 35;

type Key = 'stack' | 'interests' | 'projects' | 'meta';
type Collapsed = Record<Key, boolean>;

// Indent levels (ch units, 1.5ch per step)
const L1 = 1.5;  // top-level keys
const L2 = 3;    // array items / object values
const L3 = 4.5;  // nested object keys

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
      {row(<>{jk('name')}{jp(': ')}{jv('Aron Prenovost')}{jp(',')}</>, L1)}
      {row(<>{jk('title')}{jp(': ')}<span className='syn-title'>"Technical Lead, PALM @ Booz Allen Hamilton"</span>{jp(',')}</>, L1, 4)}

      {/* STACK */}
      {collapsed.stack
        ? row(<>{tri('stack')}{jk('stack')}{jp(': [')}{ct(8)}{jp('],')}</>, L1, 12)
        : <>
            {row(<>{tri('stack')}{jk('stack')}{jp(': [')}</>, L1, 12)}
            {row(<>{jv('TypeScript')}{jp(',')}</>, L2)}
            {row(<>{jv('React / Next.js')}{jp(',')}</>, L2)}
            {row(<>{jv('Node / tRPC')}{jp(',')}</>, L2)}
            {row(<>{jv('PostgreSQL / pgvector')}{jp(',')}</>, L2)}
            {row(<>{jv('RAG / GraphRAG')}{jp(',')}</>, L2)}
            {row(<>{jv('AI agents')}{jp(',')}</>, L2)}
            {row(<>{jv('AWS')}{jp(',')}</>, L2)}
            {row(jv('Kubernetes'), L2)}
            {row(jp('],'), L1)}
          </>
      }

      {/* INTERESTS */}
      {collapsed.interests
        ? row(<>{tri('interests')}{jk('interests')}{jp(': [')}{ct(6)}{jp('],')}</>, L1, 12)
        : <>
            {row(<>{tri('interests')}{jk('interests')}{jp(': [')}</>, L1, 12)}
            {row(<>{jv('AI agents')}{jp(',')}</>, L2)}
            {row(<>{jv('retrieval systems')}{jp(',')}</>, L2)}
            {row(<>{jv('developer tools')}{jp(',')}</>, L2)}
            {row(<>{jv('guitar')}{jp(',')}</>, L2)}
            {row(<>{jv('hiking')}{jp(',')}</>, L2)}
            {row(jv('dogs'), L2)}
            {row(jp('],'), L1)}
          </>
      }

      {/* PROJECTS */}
      {collapsed.projects
        ? row(<>{tri('projects')}{jk('projects')}{jp(': [')}{ct(2)}{jp('],')}</>, L1, 12)
        : <>
            {row(<>{tri('projects')}{jk('projects')}{jp(': [')}</>, L1, 12)}
            {row(jp('{'), L2)}
            {row(<>{jk('name')}{jp(': ')}{jn('PALM')}{jp(',')}</>, L3)}
            {row(<>{jk('description')}{jp(': ')}{jv('Enterprise AI platform at Booz Allen Hamilton — RAG pipelines, custom agents, multi-model routing, workflow builder.')}{jp(',')}</>, L3)}
            {row(<>{jk('link')}{jp(': ')}<a className='syn-link' rel='noopener noreferrer' target='_blank' href='https://github.com/boozallen/palm'>"github.com/boozallen/palm"</a></>, L3)}
            {row(jp('},'), L2)}
            {row(jp('{'), L2)}
            {row(<>{jk('name')}{jp(': ')}{jn('ResumAI')}{jp(',')}</>, L3)}
            {row(<>{jk('description')}{jp(': ')}{jv('Shipped AI résumé generator with a dynamic blog. Paste a job description — your résumé gets rewritten and tailored for the specific role.')}{jp(',')}</>, L3)}
            {row(<>{jk('link')}{jp(': ')}<a className='syn-link' rel='noopener noreferrer' target='_blank' href='https://resumai.services'>"resumai.services"</a></>, L3)}
            {row(jp('}'), L2)}
            {row(jp('],'), L1)}
          </>
      }

      {/* META */}
      {collapsed.meta
        ? row(<>{tri('meta')}{jk('meta')}{jp(': {')}{ct(5)}{jp('}')}</>, L1, 12)
        : <>
            {row(<>{tri('meta')}{jk('meta')}{jp(': {')}</>, L1, 12)}
            {row(<>{jk('location')}{jp(': ')}{jv('Seattle, Washington')}{jp(',')}</>, L2)}
            {row(<>{jk('email')}{jp(': ')}<a className='syn-link' href='mailto:aronprenovostmktg@gmail.com'>"aronprenovostmktg@gmail.com"</a>{jp(',')}</>, L2)}
            {row(<>{jk('resume')}{jp(': ')}<a className='syn-link' href='Aron-Prenovost-Resume.pdf' target='_blank'>"resume.pdf"</a>{jp(',')}</>, L2)}
            {row(<>{jk('linkedin')}{jp(': ')}<a className='syn-link' rel='noopener noreferrer' target='_blank' href='https://www.linkedin.com/in/aronprenovost'>"linkedin.com/in/aronprenovost"</a>{jp(',')}</>, L2)}
            {row(<>{jk('github')}{jp(': ')}<a className='syn-link' rel='noopener noreferrer' target='_blank' href='https://github.com/AroniasPrenovost'>"github.com/AroniasPrenovost"</a></>, L2)}
            {row(jp('}'), L1)}
          </>
      }

      {row(jp('}'), 0, 6)}
    </div>
  );
};

export default Terminal;
