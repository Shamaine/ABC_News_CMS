import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import UPCategory from "./pages/updatecategories/UPCategories";
import ADDCategory from "./pages/addcategories/ADDCategories";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const isAdmin = false;
  const loggedIn = true;
  return (
    <Router>
      <Topbar />
      <Switch>
        {/*Exact is used to prevent other path always route to homepage*/}
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/posts">
          <Homepage />
        </Route>
        <Route path="/register">{isAdmin ? <Register /> : <Login />}</Route>
        <Route path="/login">{loggedIn ? <Homepage /> : <Login />}</Route>
        <Route path="/post/:id">
          <Single />
        </Route>
        <Route path="/write">{loggedIn ? <Write /> : <Login />}</Route>
        <Route path="/settings">{isAdmin ? <Settings /> : <Login />}</Route>
        <Route path="/upcategories">
          <UPCategory />
        </Route>
        <Route path="/addcategories">
          <ADDCategory />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
