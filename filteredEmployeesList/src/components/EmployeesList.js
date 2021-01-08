import React from 'react';

class EmployeesList extends React.Component {
  state = {
      employees: this.props.employees,
      search:''
  }
  onChange = (e) =>{
    e.preventDefault();
    this.setState({search :e.target.value})
  }
  render() {
    const {employees, search} = this.state
    return (
      <React.Fragment>
        <div className="controls">
          <input type="text" className="filter-input" data-testid="filter-input" onChange={this.onChange}/>
        </div>
        <ul className="employees-list">
          {/* filter all employee names that include the search and map it to a li element */}
          {employees.filter(employee => employee.name.toLowerCase().includes(search.toLowerCase())).map(employee => <li key={employee.name} data-testid="employee">{employee.name}</li>)}
        </ul>
      </React.Fragment>
    );
  }
}

export default EmployeesList;
