import { Route, Switch } from "react-router-dom";

import AllMeetups from "../pages/AllMeetups";
import NewMeetup from "../pages/NewMeetup";
import Favorites from "../pages/Favorites";

import Layout from "../components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path={"/"} exact component={AllMeetups} />
        <Route path={"/new-meetup"} component={NewMeetup} />
        <Route path={"/favorites"} component={Favorites} />
      </Switch>
    </Layout>
  );
}

export default App;
