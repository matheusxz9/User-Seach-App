# 👤 User Search App - Vue 3 + TypeScript

Este projeto é uma aplicação web moderna desenvolvida para listagem e filtragem de usuários em tempo real, consumindo dados de uma API externa. O objetivo principal foi praticar a reatividade do Vue 3 e a tipagem forte com TypeScript.



## 🚀 Tecnologias Utilizadas

* **Vue 3**: Framework progressivo para construção de interfaces.
* **Composition API**: Para uma lógica de componentes mais organizada e reutilizável.
* **TypeScript**: Adicionando tipagem estática para evitar erros em tempo de desenvolvimento.
* **Vite**: Ferramenta de build ultra-rápida.
* **JSONPlaceholder API**: Fonte de dados fictícios para simular um ambiente real.

## 🛠️ Funcionalidades

* **Consumo de API**: Busca automática de usuários ao iniciar a aplicação.
* **Busca Dinâmica**: Filtro em tempo real conforme o usuário digita no input.
* **Gerenciamento de Estado**: Uso de `ref` e `computed` para manipulação eficiente dos dados.
* **Feedback de UX**: Tratamento de estados de "Carregando", "Erro de conexão" e "Nenhum resultado encontrado".
* **Sistema de Favoritos**: Permite marcar/desmarcar usuários favoritos (em memória).

## 📁 Estrutura do Projeto

```text
src/
 ├── components/     # Componentes visuais (UserCard, etc)
 ├── services/       # Lógica de consumo de API (fetch)
 ├── App.vue         # Componente principal e lógica de estado
 └── main.ts         # Ponto de entrada da aplicação
