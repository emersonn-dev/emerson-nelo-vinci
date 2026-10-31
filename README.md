# VINCI | Electric Vehicles

Site institucional de uma marca fictícia de carros elétricos, desenvolvido como atividade do curso **Figma Turbo**. O projeto é a implementação, em código, do protótipo criado no Figma.

🔗 **Acesse o site:** https://emersonn-dev.github.io/emerson-nelo-vinci/

## Sobre o projeto

A VINCI é uma marca fictícia de veículos elétricos. O site apresenta a linha de modelos, traz uma página completa com os detalhes do Model V2 e permite agendar um test drive.

## Páginas

- **Início (`index.html`):** destaque do Model V3, apresentação dos modelos V2 e V1, seção de serviços e atalhos para test drive, ofertas e lojas.
- **Model V2 (`modelV2.html`):** dados do carro (autonomia, torque, garantia), recursos, imagem com pontos de destaque, lista de equipamentos e perguntas frequentes (FAQ).
- **Test Drive (`teste-drive.html`):** formulário de agendamento de visita, com mensagem de confirmação.

## Funcionalidades

- Layout responsivo para celular, tablet e computador.
- Menu hambúrguer (☰) no celular e no tablet.
- Megamenu "Veículos" com os 6 modelos e links rápidos, que fecha ao clicar fora ou ao apertar `Esc`.
- Formulário de test drive com bloqueio de datas passadas e mensagem de sucesso.
- FAQ que abre e fecha com a tag `<details>`.
- Pontos de destaque (A–H) sobre a imagem do Model V2, com legenda ao passar o mouse.

## Tecnologias

- HTML5
- Tailwind CSS 3 (compilado com a CLI)
- JavaScript
- Fontes Google: Genos e Host Grotesk

## Estrutura

```
├── index.html
├── modelV2.html
├── teste-drive.html
├── script.js
├── tailwind.config.js
├── package.json
├── src/
│   └── input.css          # entrada do Tailwind
└── assets/
    ├── css/style.css      # CSS gerado (usado pelas páginas)
    ├── carros/
    └── logo/
```

## Como rodar localmente

Para só ver o site, abra o `index.html` no navegador. O CSS já está compilado em `assets/css/style.css`. É preciso ter internet para carregar as fontes do Google.

Para alterar o estilo, é necessário ter o [Node.js](https://nodejs.org) instalado:

```bash
npm install
npm run build
```

O comando `build` lê `src/input.css` e gera de novo o `assets/css/style.css`.

## Autor

**Emerson Nelo Aorim**
Graduação em Sistemas de Informação — atividade do curso Figma Turbo
