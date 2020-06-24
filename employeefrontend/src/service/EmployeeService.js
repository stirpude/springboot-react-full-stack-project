/*import axios from 'axios'
const INSTRUCTOR = 'in28minutes'
const COURSE_API_URL = 'http://localhost:8080'
const INSTRUCTOR_API_URL = `${COURSE_API_URL}/instructors/${INSTRUCTOR}`
class EmployeeService {
    retrieveAllCourses(employee) {
        return axios.get('$/employees');
    }
}
export default new EmployeeService()*/


import axios from 'axios'


const INSTRUCTOR = 'employees'
const INSTRUCTORS = 'employee'
const COURSE_API_URL = 'http://localhost:8080'
//const INSTRUCTOR_API_URL = '${COURSE_API_URL}'
//`${COURSE_API_URL}/instructors/${INSTRUCTOR}`
const INSTRUCTOR_API_URL = `${COURSE_API_URL}/${INSTRUCTOR}`
const INSTRUCTOR_API_URLS = `${COURSE_API_URL}/${INSTRUCTORS}`

class EmployeeService {

    retrieveAllEmployees(name) {
        console.log('Hi whats up'+COURSE_API_URL)
        return axios.get(`${INSTRUCTOR_API_URL}`);
    }

    deleteEmployee( id) {
        //console.log('executed service')
        return axios.delete(`${COURSE_API_URL}/employee/${id}`);
    }

    retrieveCourse( id) {
        return axios.get(`${INSTRUCTOR_API_URL}/${id}`);
    }
    updateCourse( id, employee) {
        console.log('I am in update'+employee)
        return axios.put(`${INSTRUCTOR_API_URLS}/${id}`,employee);
    }
    createCourse(employee) {
        return axios.post(`${INSTRUCTOR_API_URL}/save`, employee);
    }
}
export default new EmployeeService()