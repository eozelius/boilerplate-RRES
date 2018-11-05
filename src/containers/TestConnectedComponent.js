import React, { Component } from 'react'
import { connect } from 'react-redux'
import { testAsyncThunk } from '../redux/actions'

class TestConnectedComponent extends Component {
  render(){
    return (
      <div>
        <p>this is a connected Component</p>
        { JSON.stringify(this.props) }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    testProp: state.test,
    asdf: state.asdf
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTest: () => dispatch(testAsyncThunk())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestConnectedComponent)
