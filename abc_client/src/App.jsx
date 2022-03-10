import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import UPCategory from "./pages/updatecategories/UPCategories";
import ADDCategory from "./pages/addcategories/ADDCategories";
import Write from "./pages/write/Write";
import { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);

  return (
    <Router>
      <Topbar />
      <Switch>
        {/*Exact is used to prevent other path always route to homepage*/}
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">{user ? <Homepage /> : <Login />}</Route>
        <Route path="/write">
          <Write />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/articles/:postId">
          <Single />
        </Route>
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
