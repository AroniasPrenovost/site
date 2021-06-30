import React from 'react';
const Footer = () => {
  const copyright = `©  ${new Date().getFullYear()} Aron Prenovost`;
  return (
    <footer>
      <div className='flexrow center' id='contact'>
        <div className='col col-12'>
          <div className='col-content'>			
            <a className='underline' href='mailto:aronprenovostmktg@gmail.com' rel='noopener noreferrer' target='_blank' title="Email Aron">Email</a>
            <a className='underline' href='https://github.com/AroniasPrenovost' rel='noopener noreferrer' target='_blank' title="Aron's GitHub">GitHub</a>
            <a className='underline' href='https://www.linkedin.com/in/aronprenovost' rel='noopener noreferrer' target='_blank' title="Aron's LinkedIn">LinkedIn</a>
            <p className='copyright'>{copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;