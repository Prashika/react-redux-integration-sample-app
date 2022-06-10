import logo from '../logo.svg';
import '../styles/App.css';
import { startAction } from "../state/action/start-action";
import { stopAction } from "../state/action/stop-action";
import { connect } from 'react-redux';

const App = (props) => {
  console.log('props.rotating-', props.rotating);
  return (
    <div>
      
      <header className="App-header">
        <img
          src={logo}
          className={
            "App-logo" +
            (props.rotating ? "" : " App-logo-paused")
          }
          alt="logo"
          onClick={
            props.rotating ?
              props.stopAction : props.startAction
          }
        />
        <h3>Click on logo to rotate and also to stop rotating</h3>     
      </header>
    </div>

  );
}
const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  startAction: () => dispatch(startAction),
  stopAction: () => dispatch(stopAction)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
