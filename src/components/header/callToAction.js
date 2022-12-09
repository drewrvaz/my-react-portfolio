import React from 'react';
import Resume from '../../assets/FullstackResume.pdf';

const CallToAction = () => {
  return (
    <div className='callToAction'>
        <a href={Resume} download className='btn'>Download Resume</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk!</a>
        <a href='#about' className='btn'>About Me</a>
        <a href='#experience' className='btn btn-primary'>Experience</a>
        <a href='#portfolio' className='btn'>Portfolio</a>
      </div>
  )
}

export default CallToAction;