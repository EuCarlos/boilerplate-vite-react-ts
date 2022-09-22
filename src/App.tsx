import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { routes, RouteWithSubRoutes } from "./_config_/routes"

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>

        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </div>
    </Router>
    </div>
  )
}

export default App
