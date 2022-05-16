# Tech Talk Node

Esse projeto foi utilizado na [Tech Talk de Node](https://slides.com/rafaeldoering/code). Ele busca introduzir a criaçâo de um servidor Node com auxílio da biblioteca Express.

### Instalação e uso

***Pré-requisitos:***

Clone esse repositório:

```
git clone git@github.com:RafaelDoering/tech-talk-node.git
```

Instale os pacotes npm:

```
npm install
```

Inicie o servidor:

```
npm start
```

### Dependências

* [express](https://expressjs.com/) - Framework web para o Node.js.

### Project Structure

    /tech-talk-node
    |--- node_modules/      <-- gerada com o npm install
    |--- index.js           <-- arquivo de entrada com a inicialização do servidor express
    |--- package.json       <-- define os scripts e dependências
    |--- students.js        <-- banco de dados em memória
