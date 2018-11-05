import axios from 'axios'

export const TEST_ACTION = 'TEST_ACTION'

export function testActionCreator(){
  return {
    type: TEST_ACTION
  }
}

export function testAsyncThunk(){
  return function(dispatch){
    // dispatch(setIsFetching(true))

    return axios.get(`https://url`)
      .then((response) => {
        dispatch(testActionCreator())
      })
      .catch((error) => {
        console.log("Error, fetching Itunes API failed error: " + error)
        //dispatch(setIsFetching(false))
      })
  }
}
