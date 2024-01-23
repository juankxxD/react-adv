import { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Navigate,
  Routes,
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
                  <NavLink
                    to={route.to}
                    className={({ isActive }) => (isActive ? "nav-active" : "")}
                  >
                    {route.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

         
          <Routes>
            {routes.map(({ to, path, Component }) => (
              <Route key={to} path={path} element={<Component />} />
            ))}

            <Route path={"/*"} element={<Navigate to={routes[0].to} replace /> } />

          </Routes>
        </div>
      </Router>
    </Suspense>
  );
};
