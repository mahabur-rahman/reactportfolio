// bootstrap include
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
// custom sass
import "./index.scss";
// Responsive sass
import "./components/Responsive.scss";
// All components or pages include
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import Error from "./components/Error";

// router include
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
        {/* <Route exact component={Error} /> */}
      </Switch>
      <Footer />
    </>
  );
}

export default App;
