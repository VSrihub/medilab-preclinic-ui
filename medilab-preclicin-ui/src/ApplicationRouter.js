import {Switch,Route} from 'react-router-dom'
import Home from './component/Home'
import Signup from './component/signup/Signup';
function ApplicationRouter() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/signup" component={Signup}/>
            </Switch>
      </div>
    );
  }
  
  export default ApplicationRouter;
  