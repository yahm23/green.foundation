import React, { Component } from 'react';
import {Switch, Route, Link} from "react-router-dom";

import Articles from "../containers/Articles";
import Article from "../containers/Article";
import Author from "../containers/Author";
import Authors from "../containers/Authors";


export class Blog extends Component {
    render() {
        return (
            
            <div>
              <h1> All Posts </h1>  
                <h3><Link to='/articles'>Articles</Link></h3>
                <h3><Link to='/authors'>Authors</Link></h3>
                <h3><Link to='/article/:id'>Article</Link></h3>
                <h3><Link to='/author/:id'>Author</Link></h3>

              <Switch>
                <Route path="/articles" exact component={Articles}  />
                <Route path="/authors" component={Authors} exact />
                <Route path="/article/:id" component={Article} exact />
                <Route path="/author/:id" component={Author} exact/>
              </Switch>
            </div>

        )
    }
}

export default Blog