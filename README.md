
# Secure Password Hashing with bcrypt

Este projeto implementa a prática de hashing de senhas usando o pacote `bcrypt` em um servidor Express. O objetivo é proteger senhas armazenadas e garantir a segurança das informações de login de usuários.

## Funcionalidades

- **Hashing de Senhas**: Senhas são convertidas em hashes usando o algoritmo bcrypt, que é projetado para ser lento e computacionalmente intensivo para evitar ataques de força bruta.
- **Salting**: Cada senha é "salgada", o que significa que dados aleatórios são adicionados antes do hashing para aumentar a segurança.
- **Comparação de Senhas**: É possível verificar se uma senha fornecida pelo usuário corresponde ao hash armazenado, usando as funções `bcrypt.compareSync()` ou `bcrypt.compare()`.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework para criar o servidor.
- **bcrypt**: Biblioteca para hashing de senhas com sal e comparações seguras.

## Como Rodar o Projeto

### 1. Instalar Dependências

Primeiro, clone o repositório ou baixe o código. Em seguida, instale as dependências do projeto.

```bash
npm install
```

### 2. Rodar o Servidor

Após a instalação das dependências, inicie o servidor com o comando:

```bash
npm start
```

Isso irá iniciar o servidor na porta `3000` (ou a porta configurada no seu ambiente).

### 3. Testes

Para rodar os testes (utilizando o Mocha), execute o seguinte comando:

```bash
npm test
```

Os testes garantirão que as funções de hashing e comparação estejam funcionando corretamente.

## Funções de Hashing

### Hash Síncrono

O método de **hashing síncrono** é utilizado quando você deseja gerar um hash de forma rápida, sem bloquear o servidor, mas com o custo de potenciais lentidões caso o hash precise ser calculado com frequência.

```js
var hash = bcrypt.hashSync('myPlaintextPassword', 13);
console.log('Hash síncrono gerado:', hash);
```

### Hash Assíncrono

O **hashing assíncrono** é recomendado para operações que podem exigir mais tempo, já que a execução não bloqueia outras requisições do servidor.

```js
bcrypt.hash('myPlaintextPassword', 13, (err, hash) => {
  console.log('Hash assíncrono gerado:', hash);
});
```

### Comparação de Senhas

Após gerar um hash, você pode comparar uma senha fornecida pelo usuário com o hash armazenado utilizando as funções `compareSync` ou `compare` do `bcrypt`:

#### Comparação Síncrona:

```js
var result = bcrypt.compareSync('myPlaintextPassword', hash);
console.log('Senha corresponde ao hash? (síncrono):', result);
```

#### Comparação Assíncrona:

```js
bcrypt.compare('myPlaintextPassword', hash, (err, res) => {
  console.log('Senha corresponde ao hash? (assíncrono):', res);
});
```

## Contribuição

Se você deseja contribuir para este projeto, siga os seguintes passos:

1. Fork este repositório.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Faça as alterações necessárias e commit com uma mensagem descritiva (`git commit -am 'Adicionando nova feature'`).
4. Envie para o repositório remoto (`git push origin feature/nova-feature`).
5. Abra um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT - consulte o arquivo [LICENSE](LICENSE) para mais detalhes.
