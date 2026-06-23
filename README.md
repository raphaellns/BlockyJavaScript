# Blocos JS

> Editor de programação visual baseado em [Blockly](https://developers.google.com/blockly) que gera código JavaScript em tempo real conforme os blocos são montados.

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-B4CA65?style=flat&logo=ejs&logoColor=black)
![Blockly](https://img.shields.io/badge/Blockly-4285F4?style=flat&logo=google&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green)

## 📖 Sobre o projeto

**Blocos JS** é uma ferramenta web de programação visual desenvolvida como projeto acadêmico no **IFSul (Instituto Federal Sul-rio-grandense)** sob orientação do professor **Carlos Emilio Padilla Severo**.

A proposta é permitir que o usuário monte blocos lógicos (condicionais, laços, operadores, variáveis e funções) e veja, **em tempo real**, o código JavaScript equivalente sendo gerado em um painel lateral — facilitando o aprendizado de lógica de programação ao conectar a representação visual ao código real.

## ✨ Funcionalidades

- 🧩 **Editor de blocos arrastar-e-soltar** com categorias de Lógica, Variáveis, Controle, Matemática e Funções.
- ⚡ **Geração de código JavaScript em tempo real**, atualizado a cada alteração no workspace.
- 🎨 **Sintaxe colorida** no painel de código (via [highlight.js](https://highlightjs.org/)).
- 📋 **Botão de copiar código** com um clique.
- 🔤 Operadores e palavras-chave dos blocos seguem a sintaxe real do JavaScript (`==`, `!=`, `<=`, `>=`, `if`, etc.), sem traduções que destoem do código gerado.
- 📱 Layout responsivo, adaptado para janelas menores.

## 🛠️ Tecnologias utilizadas

| Camada      | Tecnologia                                  |
|-------------|----------------------------------------------|
| Back-end    | [Node.js](https://nodejs.org/) + [Express](https://expressjs.com/) |
| Templates   | [EJS](https://ejs.co/)                       |
| Editor visual | [Blockly](https://developers.google.com/blockly) (Google) |
| Realce de código | [highlight.js](https://highlightjs.org/) |
| Fontes      | [Inter](https://fonts.google.com/specimen/Inter) / [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) |

## 🚀 Como executar localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- npm (instalado junto com o Node.js)

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/raphaellns/BlockyJavaScript.git

# 2. Acesse a pasta do projeto
cd BlockyJavaScript

# 3. Instale as dependências
npm install

# 4. Inicie o servidor
node index.js
```

Depois disso, acesse **http://localhost:3000** no navegador.

> ⚠️ Os arquivos do Blockly e do highlight.js são carregados via CDN, então é necessário estar conectado à internet para a aplicação funcionar corretamente.

## 👨‍💻 Autor

Desenvolvido por **Raphaell Silva**
- GitHub: [@raphaellns](https://github.com/raphaellns)

## 🏫 Contexto acadêmico

Projeto desenvolvido para fins didáticos no **IFSul – Instituto Federal Sul-rio-grandense**, com orientação do(a) professor(a) **Carlos Emilio Padilla Severo**.

## 📄 Licença

Este projeto está sob a licença MIT — veja o arquivo [LICENSE](LICENSE) para mais detalhes.
