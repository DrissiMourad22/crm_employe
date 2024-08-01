// pages/projects/[id].js
import { useRouter } from 'next/router';
import { FaEdit, FaTrash } from 'react-icons/fa';

const ProjectDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  // Exemple de données, remplacez par des données réelles de votre API ou base de données
  const project = {
    name: 'Projet X',
    description: 'Description du projet X',
    startDate: '01/01/2023',
    endDate: '12/31/2023',
    status: 'En cours',
    team: ['John Doe', 'Jane Smith']
  };

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
        <a href={`/projects/edit/${id}`}>Modifier Projet</a>
      </div>
      <main className="main">
        <div className="card">
          <h2>Détails du Projet</h2>
          <p><strong>Nom :</strong> {project.name}</p>
          <p><strong>Description :</strong> {project.description}</p>
          <p><strong>Date de Début :</strong> {project.startDate}</p>
          <p><strong>Date de Fin :</strong> {project.endDate}</p>
          <p><strong>Statut :</strong> {project.status}</p>
          <p><strong>Équipe :</strong> {project.team.join(', ')}</p>
          <button><FaEdit /> Modifier</button>
          <button><FaTrash /> Supprimer</button>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetails;
