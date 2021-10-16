import React from "react";
import App from './App';
import AdminGaleryMap from './components/AdminGaleryMap';

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

const AppRouter: React.FC = () => (
    <Router>
        <Switch>
        <Route path="/" exact component={App} />
        <Route path="/admin" component={AdminGaleryMap} />
        </Switch>
    </Router>
)

export default AppRouter;