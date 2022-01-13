import './index.css'
import Nav from './components/navigation/nav'
import Timer from './components/timerPage/timer'
// import Login from './components/login/login'
// import Forget from './components/login/forget'
// import Transition from './components/login/transition'
// import SignUp from './components/login/signUp'
// import NewPassword from './components/login/newPassword'


function App(){
  return (
    <div className="container">
      <Nav title="CUBOHOLIC"/>  
      <Timer /> 
    </div>

  );
}

export default App
