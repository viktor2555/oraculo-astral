# Oráculo Astral

Aplicativo web místico de compromisso diário: descubra seu signo pela data de nascimento, leia o recado do dia em forma de poema e medite com sons gerados no próprio navegador.

**Acesse:** https://viktor2555.github.io/oraculo-astral/

## Funcionalidades

- **Compromisso / Signo** — informe a data de nascimento (DD/MM ou DD/MM/AAAA). O app calcula o signo solar e o elemento, salva o compromisso no navegador (`localStorage`) e acompanha três passos diários: ler o recado, meditar 3 minutos e escrever a intenção do dia. Mostra a sequência de dias, o total cumprido e quantos dias faltam para o aniversário.
- **Atributos do signo** — ficha com regente, elemento, pontos fortes, desafios, energia de prosperidade, palavras-chave e intuição, com filtro e consulta à web.
- **Pesquisar** — busca qualquer termo (prosperidade, intuição, ascendente, foco, meditação, um signo…) na base local dos 12 signos e de 15 temas, e também na Wikipédia e no DuckDuckGo quando há internet.
- **Poema do dia** — recado poético que muda uma vez por dia, de acordo com a data e o signo. Pode ser ampliado para leitura, copiado ou enviado pelo WhatsApp.
- **Meditação** — 5 faixas sintetizadas com a Web Audio API (432 Hz, 528 Hz, Ambient, Theta binaural, Oceano), temporizador com sino, volume, guia de respiração 4·4·6 e links para músicas de meditação.

## Arquivos

| Arquivo | Para que serve |
|---|---|
| `index.html` | O aplicativo completo: HTML, CSS, JavaScript, imagens e vídeo embutidos |
| `folder.html` | Folder de divulgação com botão para abrir a demo (link para compartilhar) |
| `folder.jpg` | Imagem do folder, usada na prévia do link nas redes sociais |
| `manifest.webmanifest`, `sw.js`, `icons/` | Tornam o app instalável e com funcionamento offline (PWA), necessário para a Play Store |
| `privacidade.html` | Política de privacidade (exigida pela Play Store) |
| `README.md` | Esta descrição |
| `.nojekyll` | Faz o GitHub Pages publicar o site como está, sem processar com Jekyll |

## Como publicar

1. Crie o repositório `oraculo-astral`.
2. Envie os arquivos desta pasta (**Add file → Upload files**).
3. Em **Settings → Pages**, escolha **Deploy from a branch**, branch `main`, pasta `/ (root)`.

## Tecnologia

HTML5, CSS3 e JavaScript puro. Sem backend, sem chaves de API e sem dependências pagas. Fontes do Google Fonts (Cinzel, Cormorant Garamond, Inter). Os dados do compromisso ficam só no navegador de cada pessoa.
