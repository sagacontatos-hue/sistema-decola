# Traffic OS — estrutura preparada

O Sistema Decola preserva o armazenamento local do MVP e adiciona as entidades abaixo para uma futura migração a banco estruturado:

- users
- clients
- ad_accounts
- campaigns
- ad_sets
- ads
- creatives
- campaign_metrics
- automations
- automation_logs

Relacionamentos esperados:

`client → ad_accounts → campaigns → ad_sets → ads`

`campaign → creatives → campaign_metrics`

## Segurança da integração

`lib/adliftr/AdLiftrService.js` é a única camada preparada para conversar com o AdLiftr. Ela usa somente variáveis do ambiente do servidor:

```text
ADLIFTR_API_KEY=
ADLIFTR_API_URL=
```

O browser não recebe essas variáveis. Sem ambas configuradas, o sistema mostra **AdLiftr não conectado** e permanece em **Modo demonstração**. A criação local mantém sempre o status inicial **Pausada**.
