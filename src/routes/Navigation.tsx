import { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";

import logo from "../logo.svg";
import { routes } from "./routes";

export const Navigation = () => {
  return (
    // @ts-ignore
    <Suspense fallback={<span>Loading...</span>}>
      <Router>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {routes.map((route) => (
                <li key={route.to}>
                  <NavLink to={route.to} activeClassName="nav-active" exact>
                    {route.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            {routes.map(({ to, path, Component }) => (
              <Route key={to} path={path}>
                {<Component />}
              </Route>
            ))}
            <Route path={"/*"}>
              <Redirect to={`${routes[0].to}`} />
            </Route>
          </Switch>
        </div>
      </Router>
    </Suspense>
  );
};
