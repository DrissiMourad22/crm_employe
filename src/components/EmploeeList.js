 // components/EmployeeList.js
import { useState, useEffect } from 'react';
import { FaSearch, FaFilter } from 'react-icons/fa';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    // Remplacez l'URL par l'endpoint de votre API
    fetch('/api/employees')
      .then((response) => response.json())
      .then((data) => setEmployees(data));
  }, []);

  useEffect(() => {
    setFilteredEmployees(
      employees.filter((employee) =>
        employee.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, employees]);

  return (
    <div className="card">
      <h2>Liste des Employés</h2>
      <div>
        <input
          type="text"
          placeholder="Rechercher..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button><FaSearch /></button>
        <button><FaFilter /></button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Poste</th>
            <th>Département</th>
            <th>Date d'Entrée</th>
            <th>Statut</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.length > 0 ? (
            filteredEmployees.map((employee, index) => (
              <tr key={index}>
                <td>{employee.name}</td>
                <td>{employee.position}</td>
                <td>{employee.department}</td>
                <td>{employee.joinDate}</td>
                <td>{employee.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">Aucun employé trouvé</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
