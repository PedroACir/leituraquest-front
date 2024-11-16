import { NextApiRequest, NextApiResponse } from 'next';
import connection from '../../app/database';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const [rows] = await connection.query('SELECT 1');
    res.status(200).json({ message: 'Conectado ao banco de dados com sucesso!' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao conectar ao banco de dados', error });
  }
}
