import React from 'react';
import ThoughtCard from '../thoughtCard/thoughtCard.js'

export const ThoughtList = ({ thoughtList }) => {
  const thoughtCards = thoughtList.map((thought, index)=>
  <ThoughtCard key={ index }{ ...thought } />)

  return (
    <div>
      <div className = "thoughtList">
        { thoughtCards }
      </div>
      <div className = "thoughtCard"></div>
      <div className = "thoughtCard"></div>
    </div>
  );
}
