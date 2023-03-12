import Listings from './components/Listings';
import Background from './components/Background';
import TopBar from './components/TopBar';

const App = () => {

  return (
    <div className="App">
      <TopBar />
      <Background />
      <Listings />
    </div>
  );
}

export default App;