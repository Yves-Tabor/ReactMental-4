// We have two lists of names, and we want to transfer every name in the first list to the second list
//  and every two seconds we want to send one name, what would you add or change in these codes to make that happen?

import React, { useState, useEffect } from 'react';

function NameTransfer() {
  const initialNames = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
  const [names, setNames] = useState(initialNames);
  const [transferred, setTransferred] = useState([]);

  useEffect(()=>{
    names.forEach((name, index) => {
      setTimeout(()=>{
        setTransferred(prev=> [...new Set([...prev, name])])
      }, (index + 1) * 1000)
    })
  }, [names])

  return (
    <div>
      <h3>Original Names</h3>
      
      <ul  style={{backgroundColor:"red"}}>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      <h3>Transferred Names</h3>
      <ul  style={{backgroundColor:"green"}}>
        {transferred.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default NameTransfer;