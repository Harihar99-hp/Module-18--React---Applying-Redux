import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { actions } from './STORE/store';



function App() {

  const counting = useSelector((a)=>{ return a.count});
  const counting2 = useSelector((a)=>console.log(a.count));
  const dispatch = useDispatch();
  const dec = ()=>{dispatch(actions.decrement(1))}

  return (
    <div className="App">
      <h1>saccdc</h1>
      <h1>{counting}</h1>
      <button onClick={dispatch(actions.decrement(1))}>rem1</button>

    </div>
  );
}

export default App;
