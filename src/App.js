import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

function App(props) {
  let data = {
    monthly :"₹40,000",
    anual:"₹52,00,000",
    task:"100%",
    pending:"20"

}
  return <>
  <div id="wrapper">
  <Sidebar/>
  <Dashboard data={data}/>
  </div>
  </>
}

export default App
