// index.js
const express = require("express");
const servicos = require('./servicos/servicos');
const colecaoUf = require('./Dados/dados');

const app = express();

app.get('/ufs', (req, res) => {
  const nomeUf = req.query.busca;
  const resultado = nomeUf ? servicos.buscarUfsPorNome(nomeUf) : servicos.buscarUfs();
  if (resultado.length > 0) {
    res.json(resultado);
  } else {
    res.status(404).send({ "erro": "Nenhuma UF encontrada" });
  }
});

app.get('/ufs/:iduf', (req, res) => {
  const uf = servicos.buscarUfPorId(req.params.iduf);

  if (uf) {
    res.json(uf);
  } else if (isNaN(parseInt(req.params.iduf))) {
    res.status(400).send({ "erro": "Requisição inválida" });
  } else {
    res.status(404).send({ "erro": "UF não encontrada" });
  }
});

app.listen(8080, () => {
  console.log('Servidor iniciado na porta 8080');
});






// index.js




/*const express = require("express")
const app = express()


//app.get("/ufs", (req, res) =>{
//    res.json(colecaoUf)
//})

const buscarUfsPorNome = (nomeUf) => {
    return colecaoUf.filter(uf => uf.nome.toLowerCase().includes(nomeUf.toLowerCase()));
  };
  
  app.get('/ufs', (req, res) => {
    const nomeUf = req.query.busca;
    const resultado = nomeUf ? buscarUfsPorNome(nomeUf) : colecaoUf;
    if (resultado.length > 0) {
      res.json(resultado);
    } else {
      res.status(404).send({ "erro": "Nenhuma UF encontrada" });
    }
  });
  



app.get('/ufs/:iduf', (req, res) => {
    const idUF = parseInt(req.params.iduf);
    let mensagemErro = '';
    let uf;
  
    if (!(isNaN(idUF))) {
      uf = colecaoUf.find(u => u.id === idUF);
      if (!uf) {
        mensagemErro = 'UF não encontrada';
      }
    } else {
      mensagemErro = 'Requisição inválida';
    }
  
    if (uf) {
      res.json(uf);
    } else {
      res.status(404).send({ "erro": mensagemErro });
    }
  });

//app.get('/ufs/:iduf', (req, res) => {
   // const idUF = parseInt(req.params.iduf);
    //const uf = colecaoUf.find(u => u.id === idUF);

//res.json(uf);
 }
);//

app.get('/ufs/teste', (req, res) => {
    res.send({ "teste": "teste" })
 }
);


app.listen(8080,()=>{
    console.log("Servidor iniciado an porta 8080")
})*/