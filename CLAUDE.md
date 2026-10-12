# Set Tool: como trabalhar neste repositório

App de set para iPhone (GitHub Pages). Um `index.html` serve todas as produções; cada produção é uma pasta em `producoes/<produtora>/<producao>/`.

## Ao analisar um roteiro novo

Crie `producoes/<produtora>/<producao>/producao.json` (use `bridge-films/art-hunter-mon` como modelo) e acrescente a produção em `producoes/index.json`. Sempre inclua:

- `shots`, `groups`, `scenes` (com `svg` no estilo grafite do storyboard atual, `detalhe`, `texto`, `som`), `day`, `equip`, `lens` por plano e `dual` nos planos-chave 9:16 + 16:9
- `roteiro` (frases de tela) e `depoimento` quando houver entrevista
- **`entregas`**: todos os vídeos e versões que o roteiro define (formato, duração, versão, itens obrigatórios como legendas, tela final e lettering, `shots` necessários para cada entrega e `pendencias` como cortes de minutagem ou textos a definir). Só o que está no roteiro; o que faltar vira pendência.
- `dayNotes`, `docs`, `contacts`, `location` (lat/lon) e `window`
- **`planejamento`**: análise de quantas diárias o roteiro pede, independente do tempo disponível na ordem do dia, para programar a pré-produção. Considere janelas de luz, momentos espontâneos, aéreos, depoimentos, som e reserva de clima. Campos: `recomendado`, `minimo`, `disponivel`, `resumo`, `blocos` (bloco, planos, tempo, luz, nota), `totalCaptacao`, `diarias` (titulo, horario, itens), `riscos`.
- `storyboard.jpg` gerado com as cenas, para o botão de compartilhar.

## Quando só houver Ordem do Dia (sem roteiro)

Gere a produção do mesmo jeito, usando os blocos e descrições da OD como planos. Use `diarias` (data, label, window, location, notes) e `date` em cada bloco de `day` quando houver mais de uma diária, `aspect` para o formato do storyboard ("16:9" ou o padrão 9:16), `match` nos planos que formam matchcut, `lensNote` quando a OD não define lentes e `fonte` explicando de onde os dados vieram. O que a OD não define (texto de tela, trilha, formato, duração) vira pendência nas `entregas`, e incoerências da OD vão para as notas dos blocos.

## Ao mudar o app

Suba a versão do cache em `sw.js` (`settool-vN`) a cada mudança em `index.html`, para o iPhone receber a atualização.

## Privacidade

Repositório público: nada de CPF, endereços pessoais ou cópias de documentos nos JSON.
