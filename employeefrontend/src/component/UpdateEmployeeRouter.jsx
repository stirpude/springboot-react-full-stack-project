import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ListEmployeesComponent from './ListEmployeesComponent';

import UpdateEmployeeComponent from './UpdateEmployeeComponent';






class UpdateEmpoyeeRouter extends Component {
    render() {
        return (
            <Router>
                <>
                    <h1>Employee  Details </h1>
                    <Switch>
                        <Route path="/" exact component={ListEmployeesComponent} />
                        <Route path="/employees" exact component={ListEmployeesComponent} />
                        <Route path="/employees/:id" component={UpdateEmployeeComponent} />
                    </Switch>
                </>
            </Router>
        )
    }
}
export default UpdateEmpoyeeRouter


