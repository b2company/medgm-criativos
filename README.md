# MedGM Criativos

Criativos para anúncios Instagram da MedGM em duas dimensões:
- **Feed:** 1080x1080px
- **Stories:** 1080x1920px

## Setup Local

1. Arrumar permissões do npm (se necessário):
```bash
sudo chown -R 501:20 "/Users/odavi.feitosa/.npm"
```

2. Instalar dependências:
```bash
npm install
```

3. Rodar servidor de desenvolvimento:
```bash
npm run dev
```

4. Abrir no navegador:
- Home: http://localhost:3000
- Feed: http://localhost:3000/feed
- Stories: http://localhost:3000/stories

## Como tirar screenshots

### Opção 1: Browser DevTools
1. Abra a página (feed ou stories)
2. F12 para abrir DevTools
3. Toggle device toolbar (Ctrl+Shift+M)
4. Defina dimensões custom:
   - Feed: 1080 x 1080
   - Stories: 1080 x 1920
5. Screenshot: Ctrl+Shift+P > "Capture screenshot"

### Opção 2: Extensão do Chrome
- Use "GoFullPage" ou "Awesome Screenshot"

## Deploy no Vercel

1. Push para GitHub
2. Conecte o repositório no Vercel
3. Deploy automático
4. URLs:
   - `/feed` - criativo para feed
   - `/stories` - criativo para stories

## Cores do Projeto

- Fundo: `#1A1A1A`
- Primária: `#FFEBC3`
- Secundária: `#CAAA82`

## Fontes

- Headline: Termina Regular
- Corpo: Inter Regular
