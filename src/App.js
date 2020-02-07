import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import List from './layouts/List'
import Launch from './layouts/Launch'

export const LaunchContext = React.createContext();

const App = () => {
  const [launches, setLaunches] = useState([])

  useEffect(() => {
    fetch('https://api.spacexdata.com/v3/launches')
      .then((response) => {
        return response.json();
      })
      // .then(response => console.log(response))
      .then(response => setLaunches(response))
  }, [])

  return (
    <LaunchContext.Provider value={launches}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={List} />
          <Route path="/launches/:id" exact component={Launch} />
        </Switch>
      </BrowserRouter>
    </LaunchContext.Provider>
  );
}

export default App;
