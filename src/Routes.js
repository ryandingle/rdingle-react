import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/home/home";
import About from "./pages/about/about";
import Blog from "./pages/blog/blog";
import BlogItem from "./pages/blog/blogItem";
import BlogCategory from "./pages/blog/blogCategory";
import BlogTag from "./pages/blog/blogTag";
import Portfolio from "./pages/portfolio/portfolio";
import PortfolioItem from "./pages/portfolio/portfolioItem";
import Contact from "./pages/contact/contact";
import Services from "./pages/services/services";
import NotFound from './pages/404';
import SiteData from './utils/site-data';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} site={SiteData} />} />
        <Route exact path="/about" render={(props) => <About {...props} site={SiteData} />} />
        <Route exact path="/contact" render={(props) => <Contact {...props} site={SiteData} />} />
        <Route exact path="/portfolio" render={(props) => <Portfolio {...props} site={SiteData} />} />
        <Route exact path="/portfolio/:id" render={(props) => <PortfolioItem {...props} site={SiteData} />} />
        <Route exact path="/blog" render={(props) => <Blog {...props} site={SiteData} />} />
        <Route exact path="/services" render={(props) => <Services {...props} site={SiteData} />} />
        <Route exact path="/blog/:slug" render={(props) => <BlogItem {...props} site={SiteData} />} />
        <Route exact path="/blog/catefory/:id" render={(props) => <BlogCategory {...props} site={SiteData} />} />
        <Route exact path="/blog/tag/:id" render={(props) => <BlogTag {...props} site={SiteData} />} />
        <Route
          render={function () {
            return <NotFound site={SiteData}  />;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
