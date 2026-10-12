# Set Tool

App de set para o iPhone: ordem do dia, lista de planos, storyboard, claquete, sol do dia, mídia e bateria, equipamento, documentos e relatório de fim do dia. Um app só serve todas as gravações; cada produção é uma pasta de dados.

**Abrir:** https://digaofpv.github.io/Set-Tool/
No iPhone: Safari → Compartilhar → Adicionar à Tela de Início. Depois do primeiro acesso, funciona sem internet.

## Abas

| Aba | Para quê |
| --- | --- |
| Ordem | Blocos de horário do dia, com os planos de cada um, a ordem das lentes e aviso de atraso |
| Planos | Todos os planos, com filtro, lente sugerida, contador de takes e notas |
| Board | Storyboard cena a cena, com os planos e anotações de cada cena (sincronizadas entre aparelhos) |
| Set | Claquete, sol do dia (nascer, pôr, golden hour, altura do sol na janela), mídia e bateria, checklist de equipamento |
| Docs | Ficha da produção, contatos, documentos com validade (SARPAS, APR, RETA, SISANT, ANAC) e arquivos anexados |
| Fim | Progresso por bloco, indispensáveis pendentes, relatório para copiar e exportação da produção em PDF, CSV (planos e cenas), XML e JSON |

## Estrutura

```
index.html                 app
kit.json                   piloto, documentos permanentes, equipamento e bitrates
producoes/index.json                              produtoras e suas produções
producoes/<produtora>/produtora.json              contatos e notas da produtora
producoes/<produtora>/<producao>/producao.json    planos, cenas, ordem do dia, equipamento, contatos e documentos
producoes/<produtora>/<producao>/relatorios/      relatórios de fim do dia
```

## Fluxo com o Claude

1. Mande o roteiro para o Claude, dizendo a produtora. Ele cria `producoes/<produtora>/<producao>/producao.json` e acrescenta a produção em `producoes/index.json`.
2. No set, marque os planos, conte takes e use a claquete. As marcações ficam salvas no aparelho.
3. No fim do dia, copie o relatório na aba Fim e cole na conversa. O Claude salva em `relatorios/` e atualiza o histórico.

## Sincronização da equipe

Na aba Set, crie um set para a produção e compartilhe o convite (link ou QR). Marcações, takes, take bom, notas e checklist de equipamento aparecem em todos os aparelhos em tempo real, pelo Firebase (projeto `set-tool-7e2df`). Sem sinal, o app continua funcionando e envia tudo quando a conexão volta. Cada plano é salvo separadamente, então dois aparelhos podem marcar ao mesmo tempo.

Regras do Firestore usadas:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /sets/{setId}/{document=**} {
      allow read, write: if request.auth != null && setId.size() >= 12;
    }
  }
}
```

## Privacidade

O repositório é público. Os dados do Firebase (marcações e notas) só são acessíveis a quem tem o código do set. Ele guarda apenas números e validades dos documentos; os arquivos (PDFs, fotos) anexados na aba Docs ficam só no aparelho, sem passar pelo GitHub. Não coloque CPF, endereço pessoal ou cópias de documentos nos arquivos JSON.
