// components/EmployeeList.js
import { FaSearch, FaFilter } from 'react-icons/fa';

const EmployeeList = () => {
  return (
    <div className="card">
      <h2>Liste des Employés</h2>
      <div>
        <input type="text" placeholder="Rechercher..." />
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
          <tr>
            <td>John Doe</td>
            <td>Développeur</td>
            <td>IT</td>
            <td>01/01/2020</td>
            <td>Actif</td>
          </tr>
          {/* Ajoutez d'autres lignes d'exemple ici */}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
