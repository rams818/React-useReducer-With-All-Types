import './App.css';
import MessageClassBased from './components/MessageClassBased';
import MessageFunctionalHook from './components/MessageFunctionalHook';
import MessageFunctionUseReducer from './components/MessageFunctionUseReducer';
import MessageFunctionUseReducerString from './components/MessageFunctionUseReducerString';
import MessageReduxUseReducer from './components/MessageReduxUseReducer';

function App() {
  return (
    <div className="App">
      <nav className="navbar nnabar-info bg-success text-white">
        <div className="container justify-content-center">
          <h3 className="  text-white">React useReducer with all Examples</h3>
        </div>
      </nav>

      <MessageClassBased />

      <MessageFunctionalHook />

      <MessageFunctionUseReducer />

      <MessageFunctionUseReducerString />

      <MessageReduxUseReducer />
    </div>
  );
}

export default App;
