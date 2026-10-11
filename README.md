# Set Tool

App de set para o iPhone: ordem do dia, lista de planos, storyboard, claquete, sol do dia, mídia e bateria, equipamento, documentos e relatório de fim do dia. Um app só serve todas as gravações; cada produção é uma pasta de dados.

**Abrir:** https://digaofpv.github.io/Set-Tool/
No iPhone: Safari → Compartilhar → Adicionar à Tela de Início. Depois do primeiro acesso, funciona sem internet.

## Abas

| Aba | Para quê |
| --- | --- |
| Ordem | Blocos de horário do dia, com os planos de cada um, a ordem das lentes e aviso de atraso |
| Planos | Todos os planos, com filtro, lente sugerida, contador de takes e notas |
| Board | Storyboard cena a cena, com os planos de cada cena |
| Set | Claquete, sol do dia (nascer, pôr, golden hour, altura do sol na janela), mídia e bateria, checklist de equipamento |
| Docs | Ficha da produção, contatos, documentos com validade (SARPAS, APR, RETA, SISANT, ANAC) e arquivos anexados |
| Fim | Progresso por bloco, indispensáveis pendentes, relatório para copiar e histórico |

## Estrutura

```
index.html                 app
kit.json                   piloto, documentos permanentes, equipamento e bitrates
producoes/index.json       lista de produções
producoes/<slug>/producao.json   planos, cenas, ordem do dia, equipamento, contatos e documentos
producoes/<slug>/relatorios/     relatórios de fim do dia
```

## Fluxo com o Claude

1. Mande o roteiro para o Claude. Ele cria `producoes/<slug>/producao.json` e acrescenta a produção em `producoes/index.json`.
2. No set, marque os planos, conte takes e use a claquete. As marcações ficam salvas no aparelho.
3. No fim do dia, copie o relatório na aba Fim e cole na conversa. O Claude salva em `relatorios/` e atualiza o histórico.

## Privacidade

O repositório é público. Ele guarda apenas números e validades dos documentos; os arquivos (PDFs, fotos) anexados na aba Docs ficam só no aparelho, sem passar pelo GitHub. Não coloque CPF, endereço pessoal ou cópias de documentos nos arquivos JSON.
