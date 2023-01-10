### FULLCYCLE | DOCKER: DESAFIO 2 - NGINX/NODE

O desafio consiste em criar um proxy reverso com o NGINX, onde será realizado uma chamada para a aplicação em Nodejs.

#### Usando o código-fonte

Para usar os códigos fontes e testar o projeto primeiro clone o repositório.

```bash
git clone https://github.com/joneskleber/fullcycle-desafio-nginx-node.git
```

Após clonar o projeto, navegue pelo terminal até a pasta com os arquivos e faça o `build` do `docker-compose`.

```bash
docker-compose up --build
```

Em seguida, rode o container com a imagem que acabou de criar.

```bash
docker run --rm joneskleber/fullcycle-golang:latest
```

Após executar o build vá até o navegador e execute o comando.

```bash
http://localhost:8080
```

#### Estrutura do projeto

O projeto consiste em criar 3 imagens, sendo elas:

- Uma imagem com o NGINX que servirá como proxy reverso.
- Uma imagem com o MySQL que servirá para salvar o banco de dados contendo a tabela `people`. Os dados será salvos (persistidos) na para mysql a partir do diretório que você executar a aplicação.
- Uma imagem com o NODEJS que servirá para executar a aplicação, onde:
  - Será inserido um registro toda vez que executar a aplicação. O objetivo não é validar se os dados já existem no banco de dados. Ao executar mais de uma vez será salvo um novo registro ao banco.
  - Será retornado para o banco de dados as informações do banco de dados para ser listado em tela.

### Material Complementar

[Dockerize](https://github.com/jwilder/dockerize)

[Wait-for-it](https://github.com/codeedu/docker-wait-for-it)

[Nodejs](https://nodejs.org/en/)

[NGNIX](https://www.nginx.com/)

### Desenvolvido por

[![](https://contrib.rocks/image?repo=joneskleber/joneskleber)](https://linkedin.com/in/joneskleber/)

### Licença

Este projeto é parte do curso de Docker da <strong>FullCycle</strong>.
