// pages/projects.js
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

const Projects = () => {
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
        <a href="/projects">Voir Projets</a>
        <a href="/addproject">Ajouter Projet</a>
      </div>
      <main className="main">
        <div className="card">
          <h2>Projets</h2>
          <button><FaPlus /> Ajouter un Projet</button>
          <table>
            <thead>
              <tr>
                <th>Nom du Projet</th>
                <th>Description</th>
                <th>Équipe</th>
                <th>Statut</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Projet X</td>
                <td>Description du projet X</td>
                <td>Équipe A</td>
                <td>En cours</td>
                <td>
                  <button><FaEdit /></button>
                  <button><FaTrash /></button>
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

export default Projects;
