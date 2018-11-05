import React, { Component } from 'react'
import './styles/app.sass'
import configureStore from './redux/configureStore'
import { Provider } from 'react-redux'

class App extends Component {
  render() {
    const store = configureStore()
    return (
      <Provider store={store}>
        <div className="App">
          hello
        </div>
      </Provider>
    );
  }
}

export default App;
