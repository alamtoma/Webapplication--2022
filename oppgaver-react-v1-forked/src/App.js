import React, { useState } from 'react';
import './styles.scss';
import Alert from './components/Alert';
import MyComponent from './components/MyComponent';
import Wrapper from './components/Wrapper';
import Food from './components/Food';
const App = () => {
  const food=["Pizza", "Humburger", "COKE"];
  const [inputFromChild, setInputFromChild] = useState('');
  const updateInput = (childData) => {
    setInputFromChild(childData);
  };


return (
  <>
  <Wrapper>
    <MyComponent title={"its Work"} />
    <Food foodArray = {food} />
    <Alert
          callBack={(liftState) => {
            updateInput(liftState);
          }}
        />
        <p>{inputFromChild}</p>
      </Wrapper>
    </>

);
        };
export default App;
