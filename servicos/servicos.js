// servicos.js
const colecaoUf = require("../dados/dados");

const buscarUfs = () => {
  return colecaoUf;
}

const buscarUfsPorNome = (nomeUf) => {
  return colecaoUf.filter(uf => uf.nome.toLowerCase().includes(nomeUf.toLowerCase()));
};

const buscarUfPorId = (id) => {
  const idUF = parseInt(id);
  return colecaoUf.find(uf => uf.id === idUF);
};

module.exports = { buscarUfs, buscarUfsPorNome, buscarUfPorId };
