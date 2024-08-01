// pages/settings/users.js
import { FaUserPlus, FaUserEdit, FaUserTimes } from 'react-icons/fa';

const Users = () => {
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
        <a href="/settings">Paramètres Généraux</a>
        <a href="/settings/users">Gestion des Utilisateurs</a>
        <a href="/settings/notifications">Paramètres de Notifications</a>
      </div>
      <main className="main">
        <div className="card">
          <h2>Gestion des Utilisateurs</h2>
          <button><FaUserPlus /> Ajouter Utilisateur</button>
          <table>
            <thead>
              <tr>
                <th>Nom</th>
                <th>Email</th>
                <th>Rôle</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>john.doe@example.com</td>
                <td>Administrateur</td>
                <td>
                  <button><FaUserEdit /></button>
                  <button><FaUserTimes /></button>
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

export default Users;
