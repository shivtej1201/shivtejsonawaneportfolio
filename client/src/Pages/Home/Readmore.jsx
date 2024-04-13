import React, { useState } from 'react';

const ReadMore = ({ children, maxLength }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const text = children.join(' '); 

  if (text.length <= maxLength) {
    return <div>{children}</div>; 
  }

  return (
    <div>
      {isTruncated ? `${text.slice(0, maxLength)}...` : text}
      <button className='readMorebtn' onClick={() => setIsTruncated(!isTruncated)}>
        {isTruncated ? 'Read more' : 'Show less'}
      </button>
    </div>
  );
};

export default ReadMore;
