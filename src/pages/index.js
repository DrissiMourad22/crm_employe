 // pages/index.js
import Dashboard from '@/components/Dashboard';
import EmployeeDetails from '@/components/EmployeeDetails';
import EmployeeList from '@/components/EmploeeList';

export default function Home() {
  return (
    <div className="container">
      <header className="header">
        <img src="/icons/logo.png" alt="Logo" style={{ height: '40px' }} />
        <nav>
          <a href="#">Accueil</a>
          <a href="#">Employés</a>
          <a href="#">Projets</a>
          <a href="#">Rapports</a>
          <a href="#">Paramètres</a>
        </nav>
        <div>
          <span>[Notifications]</span>
          <span>[Profil]</span>
        </div>
      </header>
      <div className="sidebar">
        <a href="#">Ajouter Employé</a>
        <a href="#">Voir Départements</a>
        <a href="#">Voir Tâches</a>
        <a href="#">Voir Projets</a>
      </div>
      <main className="main">
        <Dashboard />
        <EmployeeList />
        <EmployeeDetails />
      </main>
    </div>
  );
}
