import React from 'react';
const Terminal = () => {
  return (
    <div className='about-container'>
      <div className='terminal-header'>
        <div className='header-button red' ></div>
        <div className='header-button yellow'></div>
        <div className='header-button green'></div>
      </div>
      <div className='terminal-window'>
        <div className='statement'>
          <div className='input-statement'>aron.location</div>
          <div className='return-statement'>'Seattle, Washington'</div>
        </div>
        <div className='statement'>
          <div className='input-statement'>aron.interests</div>
          <div className='return-statement'>['software development', 'dogs', 'guitar', 'hiking']</div>
        </div>
        <div className='statement'>
          <div className='input-statement'>aron.skills</div>
          <div className='return-statement'>['HTML', 'CSS/SCSS', 'JavaScript', 'TypeScript', 'Node', 'React', 'PHP', 'SQL', 'Shopify', 'RESTful microservices', 'AWS']</div>
        </div>
        <div className='statement'>
          <div className='input-statement'>aron.meta</div>
          <div className='return-statement'>
            <ul>
              <li>&#123;</li>
              <li>email: '<a title="Email Aron" href='mailto:aronprenovostmktg@gmail.com'>aronprenovostmktg@gmail.com</a>',</li>
              <li>resume: '<a target='_blank' title="Aron's Resume" href='Aron-Prenovost-Resume.pdf'>resume.pdf</a>',</li>
              <li>linkedin: '<a rel='noopener noreferrer' target='_blank' title="Aron's LinkedIn" href='https://www.linkedin.com/in/aronprenovost'>https://www.linkedin.com/in/aronprenovost</a>',</li>
              <li>github: '<a rel='noopener noreferrer' target='_blank' title="Aron's GitHub" href='https://github.com/AroniasPrenovost'>https://github.com/AroniasPrenovost</a>'</li>
              <li>&#125;</li>
            </ul>
          </div>
        </div>
        <div className='statement' >
          <div className='input-statement'>aron.education</div>
          <div className='return-statement'>'Bachelor of Arts, Strategic Communication - Washington State University'</div>
        </div>
        <div className='statement'>
          <div className='input-statement blink-cursor'>&gt;</div>
        </div>
      </div>
    </div>
  );
};
 
export default Terminal;












