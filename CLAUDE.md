# Set Tool: como trabalhar neste repositório

App de set para iPhone (GitHub Pages). Um `index.html` serve todas as produções; cada produção é uma pasta em `producoes/<produtora>/<producao>/`.

## Ao analisar um roteiro novo

Crie `producoes/<produtora>/<producao>/producao.json` (use `bridge-films/art-hunter-mon` como modelo) e acrescente a produção em `producoes/index.json`. Sempre inclua:

- `shots`, `groups`, `scenes` (com `svg` no estilo grafite do storyboard atual, `detalhe`, `texto`, `som`), `day`, `equip`, `lens` por plano e `dual` nos planos-chave 9:16 + 16:9
- `roteiro` (frases de tela) e `depoimento` quando houver entrevista
- `dayNotes`, `docs`, `contacts`, `location` (lat/lon) e `window`
- **`planejamento`**: análise de quantas diárias o roteiro pede, independente do tempo disponível na ordem do dia, para programar a pré-produção. Considere janelas de luz, momentos espontâneos, aéreos, depoimentos, som e reserva de clima. Campos: `recomendado`, `minimo`, `disponivel`, `resumo`, `blocos` (bloco, planos, tempo, luz, nota), `totalCaptacao`, `diarias` (titulo, horario, itens), `riscos`.
- `storyboard.jpg` gerado com as cenas, para o botão de compartilhar.

## Ao mudar o app

Suba a versão do cache em `sw.js` (`settool-vN`) a cada mudança em `index.html`, para o iPhone receber a atualização.

## Privacidade

Repositório público: nada de CPF, endereços pessoais ou cópias de documentos nos JSON.
