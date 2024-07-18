import React, { useEffect, useState } from 'react';

function Services() {
  const [count,setCount]=useState(0);
  useEffect(()=>{
    document.title=`you clicked ${count} times`;
  },[count]);
  return (
    <div>
      <h1>our services</h1>
      < button type='button' onClick={()=>setCount((prevCount)=>prevCount+1)} > you clicked {count} times </button>
    </div>
  );
}

export default Services;
