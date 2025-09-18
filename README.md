![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

> [!TIP]
> Acess the website at [streaming-lp.vercel.app](http://streaming-lp.vercel.app)

# Landing page for a fictional Movies & Series Streaming Service with dynamic data from TMDB

[TMDB - https://www.themoviedb.org/](https://www.themoviedb.org/)

Um projeto rápido de Landing Page com consumo da **API RESTful da TMDB** para trazer filmes e séries em alta em tempo real, com diferentes seções e CTAs compondo um discurso visual baseado em lógica de conversão.

>EN:
>A Quick Landing Page project with consumption from TMDB bringing trending movies and series in real time, with diferent sections and CTAs making up a visual discourse based in conversion lógic.

## Setup local do projeto:
> Local Setup:

Faça a clonagem go repositório:

	git@github.com:j-fborges/streaming_lp.git

 

Instale as dependências:

	npm install

 

Crie o arquivo `.env` na raiz do projeto e configure as variáveis de ambiente como no exemplo `.env.example`:

	VITE_TMDB_API_ACESS_TOKEN=your-tmdb-api-acess-token
 
> [!IMPORTANT]
> Token de acesso ao TMDB API em `VITE_TMDB_API_ACESS_TOKEN`
> 
> O seu **Token de acesso ao API do TMDB pode ser gerado em: [The Movie DataBase](https://www.themoviedb.org/)**



Rode o servidor local:

	npm run dev



## Memorial Descritivo do projeto:
> Project Overview:

### Estrutura em:
>Structure in:

- **React**
- **TypeScript**
- **Vite**
- **TailwindCSS**

- **Estilização** rápida através de classes utilitarias do Tailwind
- **Estrutura escalável** empregando o uso de padrões de engenharia baseando se no principio de única responsabilidade e reutilização de componentes.
