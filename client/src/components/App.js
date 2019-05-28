import React, { Component } from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import { Provider } from 'react-redux';
import store from '../store';
import Header from "./Header";
import Footer from "./Footer";
import LandingPage from "./LandingPage";
import ProjectsPage from "./ProjectsPage";
import ProjectsCategoryPage from "./ProjectCategoryPage";
import AboutPage from "./About";
class App extends Component {
  constructor(props) {
    super(props);
    //this.state 
  }
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Header></Header>
          <Route path="/" exact component={LandingPage}></Route>
          <Route path="/about" component={AboutPage}></Route>
          <Route path="/projects" exact component={ProjectsPage}></Route>
          <Route path="/projects/category/:name" exact component={ProjectsCategoryPage}></Route>
          
        </BrowserRouter>
        <Footer></Footer>
      </div>
      </Provider>
    );
  }
}
export default App;
