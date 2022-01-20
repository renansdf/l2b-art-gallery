import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import App from './App';
import AdminGaleryMap from './pages/AdminGaleryMap';
import LayoutText from './pages/LayoutText';

const AppRouter: React.FC = () => (
    <Router>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/admin" component={AdminGaleryMap} />
          <Route path="/layout" component={LayoutText} />
        </Switch>
    </Router>
)

export default AppRouter;