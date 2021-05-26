import React from 'react';
const Headline = (props:any) => {
  const { headline } = props; 
  return (
    <div className='flexrow center' id='projects'>
    <div className='col col-12'>
      <div className='col-content'>	
        <h2 className='underline-fixed'>{ headline }</h2>			 				 
      </div>
    </div>
  </div>
  );
};
export default Headline;