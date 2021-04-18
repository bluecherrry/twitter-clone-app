//antd library
import 'antd/dist/antd.css';
//import router
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Authpage from './Components/Authentication/AuthPage/Authpage';
//import componnets
import Register from './Components/Authentication/Register/Register'
import Login from './Components/Authentication/Login/Login'
import Agreement from './Components/Policy/Agreement';
import MainWall from './Components/MainWall/MainWall';
import { AuthProvider } from './Context/AuthContext';
import InternalServer from './Components/exception/InternalServer';
import NotFound from './Components/exception/NotFound/NotFound.js'
function App() {
  return (
    <AuthProvider>
      
      <Router>
       
        
        <Switch>
           <Route exact path="/" component={Authpage}/>
          <Route path="/register/register" component={Register}/>
          <Route path="/login" component={Login}/>
          <Route path="/policy/agreement" component={Agreement}/>
          <Route path="/mainwall/mainwall" component={MainWall}/>
          <Route path="/500" component={InternalServer}/>
          <Route component={NotFound}/>
          
         

        </Switch>
      </Router>


    </AuthProvider>
  );
}

export default App;
