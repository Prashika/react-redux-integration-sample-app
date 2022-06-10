import logo from '../assets/images/logo.svg';
import '../styles/App.css';

function Home() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo-home" alt="logo" />
        <h3>WEL-COME</h3>                
        <h4>Learn react-redux-integration try editing source code</h4>               
        <h5>React Logo Rotation App using react-redux</h5>
      </header>
    </div>
  );
}

export default Home;
