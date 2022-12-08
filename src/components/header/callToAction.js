import React from 'react';
import Resume from '../../assets/FullstackResume.pdf';

const CallToAction = () => {
  return (
    <div className='callToAction'>
        <a href={Resume} download className='btn'>Download Resume</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk!</a>
      </div>
  )
}

export default CallToAction;