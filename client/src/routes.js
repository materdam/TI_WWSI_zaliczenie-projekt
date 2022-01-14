import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/layout';
import Home from './components/Home/home';
import AddComic from './containers/add';

const Routes = () =>{
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Home}/> 
                <Route path="/add" exact component={AddComic}/>                     
            </Switch>
        </Layout>
    )
}

export default Routes;