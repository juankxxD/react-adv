import {
  NavLink,
  Route,
  BrowserRouter as Router,
  Switch,
  } from "react-router-dom";
import { LazyPage03, LazyPage1, LazyPage2 } from "../pages";

export const LazyLayout = () => {
  return (
    <div>
      <h1>LazyLayout Page</h1>

      <ul>
        <li>
          <NavLink to="lazy1">Lazy1</NavLink>
        </li>
        <li>
          <NavLink to="lazy2">Lazy2</NavLink>
        </li>
        <li>
          <NavLink to="lazy3">Lazy3</NavLink>
        </li>
      </ul>
      <Router>
        {/* <Switch> */}
          <Route path="/lazyload/lazy1">
            <LazyPage1 />
          </Route>
          <Route path="/lazyload/lazy2">
            <LazyPage2 />
          </Route>
          <Route path="/lazyload/lazy3">
            <LazyPage03 />
          </Route>
          <Route path='*'>
            <div>Not found</div>
          </Route>
          {/* </Switch> */}
      </Router>
    </div>
  );
};

export default LazyLayout;
