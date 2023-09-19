import logo from './logo.svg';
import FragmentFunction from './component/FragmentFunction';
import './App.css';
import Table from './component/Table/Table';
import ControllerComponent from './component/controlledComponent/ControllerComponent';
import SelectComponent from './component/selectComponent/SelectComponent';
import LoginComponent from './component/formLogin/LoginComponent';
import ToWayComponent from './component/toWayBinding/ToWayComponent';
import UncontrolledComponent from './Uncontrolled Component/UncontrolledComponent';
import SelectUncontroller from './Uncontrolled Component/SelectUncontroller';
import LoginUncontrolled from './Uncontrolled Component/LoginUncontrolled';
function App() {
  return (
    <div className="">
      <FragmentFunction/>
     <Table/>
     <ControllerComponent/>
     <SelectComponent/>
     <LoginComponent/>
     <ToWayComponent/>
     <UncontrolledComponent/>
     <SelectUncontroller/>
     <LoginUncontrolled/>
    </div>
  );
}

export default App;
