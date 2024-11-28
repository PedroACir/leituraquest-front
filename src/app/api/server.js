import express from 'express'
import cors from 'cors';
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'; // Certifique-se de que o bcrypt está instalado

const prisma = new PrismaClient()
const app = express()

// Configuração do CORS
app.use(cors({ origin: 'http://localhost:3001' }));

app.use(express.json())





// Rota POST para criar um usuário
app.post('/register', async (req, res) => {
    const { name, cpf, email, password } = req.body;

    try {
        if (!name || !cpf || !email || !password) {
            return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
        }

        // Criptografar a senha
        const hashedPassword = await bcrypt.hash(password, 10);

        // Criar usuário no banco
        const user = await prisma.user.create({
            data: {
                name,
                cpf,
                email,
                password: hashedPassword,
            },
        });

        res.status(201).json({ message: 'Usuário cadastrado com sucesso', user });
    } catch (error) {
        console.error('Erro ao cadastrar usuário:', error);
        res.status(500).json({ message: 'Erro ao cadastrar usuário', error: error.message });
    }
});

// Outras rotas
app.get('/usuarios', async (req, res) => {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
});



app.get('/register', async (req, res) => {
    try {
        // Busca todos os usuários no banco de dados
        const users = await prisma.user.findMany();
        
        // Formata os dados, se necessário
        const formattedUsers = users.map(user => ({
            id: user.id,
            name: user.name,
            cpf: user.cpf,
            email: user.email,
            password: user.password,
        }));

        res.status(200).json(formattedUsers);
    } catch (error) {
        console.error('Erro ao buscar usuários:', error);
        res.status(500).json({ message: 'Erro ao buscar usuários', error: error.message });
    }
});

// Rota POST para salvar as preferências do usuário
app.post('/savePreferences', (req, res) => {
    const { userId, genres } = req.body;

    if (!userId || !genres) {
        return res.status(400).json({ message: 'Campos obrigatórios não informados' });
    }

    try {
        // Exemplo simples de armazenamento em memória (substitua por banco, se necessário)
        if (!global.userPreferences) {
            global.userPreferences = {};
        }

        global.userPreferences[userId] = genres;
        res.status(200).json({ message: 'Preferências salvas com sucesso!' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao salvar preferências', error: error.message });
    }
});

// Rota GET para recuperar as preferências do usuário
app.get('/savePreferences', (req, res) => {
    const { userId } = req.query;

    if (!userId) {
        return res.status(400).json({ message: 'ID do usuário não informado' });
    }

    try {
        const preferences = global.userPreferences?.[userId] || [];
        res.status(200).json({ genres: preferences });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao recuperar preferências', error: error.message });
    }
});




app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    console.log('Requisição de login recebida:', { email, password }); // Log dos dados recebidos

    try {
        if (!email || !password) {
            return res.status(400).json({ message: 'Email e senha são obrigatórios' });
        }

        const user = await prisma.user.findUnique({ where: { email } });
        console.log('Usuário encontrado no banco:', user); // Log do usuário encontrado

        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        console.log('Senha válida:', isPasswordValid); // Log do resultado da comparação de senhas

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Senha incorreta' });
        }

        res.status(200).json({ message: 'Login bem-sucedido', user });
    } catch (error) {
        console.error('Erro ao realizar login:', error);
        res.status(500).json({ message: 'Erro ao realizar login', error: error.message });
    }
});




app.listen(3000, () => {
    console.log('Servidor Express rodando na porta 3000');
});


// app.get('/usuarios', async (req, res) => {
    
//     const users = await prisma.user.findMany()

//     res.status(200).json(users)

// })

// app.put('/usuarios/:id', async (req, res) => {


//     await prisma.user.update({

//         where: {
//             id: req.params.id
//         },
//         data: {
//             name: req.body.name,
//             cpf: req.body.cpf,
//             email: req.body.email,
//         }
//     })

//     res.status(201).json(req.body)

// })


// app.delete('/usuarios/:id', async (req,res) => {
//     await prisma.user.delete({
//         where: {
//             id: req.params.id
//         }
//     })

//     res.status(200).json({ message: "usuário deletado com sucesso! "})
// })

// app.listen(3000)


// /* 
//     usuario: matheus
//     senha: 2QdAuvcCTfIN7ndm

// */