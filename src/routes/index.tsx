import { ReactElement } from "react";
import { Route, Switch } from 'react-router-dom'
import { Dashboard } from "../pages/Dashboard";
import { Repository } from "../pages/Repository";

export function Routes(): ReactElement {
    return (
        <Switch>
            <Route path="/" exact component={Dashboard}/>
            <Route path="*/repositories/:reposisoty+" exact component={Repository} />
        </Switch>
    )
}