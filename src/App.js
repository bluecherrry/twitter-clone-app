//antd library
import 'antd/dist/antd.css';
//import router
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Authpage from './Components/Authentication/AuthPage/Authpage';
//import componnets
import SignUp from './Components/Authentication/SignUp/SignUp'
import Login from './Components/Authentication/Login/Login'
import Agreement from './Components/Policy/Agreement';
import MainWall from './Components/MainWall/MainWall';
function App() {
  return (
    <>
      
      <Router>
        <Route exact path="/" component={Authpage}/>
        
        <Switch>
          <Route path="/signup" component={SignUp}/>
          <Route path="/login" component={Login}/>
          <Route path="/policy/agreement" component={Agreement}/>
          <Route path="/mainwall/mainwall" component={MainWall}/>
        </Switch>
      </Router>


    </>
  );
}

export default App;
