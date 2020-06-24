import React, { Component } from 'react'
import EmployeeService from "../service/EmployeeService"
import { Formik, Form, Field, ErrorMessage } from 'formik';

class UpdateEmployeeComponent extends Component {


    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            firstname: '',
            lastname: ''
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    componentDidMount() {
        console.log(this.state.id)
        console.log('Yippie')
        // eslint-disable-next-line
        if (this.state.id == -1) {
            return
        }
        EmployeeService.retrieveCourse(this.state.id)
            .then(response => this.setState({
                firstname: response.data.firstName,
                lastname: response.data.lastname

            }))
    }

    onSubmit(values) {
        
        console.log('I am in on submit'+this.state.id);
        console.log(values);

        //let username = INSTRUCTOR
        let employee = {
            id: this.state.id,
            firstName: values.firstName,
            lastName:  values.lastName
        }
        console.log("5555"+values.id);
        if (values.id == -1) {
            console.log('I am in new course')
            EmployeeService.createCourse(employee)
                //.then(() => this.props.history.push('/employees'))
        } else 
           {
               console.log('update is being called*************')
            EmployeeService.updateCourse( values.id, employee)
               // .then(() => this.props.history.push('/employees'))
           }
        console.log(values);


    }

    validate(values) {
        let errors = {}
        if (!values.firstName) {
            errors.firstName = 'Enter First Name'
        } else if (values.firstName.length < 5) {
            errors.description = 'Enter atleast 5 Characters in Description'
        }
        return errors
    }

    

    render() {
        let { id,firstName,lastName } = this.state
        return (
            <div>
                <h3>Employee</h3>
                <div className="container">
                    <Formik 
                           initialValues ={{id,firstName,lastName}}
                           onSubmit={this.onSubmit}
                           validateOnChange={false}
                           validateOnBlur={false}
                           validate={this.validate}
                           enableReinitialize={true}
                    > 
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="firstName" component="div"
                                        className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Id</label>
                                        <Field className="form-control" type="text" name="id" disabled />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Firstname</label>
                                        <Field className="form-control" type="text" name="firstName" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Lastname</label>
                                        <Field className="form-control" type="text" name="lastName" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        )
    }
}
export default UpdateEmployeeComponent