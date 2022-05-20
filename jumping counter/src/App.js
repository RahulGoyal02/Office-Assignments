import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter'
import {Provider} from "react-redux"
import {store} from "./store/reduxStore"

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Counter/>
    </div>
    </Provider>
  );
}

export default App;
