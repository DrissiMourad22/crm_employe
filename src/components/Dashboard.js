// components/Dashboard.js
import { FaUser, FaTasks, FaChartBar, FaBell } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="card">
      <h2>Dashboard</h2>
      <div className="dashboard-summary">
        <div>
          <FaUser size={30} />
          <h3>Total Employés</h3>
          <p>120</p>
        </div>
        <div>
          <FaTasks size={30} />
          <h3>Tâches et Projets</h3>
          <p>5 projets en cours</p>
        </div>
        <div>
          <FaChartBar size={30} />
          <h3>Performance</h3>
          <p>Graphiques et statistiques</p>
        </div>
        <div>
          <FaBell size={30} />
          <h3>Alertes</h3>
          <p>Rappels et notifications</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
