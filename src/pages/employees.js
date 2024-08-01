 // pages/employees.js
 import EmployeeList from '@/components/EmploeeList';

const Employees = () => {
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
        <a href="/employees">Liste des Employés</a>
        <a href="/employees/add">Ajouter Employé</a>
      </div>
      <main className="main">
        <EmployeeList />
      </main>
    </div>
  );
};

export default Employees;
