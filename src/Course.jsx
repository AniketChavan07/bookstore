import React from 'react';
import Header from './Header';
import Section from './Section';
import Footer from './Footer';

function Course() {
  return (
    <div>
      <Header />
      <h1>We're delighted to have you <span className='spa'>Here!:</span>)</h1>
      <p className='coursep'>
        <strong>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam animi aspernatur, reiciendis omnis officiis inventore? Modi suscipit, ipsam explicabo error dignissimos ab? Dolore amet alias accusantium corporis. Consectetur, id ducimus!
        </strong>
      </p>
      <button className='coursebtn'>Back</button>
      <div className='card'>
        <Section />
        <Section />
      </div>
      <Footer />
    </div>
  );
}

export default Course;
