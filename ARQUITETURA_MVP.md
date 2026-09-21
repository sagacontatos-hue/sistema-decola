# Sistema Decola 1.0 — arquitetura do MVP

## Recorte validado

O MVP prova um único fluxo operacional: **cliente → onboarding → arquivo → normalização → leitura → diagnóstico → plano de 30 dias**. Não inclui integrações externas, automações de campanhas ou CRM operacional.

## Arquitetura proposta para produção

| Camada | Escolha | Papel no MVP |
|---|---|---|
| Interface | Next.js + TypeScript | Dashboard interno, páginas de cliente e fluxos assistidos |
| API | Route handlers / serviço TypeScript | Validação, autorização, processamento e geração de análises |
| Banco | PostgreSQL | Dados estruturados, isolamento e histórico por período |
| Arquivos | S3 compatível | Originais importados e anexos de onboarding |
| Processamento | Worker assíncrono | Leitura, mapeamento, agregação e análises demoradas |
| IA | Serviço com respostas estruturadas | Briefing, hipóteses, oportunidades e plano, sempre com evidências |
| Autenticação | Auth.js / provedor corporativo | Equipe interna, papéis e trilha de auditoria |

A interface entregue nesta pasta é uma demonstração funcional sem servidor: seus dados ficam no navegador, para validar a experiência antes de provisionar essa arquitetura.

## Modelo de dados principal

```text
users ──< client_members >── clients ──< imports ──< import_columns
                                  │              └──< normalized_records
                                  ├──< onboardings
                                  ├──< diagnostics ──< opportunities
                                  ├──< action_plans ──< action_items
                                  └──< period_snapshots
```

### Tabelas essenciais

| Entidade | Campos essenciais |
|---|---|
| `clients` | id, nome, empresa, segmento, cidade, estado, contato, responsável, entrada, status, objetivo, observações |
| `client_members` | client_id, user_id, role; impede acesso fora da carteira autorizada |
| `imports` | id, client_id, nome_original, fonte, tipo, período, status, hash, uploaded_by, created_at |
| `import_columns` | import_id, coluna_original, campo_decola, confiança, confirmado_por |
| `normalized_records` | import_id, client_id, tipo, período, payload JSONB, chave_linha; particionável por período |
| `onboardings` | client_id, transcrição, resumo, notas, briefing JSONB, versão, origem |
| `diagnostics` | client_id, período, scores JSONB, evidências JSONB, análise, status |
| `opportunities` | diagnostic_id, prioridade, pilar, evidência, impacto, confiança, recomendação |
| `action_plans` / `action_items` | client_id, período, status, responsável, prazo, indicador, justificativa |
| `audit_logs` | ator, entidade, ação, metadados, timestamp |

## Regras inegociáveis

- Todo registro analítico contém `client_id` e a API aplica escopo por associação em `client_members`.
- Dados pessoais ficam separados ou mascarados na interface; análises usam agregados sempre que possível.
- Arquivo original é preservado, mas dados normalizados têm origem e mapeamento rastreáveis.
- A IA recebe somente o escopo do cliente e devolve estrutura tipada com `dado`, `análise` e `recomendação` separados.
- Inferências usam linguagem condicional e exigem evidência; o usuário aprova o plano antes de sua publicação.

## Telas do MVP

1. Login
2. Dashboard com carteira, prioridades e atalhos
3. Cadastro de cliente
4. Visão geral do cliente
5. Onboarding e briefing estratégico
6. Importar dados e confirmar mapeamento
7. Dados importados e prévia agregada
8. Diagnóstico 360° e mapa de oportunidades
9. Plano de Decolagem editável

## Próximo passo de implementação

Migrar esta prova de experiência para Next.js, criar as migrations PostgreSQL e adicionar processamento de arquivos em worker. Integrações e automações ficam explicitamente fora deste primeiro ciclo.
