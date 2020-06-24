package com.example.employee.restservice;

import com.example.employee.bean.Employee;

import com.example.employee.repository.EmployeeRepository;
import com.sun.el.stream.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.ArrayList;
import java.util.List;



/**
 * @author User
 * class EmployeeService is a service class for business logic
 *
 */
@Service
public class EmployeeService {

	@Autowired
	EmployeeRepository repositoty;

	public void save(final Employee employee) {
		repositoty.save(employee);

	}

	public List<Employee> getAllEmployees() {
		final List<Employee> employees = new ArrayList<>();
		repositoty.findAll().forEach(employee -> employees.add(employee));
		return employees;
	}

	/*
	 * public List<Employee> getEmployeeById(){ final List<Employee> employee = new
	 * ArrayList<>(); repositoty.findById().get() return employee; }
	 */

	/*
	 * public Employee getEmployee(Long employeeId) { Optional optEmp =
	 * repositoty.findById(employeeId); return optEmp; }
	 */

	public java.util.Optional<Employee> getEmployee(Long employeeId) {
		// Optional<Employee> optEmp = employeeRepository.findById(employeeId);
		java.util.Optional<Employee> optEmp = repositoty.findById(employeeId);
		return optEmp;
	}

	public void saveEmployee(Employee employee) {
		repositoty.save(employee);
	}

	public void deleteEmployee(Long employeeId) {
		repositoty.deleteById(employeeId);
	}

	public void updateEmployee(Employee employee) {
		repositoty.save(employee);
	}

}
