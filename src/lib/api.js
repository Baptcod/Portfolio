const API_URL = 'http://localhost/bts-api/api.php';

export const api = {
  // Récupérer toutes les réalisations
  async getRealisations(userId = 'baptiste') {
    const response = await fetch(`${API_URL}?user_id=${userId}`);
    if (!response.ok) throw new Error('Erreur réseau');
    return await response.json();
  },

  // Ajouter une réalisation
  async addRealisation(data) {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Erreur réseau');
    return await response.json();
  },

  // Mettre à jour une réalisation
  async updateRealisation(id, data) {
    const response = await fetch(API_URL, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, ...data })
    });
    if (!response.ok) throw new Error('Erreur réseau');
    return await response.json();
  },

  // Supprimer une réalisation
  async deleteRealisation(id, userId = 'baptiste') {
    const response = await fetch(`${API_URL}?id=${id}&user_id=${userId}`, {
      method: 'DELETE'
    });
    if (!response.ok) throw new Error('Erreur réseau');
    return await response.json();
  }
};