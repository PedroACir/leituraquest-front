// src/app/api/savePreferences.js

let userPreferences = {}; // Objeto em memória para armazenar as preferências dos usuários temporariamente

export default function handler(req, res) {
  const { userId, genres } = req.body;

  if (req.method === 'POST') {
    // Armazena as preferências do usuário
    userPreferences[userId] = genres;
    return res.status(200).json({ message: "Preferências salvas com sucesso!" });
  } else if (req.method === 'GET') {
    // Retorna as preferências do usuário, se existirem
    const userGenres = userPreferences[userId] || [];
    return res.status(200).json({ genres: userGenres });
  } else {
    return res.status(405).json({ message: "Método não permitido" });
  }
}
