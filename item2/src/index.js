import React from "react";
import {render} from "react-dom";
import {Router,Route,IndexRoute,hashHistory} from "react-router";
import routess from "./routers";

var routes=<Route path="/" component={routess.App}>
    <IndexRoute component={routess.Index} />
    <Route path="/aboutUs" component={routess.AboutUs}>
        <IndexRoute component={routess.Our}/>
        <Route path="/joinUs" component={routess.JoinUs}/>
        <Route path="/Learn" component={routess.Learn}/>
        <Route path="/Business" component={routess.Business}/>
        <Route path="/Server" component={routess.Server}/>
        <Route path="/UserKnow" component={routess.UserKnow}/>
    </Route>
    <Route path="/employmentClass" component={routess.EmploymentClass}/>
    <Route path="/openClass" component={routess.OpenClass}>
        <IndexRoute component={routess.ClassList}/>
        <Route path="/openClass/:classId" component={routess.Classes}>
            <IndexRoute component={routess.Introduce}/>
            {/*<Route path="/openClass/:classId/introduce" component={routess.Introduce}/>*/}
            <Route path="/openClass/:classId/online" component={routess.Online}/>
        </Route>
    </Route>
    <Route path="/teachers" component={routess.Teachers}/>
</Route>

render(
    <Router routes={routes} history={hashHistory} />
    ,
    document.getElementById("app")
);