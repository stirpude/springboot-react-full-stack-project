package com.example.employee.restservice;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.context.config.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.employee.bean.Employee;
import com.example.employee.repository.EmployeeRepository;

/**
 * @author Shruti class EmployeeController for managing the request and response
 *
 */

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
@RestController
public class EmployeeController {

	// private final Logger log = LoggerFactory.getLogger(this.getClass());

	@Autowired
	EmployeeService service;

	@Autowired
	EmployeeRepository employeeRepository;

	/**
	 * method getAll retrieves all employees details from the database 
	 * @return list of employees
	 */

	@GetMapping(value = "/employees", produces = "application/vnd.jcg.api.v1+json")
	public List<Employee> getAll() {
		// log.info("Getting employee details from the database.");
		return service.getAllEmployees();
	}

	/*
	 * @GetMapping("/employees/{id}") public ResponseEntity< Employee >
	 * getEmployeeById(@PathVariable(value = "id") long id) { /* Optional<Employee>
	 * employee = employeeRepository.findById(id); //.orElseThrow(() -> new
	 * ResourceNotFoundException("Employee not found for this id :: " +
	 * employeeId)); return ResponseEntity.ok().body(employee); //new
	 * ResponseEntity<>(employee.get());
	 * 
	 * try { Employee employee = service.getEmployeeById(id); return new
	 * ResponseEntity<>(product, HttpStatus.OK); } catch (NoSuchElementException e)
	 * { return new ResponseEntity<Product>(HttpStatus.NOT_FOUND); }
	 * 
	 * Employee employee = (Employee) service.getEmployeeById(id); return
	 * ResponseEntity.ok().body(employee);
	 * 
	 * 
	 * }
	 */

	/*
	 * @GetMapping("/employees/{id}") public ResponseEntity < Employee >
	 * getEmployeeById(@PathVariable(value = "id") Long employeeId) // throws
	 * ResourceNotFoundException { Employee employee =
	 * employeeRepository.findById(employeeId) //.orElseThrow(() -> new
	 * ResourceNotFoundException("Employee not found for this id :: " +
	 * employeeId)); return ResponseEntity.ok().body(employee); }
	 */

	/**
	 * @param employeeId
	 * @return the employee id
	 */
	@GetMapping("/employees/{id}")
	public Optional<Employee> getEmployee(@PathVariable(value = "id") Long employeeId) {
		// return service.employeeService.getEmployee(employeeId);
		return service.getEmployee(employeeId);
	}

	/**
	 * @param employee
	 *            method saveEmployee saves employee data
	 */

	@PostMapping("/employees/save")
	public void saveEmployee(@RequestBody Employee employee) {
		System.out.println("first name is " + employee.getFirstName());
		System.out.println("id  name is " + employee.getId());

		service.saveEmployee(employee);
		System.out.println("Employee Saved Successfully");
	}

	/**
	 * @param employeeId
	 *            method deleteEmployee deletes employee data
	 */

	@DeleteMapping("/employee/{employeeId}")
	public void deleteEmployee(@PathVariable(name = "employeeId") Long employeeId) {
		service.deleteEmployee(employeeId);

		System.out.println("Employee Deleted Successfully");
	}

	/**
	 * @param employeeId
	 *            method updateEmployee updates employee data
	 */

	@PutMapping("/employee/{employeeId}")
	public void updateEmployee(@RequestBody Employee employee, @PathVariable(name = "employeeId") Long employeeId) {
		Optional<Employee> emp = service.getEmployee(employeeId);
		System.out.println("first name is " + employee.getFirstName());
		if (emp != null) {
			// employeeService.updateEmployee(employee);
			service.updateEmployee(employee);
		}
	}

	@RequestMapping("/employee")
	public static String employee() {
		System.out.println("This is Employee");
		return "index";

	}
}
