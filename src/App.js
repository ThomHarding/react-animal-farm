import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';
import Main from './Main/Main.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header name='Zodiac Time'/>
        <Footer email='realemail@veryreal.net'/>
        <Main/>
      </header>
    </div>
  );
}

export default App;
