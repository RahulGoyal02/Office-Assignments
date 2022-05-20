import {takeEvery,put,call} from "redux-saga/effects"


// const fetching = () =>{
//  let data = fetch('https://fakestoreapi.com/products')
//  .then(res=>res.json())
//  console.log("data",data)
//  return data
// }

const fetching = async() =>{
 let data = await fetch('https://fakestoreapi.com/products')
 let res = await data.json()
 return res
}
 

function* SortingHL(){
  const data = yield call(fetching)
  const high = data.map((el) => el).sort((a, b) => b.price - a.price);
 console.log("high",high)
  yield put({type:"HIGH_TO_LOW",payload : high})
}


function* fetchApi(){
  const data = yield call(fetching)
 yield put({type: "FETCH_DATA", payload: data  })
}

export function* helloSaga() {
  yield takeEvery("FETCH_API", fetchApi)
  yield takeEvery("SORTING_HL", SortingHL)
}