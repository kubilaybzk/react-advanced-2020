import React from 'react';









const ErrorExample = () => {
  let title="React mı Flutter mı ???"

  const handleClick =()=>{
    title="Tabikide React"
  }

  return (
   <div>
    <h2>Title değiştirme Uygulaması</h2>
    <br/>
    <h3>{title}</h3>

    <button type='button' className='btn' onClick={handleClick}>
        change title
    </button>

    
   </div>

  );
};

export default ErrorExample;
