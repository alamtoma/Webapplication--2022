import React, { useState } from 'react';

const Alert = ({ callBack }) => {
  const [Input, setInput] = useState('');
  const Change = (event) => {
    setInput(event.target.value);
    console.log(event.target.value);
  };
  const click = () => {
    alert(Input);
    callBack(Input);
  };
  return (
    <>
      <input
        placeholder="Søk . .."
        type="text"
        value={Input}
        onChange={Change}
      />
      <button onClick={click}>Submit</button>
    </>
  );
};

export default Alert;