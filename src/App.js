import { Route,Routes } from "react-router-dom";
import Products from "./components/Products";
import Detail from "./components/Detail";
import Update from "./components/Update";
import Add from "./components/Add";


function App() {
  return (<>
  <Routes>
    <Route path="/" element={<Products/>}></Route>
    <Route path="/products/detail/:id" element={<Detail/>}/>
    <Route path="/products/update/:id" element={<Update/>}/>
    <Route path="/products/add" element={<Add/>}/>
    
  </Routes>
  
  </>
  );
}

export default App;
