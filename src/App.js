import logo from './logo.svg';
import './styles/App.css';
import { startAction } from "./state/action/start-action";
import { stopAction } from "./state/action/stop-action";
import { connect } from 'react-redux';
import Navigation from './components/navigation';

const App = (props) => {
  console.log('props.rotating-', props.rotating);
  return (
    <div>
      <Navigation/>  
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
