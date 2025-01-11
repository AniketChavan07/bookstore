import React from 'react';
import './App.css';

function Dash() {
  return (
    <div className="container-fluid d-flex">
      <div className="left">
        <h1>Hello Welcomes here to learn something <span className='spa'>new everyday!!</span></h1>
        <p><strong>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, vitae voluptate aliquid tenetur excepturi quibusdam earum alias. Deserunt, quod nostrum magnam facere excepturi in, animi at blanditiis neque, laudantium ad?
        </strong></p>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label"></label>
          <input 
            type="email" 
            className="form-control" 
            id="exampleInputEmail1" 
            aria-describedby="emailHelp"  
            placeholder="Email" 
          />
          <div id="emailHelp" className="form-text"></div>
          <button className="btn btn-danger btn" type="button">Get Started</button>
        </div>
        
        <div className='h32'>
          <h3>Free offered Courses</h3>
      
        </div>
      </div>
      <div className="right">
        <img className="img"src="/books.png" alt="Books" />
      </div>
    </div>
  );
}

export default Dash;
