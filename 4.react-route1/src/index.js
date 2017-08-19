import React from "react";
import { render } from "react-dom";
import {Router,Route,IndexRoute,hashHistory} from "react-router";
/*import App from "./modules/App.jsx";
import AboutUs.jsx from "./modules/AboutUs.jsx.jsx";
import Repos from "./modules/Repos.jsx";*/

import routess from "./routes";


var routes=<Route path="/" component={routess.App}>
                <IndexRoute component={routess.Homess}/>
                <Route path="/about" component={routess.About} />
                <Route path="/repos" component={routess.Repos}>
                    <Route path="/repos/:name/:classId" component={routess.Repo} />
                </Route>

           </Route>

render(
    <Router routes={routes} history={hashHistory} />
    ,
    document.getElementById("app")
)