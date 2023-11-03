


import {
  Routes,
  Route,
} from "react-router-dom";
import Detail from "./component/detail"
import Info from "./component/info"
import New from "./component/new";
import CustomizedTables from "./dashboard/dashboard";


function App() {
  return (
    <div>
   
      <Routes>
          <Route path='/' element={<Info/>}> </Route>
        <Route path='/detail/:id' element={<Detail/>}></Route>
        <Route path='/new' element={<New/>}></Route>
        <Route path='/dashboard' element={<CustomizedTables/>}></Route>
      </Routes>
    
    </div>
  )
}


export default App
