// arquivo que estará no servidor, criado com nodeJS

const express = require('express'); // usa o express(do node_modules) para começar o servidor
const server = express(); // objeto de servidor para poder usar várias coisas

// configurar pasta publica
server.use(express.static('public'));

// utilizando template engine
const nunjucks = require('nunjucks'); // pede uma dependencia já instalada.
// configura o nunjucks com a pasta que tem os HTMLs. 
// Cache é quando ele guarda algumas coisas na memória, enquanto está desenvolvendo podemos deixar noCache:true.
nunjucks.configure('src/views', {
  express: server,
  noCache: true
})

// configurar caminhos da minha aplicação

// pagina inicial
// req: Requisição
// res: Resposta
server.get('/', (req, res) => {
  return res.render("index.html") // função que envia para o servidor o nome do diretorio mais o arquivo para o servidor.
})

server.get('/create-point', (req, res) => {
  return res.render("create-point.html")
});

server.get('/search', (req, res) => {
  return res.render("search-results.html")
});

// ligar o servidor (obs, por padrão, toda vez que alterar o servidor teria que ligar novamente ele. Entretanto, instalamos um pacote nodemon que resolve isto.)
server.listen(3000);
