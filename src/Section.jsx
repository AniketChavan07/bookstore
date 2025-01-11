import React from 'react';

function Section() {
  return (
    <div className="container">
      {["Sports", "Programming", "Science", "English", "Maths"].map((title, index) => (
        <div className="card" style={{ width: '18rem' }} key={index}>
          <img src="/card.png" className="card-img-top" alt={`${title} Thumbnail`} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {getCardDescription(title)}
            </p>
            <a href="#" className="btn btn-primary button">Visit</a>
          </div>
        </div>
      ))}
    </div>
  );
}

function getCardDescription(title) {
  const descriptions = {
    Sports: "Success in sports is about physical and mental resilience.",
    Programming: "Programming is about problem-solving and creative thinking.",
    Science: "Science unlocks the mysteries of the universe jhfklshfg.",
    English: "Language is the dress of thought, opening doors to communication.",
    Maths: "Mathematics is the music of reason and problem-solving."
  };
  return descriptions[title] || "Learn something new!";
}

export default Section;
