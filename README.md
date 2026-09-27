# Pagode do Capão

Site-conceito de um festival fictício de pagode, samba e cultura de quebrada no Capão Redondo, em São Paulo.

## Stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS 4
- Wouter para as rotas da SPA
- Lucide React para os ícones

## Desenvolvimento local

Requisitos: Node.js 20 ou superior.

```bash
pnpm install
pnpm dev
```

O servidor local abre em `http://localhost:3000`.

Comandos úteis:

```bash
pnpm run check    # verifica os tipos TypeScript
pnpm run build    # gera a versão de produção em dist/
pnpm run preview  # serve o build localmente
```

O projeto usa `pnpm-workspace.yaml` para permitir os scripts nativos necessários por `@tailwindcss/oxide` e `esbuild`. Não remova os pacotes da lista `onlyBuiltDependencies`.

## Deploy na Vercel

O projeto é uma SPA estática. No painel da Vercel, importe o repositório e use:

| Configuração | Valor |
| --- | --- |
| Framework Preset | Vite |
| Root Directory | `.` |
| Install Command | `pnpm install` |
| Build Command | `pnpm run build` |
| Output Directory | `dist` |

O arquivo `vercel.json` já redireciona as rotas do cliente para `index.html`, permitindo que páginas como `/lineup` funcionem ao serem acessadas diretamente.

Também é possível publicar pela CLI:

```bash
pnpm dlx vercel login
pnpm dlx vercel --prod
```

## Estrutura

- `client/src/pages/`: páginas Início, Line-up, Ingressos, Informações e Dúvidas
- `client/src/components/`: layout compartilhado, mapa e componentes de interface
- `client/public/images/`: imagens usadas no hero e no line-up
- `client/src/index.css`: identidade visual e animações do site

O formulário de contato e os botões de compra são demonstrações visuais e não processam pagamentos nem enviam dados para um backend.

##Integrantes do grupo
- Pedro Sarmento
- Miguel Milher
- Kaue Rodrigues
