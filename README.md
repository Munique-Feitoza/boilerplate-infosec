# Projeto Express com Helmet

Este é um projeto simples utilizando **Express.js** e **Helmet** para segurança de aplicações Node.js.

## 📚 Descrição

O objetivo principal deste projeto é demonstrar o uso do Helmet, um middleware para Express que ajuda a proteger os aplicativos definindo vários cabeçalhos HTTP de segurança automaticamente.

Além disso:
- Servimos arquivos estáticos da pasta `public/`.
- Implementamos uma rota principal que carrega um arquivo HTML da pasta `views/`.
- Temos uma API disponível sob a rota `/_api`.
- Usamos boas práticas de segurança desabilitando o cabeçalho `strict-transport-security` manualmente.

## 🚀 Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Helmet (versão 3.21.3)](https://helmetjs.github.io/)

## 🛠️ Como rodar o projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor:
   ```bash
   npm start
   ```

4. Acesse no navegador:
   ```
   http://localhost:3000/
   ```

## 📂 Estrutura de pastas

```
.
├── public/  
│   └── (arquivos estáticos, como CSS e imagens)  
├── views/  
│   └── index.html  
├── server.js  
├── myApp.js  
└── README.md  
```

## 🛡️ Segurança com Helmet

Com o Helmet ativado, seu app já ganha proteções como:
- Esconder o cabeçalho `X-Powered-By`
- Configurar políticas de segurança para `Content-Security-Policy`
- Prevenir ataques de cliquejacking e cross-site scripting (XSS)

---

## ✨ Autor

Projeto feito como parte de desafios de estudo.

