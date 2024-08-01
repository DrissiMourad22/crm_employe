// components/EmployeeDetails.js
const EmployeeDetails = () => {
    return (
      <div className="card">
        <h2>Détails de l'Employé</h2>
        <img src="/icons/logo.png" alt="Photo de Profil" style={{ borderRadius: '50%', width: '100px' }} />
        <p><strong>Nom :</strong> John Doe</p>
        <p><strong>Email :</strong> john.doe@example.com</p>
        <p><strong>Téléphone :</strong> 123-456-7890</p>
        <p><strong>Poste :</strong> Développeur</p>
        <p><strong>Département :</strong> IT</p>
        <p><strong>Historique :</strong> Promotion 2021, Augmentation 2022</p>
        <button>Télécharger Contrat</button>
        <button>Certificats</button>
      </div>
    );
  };
  
  export default EmployeeDetails;
  