import React from 'react';
const Navigation = () => {
  return (
    <nav>
      <div className='flexrow end'>
        <div className='col col-12'>
          <div className='col-content'>
            <div className='nav'>
              <a className='underline' href='#projects' title="Aron's Projects">Projects</a>
              <a className='underline' href='Aron-Prenovost-Resume.pdf' target='_blank' title="Aron's Resume">Resume</a>
              <a className='underline' href='#contact' title='Contact Aron'>Contact</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;