import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import { Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import Footer from "./components/Footer";
import About from "./components/pages/About";
import ScrollToTop from "./components/ScrollToTop";
import Features from "./components/pages/Features";
import Pricing from "./components/pages/Pricing";
import Video from "./components/pages/Video";
import Business from "./components/pages/Business";

function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" exact component={About} />
        <Route path="/features" exact component={Features} />
        <Route path="/pricing" exact component={Pricing} />
        <Route path="/video" exact component={Video} />
        <Route path="/business" exact component={Business} />
        {/* <Route component={Construction} /> */}
      </Switch>
      <Footer />
    </>
  );
}

export default App;
