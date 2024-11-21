import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


const app = express()
app.use(express.json())


app.post('/usuarios', async (req, res) => {

    await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            cpf: req.body.cpf

        }
    })

    res.status(201).json(req.body)

})


app.get('/usuarios', async (req, res) => {
    
    const users = await prisma.user.findMany()

    res.status(200).json(users)

})

app.put('/usuarios/:id', async (req, res) => {


    await prisma.user.update({

        where: {
            id: req.params.id
        },
        data: {
            name: req.body.name,
            cpf: req.body.cpf,
            email: req.body.email,
        }
    })

    res.status(201).json(req.body)

})


app.delete('/usuarios/:id', async (req,res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({ message: "usuário deletado com sucesso! "})
})

app.listen(3000)


/* 
    usuario: matheus
    senha: 2QdAuvcCTfIN7ndm

*/