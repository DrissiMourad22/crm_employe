 // pages/employees/add.js
import { useState } from 'react';
import { useRouter } from 'next/router';

const AddEmployee = () => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [department, setDepartment] = useState('');
  const [joinDate, setJoinDate] = useState('');
  const [status, setStatus] = useState('Actif');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Préparer les données à envoyer
    const employeeData = { name, position, department, joinDate, status };

    try {
      // Envoi des données au serveur
      const response = await fetch('/api/employees', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(employeeData),
      });

      if (response.ok) {
        const result = await response.json();
        setMessage('Employé ajouté avec succès !');
        // Réinitialiser les champs du formulaire
        setName('');
        setPosition('');
        setDepartment('');
        setJoinDate('');
        setStatus('Actif');
        // Redirection vers la liste des employés
        router.push('/employees');
      } else {
        setMessage('Erreur lors de l\'ajout de l\'employé.');
      }
    } catch (error) {
      console.error('Erreur:', error);
      setMessage('Erreur lors de l\'ajout de l\'employé.');
    }
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
        <a href="/employees">Liste des Employés</a>
        <a href="/add">Ajouter Employé</a>
      </div>
      <main className="main">
        <div className="card">
          <h2>Ajouter un Employé</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Nom:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <label>
              Poste:
              <input
                type="text"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                required
              />
            </label>
            <label>
              Département:
              <input
                type="text"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                required
              />
            </label>
            <label>
              Date d'Entrée:
              <input
                type="date"
                value={joinDate}
                onChange={(e) => setJoinDate(e.target.value)}
                required
              />
            </label>
            <label>
              Statut:
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="Actif">Actif</option>
                <option value="Inactif">Inactif</option>
              </select>
            </label>
            <button type="submit">Ajouter</button>
          </form>
          {message && <p>{message}</p>}
        </div>
      </main>
    </div>
  );
};

export default AddEmployee;
