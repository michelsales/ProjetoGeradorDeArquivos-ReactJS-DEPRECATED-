import React from "react";
import { Router, Switch, Route } from "react-router";
import { history } from "./pages/History";
import Dashboard from "./pages/Dashboard";
import DocumentoHonario from "./pages/DocumentoHonario";
import notFound from "./components/notFound";
import DocumentoProcuracao from "./pages/DocumentoProcuracao";
import DocumentoDeclaracao from "./pages/DocumentoDeclaracao";

const Routes = () => (
    <Router history={history}>
        <Switch>
            <Route component={Dashboard} exact path="/"/>
            <Route component={DocumentoHonario} exact path="/honorario"/>
            <Route component={DocumentoProcuracao} exact path="/procuracao"/>
            <Route component={DocumentoDeclaracao} exact path="/declaracao"/>
            <Route component={notFound} path="*"/>
        </Switch>
    </Router>
)
export default Routes