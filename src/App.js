import React from 'react';

function FirstComponent(props) {
  return props.whatdoyoulove;
}

function App() {
  return(
    <div>
      <h3>
      hi! this is from App.js.
      </h3>
      <h3>
      I like <FirstComponent whatdoyoulove="kimchi" />.
      </h3>
    </div>
  )
}

export default App;