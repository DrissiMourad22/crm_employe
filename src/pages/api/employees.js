// pages/api/employees.js
export default function handler(req, res) {
    // Exemple de données d'employés
    const employees = [
      { name: 'John Doe', position: 'Développeur', department: 'IT', joinDate: '01/01/2020', status: 'Actif' },
      { name: 'Jane Smith', position: 'Designer', department: 'Marketing', joinDate: '15/03/2019', status: 'Inactif' },
      { name: 'Drissi Mourad', position: 'Développeur', department: 'IT', joinDate: '01/01/2020', status: 'Actif' },
      { name: 'Drissi Marouane', position: 'Designer', department: 'Marketing', joinDate: '01/01/2020', status: 'Actif' }
      
    ];
  
    if (req.method === 'GET') {
      res.status(200).json(employees);
    } else if (req.method === 'POST') {
      // Ajouter un employé (en production, vous devriez stocker dans une base de données)
      const newEmployee = req.body;
      employees.push(newEmployee);
      res.status(201).json(newEmployee);
    } else {
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  