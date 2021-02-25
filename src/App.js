import './App.css';
import Home from "./Home"
import Header from "./Header"
import Footer from "./Footer"
import { Route } from "react-router-dom"
import SearchPage from "./SearchPage"

function App() {
  return (
    <div className="app">

      {/* Home */}
    <Router>
      <Header />
      <Switch>

        <Route path="/">
          <Home />
        </Route>

        <Route path="/search">
         <SearchPage />
        </Route>

      </Switch>
      <Footer />
    </Router>
          {/* Header */}

          {/* Banner */}

          {/* Cards */}

          {/* Footer */}

       {/* Search Page */}
          {/* .... */}

    </div>
  );
}

export default App;
