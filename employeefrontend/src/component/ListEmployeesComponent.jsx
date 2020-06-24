import React, { Component } from 'react';
//
import EmployeeService from '../service/EmployeeService';

const INSTRUCTOR = 'employees'




class ListEmployeesComponent extends Component {

    constructor(props) {
        super(props)
        this.state  = {

            firstnames: [],
            message : null

        }
        //this.refreshCourses = this.refreshCourses.bind(this)
        this.refreshEmployees = this.refreshEmployees.bind(this)
        this.deleteCourseClicked = this.deleteCourseClicked.bind(this)
        this.updateCourseClicked = this.updateCourseClicked.bind(this)
        this.addCourseClicked = this.addCourseClicked.bind(this)
    }
    /*componentDidMount() {
        //this.refreshCourses();
        axios
			.get('http://localhost:8080/employees')
			.then(response => {
				console.log(response)
				this.setState({ firstnames: response.data })
			})
			.catch(error => {
        console.log(error)
        this.setState({errorMsg: 'Error retrieving data'})
			})
    }*/

    componentDidMount() {
        this.refreshEmployees();
    }
   
    refreshEmployees() {
        EmployeeService.retrieveAllEmployees(INSTRUCTOR)//HARDCODED
            .then(
                response => {
                    console.log(response);
                    this.setState({ firstnames : response.data })
                }
            )
    }

    

    deleteCourseClicked(id) {
        EmployeeService.deleteEmployee(id)
        //CourseDataService.deleteCourse(INSTRUCTOR, id)
            .then(
                response => {
                    this.setState({ message: `Delete of course ${id} Successful` })
                    //this.refreshCourses()
                }
            )
    }

    updateCourseClicked(id) {
        console.log('update ' + id)
        console.log('object'+this.props.history)
       this.props.history.push(`/employees/${id}`)
       //this.context.history.push(`/employees/${id}`)

    }

    addCourseClicked() {
        this.props.history.push(`/employees/-1`)
    }




    render() {
        return (
            <div className="container">
                <h3>All employees</h3>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Firstname</th>
                                <th>Lastname</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.firstnames.map(
                                    employee =>
                                        <tr key={employee.id}>
                                            <td>{employee.id}</td>
                                            <td>{employee.firstName}</td>
                                            <td>{employee.lastName}</td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteCourseClicked(employee.id)}>Delete</button></td>
                                            <td><button className="btn btn-success" onClick={() => this.updateCourseClicked(employee.id)}>Update</button></td>
  
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <div className="row">
            <button className="btn btn-success" onClick={this.addCourseClicked}>Add</button>
            </div>
            </div>

            
        )

}

}


export default ListEmployeesComponent