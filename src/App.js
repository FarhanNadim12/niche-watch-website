import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from "./Pages/Home/Home/Home";
import Watch from "./Pages/Home/Homewatches/Watch/Watch";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Watches from "./Pages/Watches/Watches";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import MyOrders from "./Pages/MyOrders/MyOrders";
import Pay from "./Pages/Pay/Pay";
import Review from "./Pages/Review/Review";
import ManageAllOrders from "./Pages/ManageAllOrders/ManageAllOrders";
import MakeAdmin from "./Pages/MakeAdmin/MakeAdmin";
import ManageProducts from "./Pages/MangeProducts/ManageProducts";
import AddProducts from "./Pages/AddProducts/AddProducts";
import AdminRoute from "./Pages/Login/AdminRoute/AdminRoute";
import Notfound from "./Pages/Notfound/Notfound";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute exact path='/watches/:id'>
              <Watch></Watch>
            </PrivateRoute>
            <Route exact path='/watches'>
              <Watches></Watches>
            </Route>
            <Route exact path='/register'>
              <Register></Register>
            </Route>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <PrivateRoute exact path='/myOrders'>
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute exact path='/pay'>
              <Pay></Pay>
            </PrivateRoute>
            <PrivateRoute exact path='/review'>
              <Review></Review>
            </PrivateRoute>
            <AdminRoute exact path='/manageOrders'>
              <ManageAllOrders></ManageAllOrders>
            </AdminRoute>
            <PrivateRoute exact path='/addProducts'>
              <AddProducts></AddProducts>
            </PrivateRoute>
            <AdminRoute exact path='/makeAdmin'>
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
            <AdminRoute exact path='/manageProducts'>
              <ManageProducts></ManageProducts>
            </AdminRoute>
            <Route exact path='*'>
              <Notfound></Notfound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
