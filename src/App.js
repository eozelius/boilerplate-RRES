import React, { Component } from 'react'
import './styles/app.sass'
import configureStore from './redux/configureStore'
import { Provider } from 'react-redux'
import TestConnectedComponent from './containers/TestConnectedComponent'

class App extends Component {
  render() {
    const store = configureStore()
    return (
      <Provider store={store}>
        <div className="App">
          <TestConnectedComponent />
        </div>
      </Provider>
    );
  }
}

export default App;
