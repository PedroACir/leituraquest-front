import { NextApiRequest, NextApiResponse } from 'next';
import connection from '../../app/database';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, cpf, email, password } = req.body;

    // Validação simples
    if (!name || !cpf || !email || !password) {
      res.status(400).json({ message: 'Por favor, preencha todos os campos obrigatórios.' });
      return;
    }

    try {
      const query = 'INSERT INTO aluno (nome, cpf_aluno, email, senha, avatar_aluno_idavatar_aluno) VALUES (?, ?, ?, ?, ?)';
      const values = [name, cpf, email, password, 1]; // Assumindo que o avatar padrão é "1".
      const [result]: any = await connection.query(query, values);

      res.status(200).json({
        message: 'Usuário registrado com sucesso!',
        userId: result.insertId,
      });
    } catch (error: any) {
      if (error.code === 'ER_DUP_ENTRY') {
        res.status(409).json({ message: 'CPF já cadastrado.' });
      } else {
        console.error('Erro ao registrar usuário:', error);
        res.status(500).json({ message: 'Erro ao registrar usuário.', error });
      }
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Método ${req.method} não permitido.`);
  }
}
