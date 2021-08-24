import './App.css';
import VideoPlayer from './components/VideoPlayer';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <header className="App-header">Amaechi and Tabor's YouTube Clone
        </header>
        <div className='row'>
          <VideoPlayer />
        </div>
      </div>
    </div>
  );
}

export default App;
