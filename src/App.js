import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';
import Main from './Main/Main.js';
import { animals } from './data.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header greeting='You are being greeted. Please do not resist.'/>
        <Footer email='realemail@veryreal.net'/>
        <Main animals={animals}/>
      </header>
    </div>
  );
}

export default App;
