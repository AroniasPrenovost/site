import React from 'react';
const Navigation = () => {
  return (
    <nav>
      <div className='flexrow end'>
        <div className='col col-12'>
          <div className='col-content'>
            <div className='nav'>
              <a className='underline' href='#projects' title='Projects'>Projects</a>
              <a className='underline' href='#contact' title='Contact'>Contact</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;