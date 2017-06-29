
import React from 'react';

const ThoughtCard = ({title, body}) => {
  return (
    <div>
      <div className = 'thoughtCard'>
        <h1 className = 'title'>{title}</h1>
        <h2 className = 'body'>{body}</h2>
      </div>
    </div>
  )
}

export default ThoughtCard
