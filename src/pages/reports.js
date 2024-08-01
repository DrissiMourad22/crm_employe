// pages/reports.js
import { FaDownload, FaPrint } from 'react-icons/fa';

const Reports = () => {
  return (
    <div className="container">
      <header className="header">
        <img src="/icons/logo.png" alt="Logo" style={{ height: '40px' }} />
        <nav>
          <a href="/">Accueil</a>
          <a href="/employees">Employés</a>
          <a href="/projects">Projets</a>
          <a href="/reports">Rapports</a>
          <a href="/settings">Paramètres</a>
        </nav>
        <div>
          <span>[Notifications]</span>
          <span>[Profil]</span>
        </div>
      </header>
      <div className="sidebar">
        <a href="/reports">Voir Rapports</a>
      </div>
      <main className="main">
        <div className="card">
          <h2>Rapports</h2>
          <div>
            <button><FaDownload /> Télécharger</button>
            <button><FaPrint /> Imprimer</button>
          </div>
          <table>
            <thead>
              <tr>
                <th>Type de Rapport</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Performance Employé</td>
                <td>01/08/2024</td>
                <td>
                  <button><FaDownload /></button>
                  <button><FaPrint /></button>
                </td>
              </tr>
              {/* Ajoutez d'autres lignes d'exemple ici */}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Reports;
