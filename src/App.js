import Dashboard from "./components/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Customers from "./components/Customers";
import UserContextProvider from "./contexts/UserContext";
import Report from "./components/Report";
import CustomerDetail from "./components/CustomerDetail";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <UserContextProvider>
          <Routes>
            <Route exact path='/' element={ <Dashboard/> } />
            <Route exact path='/customers' element={ <Customers /> } />
            <Route exact path='/report' element={ <Report/> } />
            <Route path='/customers/:customer_id' element={ <CustomerDetail /> } />
          </Routes>
        </UserContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
