import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Header from "../../components/Header";
import DashBoard from "./DashBoard";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

export default class Layout extends React.Component{
    render() {
        return(
            <BrowserRouter className="page">
                <Header/>
                <Nav/>
                <Switch>
                    <Route>
                        <DashBoard/>
                    </Route>
                </Switch>
                <Footer/>
            </BrowserRouter>
        )

    }
}