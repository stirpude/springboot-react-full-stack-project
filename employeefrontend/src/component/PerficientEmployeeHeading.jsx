import React, { Component } from 'react';
import ListEmployeesComponent from './ListEmployeesComponent';



class PerficientEmployeeHeading extends Component {
    render() {
        return (<>
              <h1>Perficient Employee Skills</h1>
              <ListEmployeesComponent/>
              </>
        )
    }
}
export default PerficientEmployeeHeading