import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from './pages/saved_articles' ;
import Search from './pages/search' ;
import Article from './components/Article' ;
import Form from './components/Form' ;
import API from './utils/API' ;

const App = () =>
  <Router>
    <div>
    <Search/>
      {/*<Switch>
        <Route exact path="/" component={Articles} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/saved" component={Saved} />
      </Switch>*/}
     {/* <Article
          title={`Test`}
          date={`11/20/17`}
          linkURL={`https://www.google.com`}
        />
        <Article
          title={`Test2`}
          date={`11/21/17`}
          linkURL={`https://www.reddit.com`}
        /> */}
    </div>
  </Router>;

export default App;
