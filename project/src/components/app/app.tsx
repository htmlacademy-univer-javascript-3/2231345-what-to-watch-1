import MainScreen from '../../pages/main-screen/main-screen';
import {MainScreenProps} from '../../pages/main-screen/main-screen';

function App(props: MainScreenProps): JSX.Element {
  return <MainScreen name={props.name} genre={props.genre} releaseYear={props.releaseYear}/>;
}

export default App;
