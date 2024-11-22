// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export default async function handler(req, res) {
//     if (req.method === 'POST') {
//         const { name, cpf, email } = req.body;

//         try {
//             if (!name || !cpf || !email) {
//                 return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
//             }

//             const user = await prisma.user.create({
//                 data: { name, cpf, email },
//             });

//             res.status(201).json({ message: 'Usuário cadastrado com sucesso', user });
//         } catch (error) {
//             res.status(500).json({ message: 'Erro ao cadastrar usuário', error: error.message });
//         }
//     } else if (req.method === 'GET') {
//         try {
//             const users = await prisma.user.findMany();
//             res.status(200).json(users);
//         } catch (error) {
//             res.status(500).json({ message: 'Erro ao buscar usuários', error: error.message });
//         }
//     } else {
//         res.status(405).json({ message: 'Método não permitido' });
//     }
// }
