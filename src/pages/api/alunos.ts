import { NextApiRequest, NextApiResponse } from 'next';
import connection from '../../app/database';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const [rows] = await connection.query('SELECT * FROM aluno');
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao recuperar dados', error });
  }
}