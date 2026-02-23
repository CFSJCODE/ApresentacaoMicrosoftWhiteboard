# Apresentação Interativa: Microsoft Whiteboard | HUB de Extensão

## Visão Geral

Este repositório contém o código-fonte de uma aplicação web interativa desenvolvida para apresentar as funcionalidades, vantagens e aplicações práticas do Microsoft Whiteboard no contexto do HUB de Extensão da PUC Minas.

A arquitetura do projeto fundamenta-se nos princípios de *Intrinsic Web Design* e *Responsive Web Design*, assegurando uma experiência de usuário (UX) fluida, altamente resiliente e adaptável a múltiplas resoluções de tela.

## Arquitetura e Tecnologias

A interface foi desenvolvida mitigando a dependência de frameworks JavaScript de alta complexidade, priorizando a performance computacional e a acessibilidade por meio do ecossistema de tecnologias a seguir:

* **HTML5 Semântico:** Estruturação lógica, hierárquica e acessível do conteúdo (DOM).
* **CSS3 Avançado (Design Tokens):** Implementação de tipografia e espaçamentos fluidos utilizando funções matemáticas CSS (`clamp`, `calc`), além de variáveis globais (`:root`) para a manutenção da consistência visual.
* **Vanilla JavaScript (ES6+):** Gestão de eventos de navegação e orquestração assíncrona de animações de transição de estado entre as páginas (ex.: *fade-in-up*, *fade-out-down*).
* **Tailwind CSS (via CDN):** Framework de CSS utilitário focado em prototipagem ágil e estilização atômica.
* **Glassmorphism UI:** Componentes visuais estilizados com efeito de refração translúcida (`backdrop-filter`, `conic-gradient`), proporcionando uma estética moderna e profundidade espacial à interface.

## Estrutura de Diretórios e Arquivos

O sistema foi modularizado por telas de apresentação, aplicando o princípio de separação de responsabilidades (HTML para estrutura, CSS para estilização e JS para comportamento):

```text
├── index.html                 # Tela Inicial (Landing Page)
├── script_landingpage.js      # Lógica de navegação da página inicial
├── style_landingpage.css      # Estilos específicos da página inicial
├── OQueE.html                 # Módulo 1: Definição do Microsoft Whiteboard
├── oquee.js                   # Lógica comportamental do Módulo 1
├── style_oquee.css            # Estilos do Módulo 1
├── comoauxiliahub.html        # Módulo 2: Casos de Uso no HUB de Extensão
├── comoauxiliahub.js          # Lógica comportamental do Módulo 2
├── stylecomoauxiliahub.css    # Estilos do Módulo 2
├── pontospositivos.html       # Módulo 3: Vantagens e diferenciais da ferramenta
├── pontospositivos.js         # Lógica comportamental do Módulo 3
├── style_pontospositivos.css  # Estilos do Módulo 3
├── pontosnegativos.html       # Módulo 4: Limitações e restrições da ferramenta
├── pontosnegativos.js         # Lógica comportamental do Módulo 4
├── style_pontosnegativos.css  # Estilos do Módulo 4
└── deploy.yml                 # Workflow de CI/CD para o GitHub Pages
