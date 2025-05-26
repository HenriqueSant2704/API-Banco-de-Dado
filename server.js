
import express from 'express';
import pkg from '@prisma/client';
const { PrismaClient } = pkg;

const prisma = new PrismaClient(); 

const app = express()
app.use(express.json()) 


app.post('/Usuarios', async (req, res) => {

    await prisma.User.create({
        
        data: {
            email: req.body.email,
            name :req.body.name,
            age: req.body.age
        }
    });

    res.status(201).json(req.body)
    
});

app.get('/Usuarios', async (req, res) => {
 
   const User = await prisma.User.findMany()

    res.status(203).json(User)
});


app.put('/Usuarios/:id', async (req, res) => {

    await prisma.User.update({
        where: {
            id: req.params.id
        },

        data: {
            email: req.body.email,
            name :req.body.name,
            age: req.body.age
        }
    });

    res.status(201).json(req.body)
    
});

app.delete('/Usuarios/:id', async (req, res) => {

    await prisma.User.delete( {
        where: {
            id: req.params.id
        },
    })

     res.status(201).json({message: "Usuarios deletado com Sucesso!!"})
})


app.listen(3000)


// 1- abaixar code.js
// 2- criar o banco de dados no site mongo.db (instala ele) e dps (cola o caminho dele no .env) nao esqueça colcoar para ele acessar de qualquer ip 
// 3- acesse o site do https://prisma.io/ para conecatr o banco de dados com o vs-code clique em começar, click em mongoDB segue passo a passo, primeiro instale o (npm install prisma --save-dev) dps npx prisma init 
// 4- certo agora no site vai em conect mongoDB copie o codigo e cole, no arquivo prisma 
// 5- no site, va para a outra opção de integração com o banco de dados (Introspecção) ela vc pega o codico q fala sobre modelo de Usuarios, e cole isso no arquivo prisma
// 6- execdute o codigo npx prisma db push
// 7- instale o prisma client, execute o seguinte codigo (npm install @prisma/client)
// 8- agora execute o seguinte codigo () isso vai fazer vc acessar a interface grafica do seu banco de dados