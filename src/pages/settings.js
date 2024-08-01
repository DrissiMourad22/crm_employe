// pages/settings.js
import { FaCog, FaUsers, FaBell } from 'react-icons/fa';

const Settings = () => {
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
          <h2>Paramètres</h2>
          <div>
            <h3><FaCog /> Paramètres Généraux</h3>
            <p>Configuration des départements et rôles.</p>
          </div>
          <div>
            <h3><FaUsers /> Gestion des Utilisateurs</h3>
            <p>Ajouter ou modifier les utilisateurs.</p>
          </div>
          <div>
            <h3><FaBell /> Paramètres de Notifications</h3>
            <p>Configurer les notifications et alertes.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;
