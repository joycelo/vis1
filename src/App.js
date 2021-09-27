import './App.css';
import {ReactP5Wrapper} from 'react-p5-wrapper'
import sketch from './sketch'
// import Typing from './type'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <>
        <ReactP5Wrapper sketch={sketch}/>
        {/* <Typing /> */}
        </>
      </header>
    </div>
  );
}

export default App;
