# Publicar o Sistema Decola com login

## O que já está preparado

- `package.json` com comando de inicialização.
- `render.yaml` para criar um Web Service no Render.
- `.env.example` com as variáveis que devem ficar somente no servidor.
- Login protegido por `DECOLA_AUTH_CODE`.
- Rota `/health` para verificação da hospedagem.
- Logout em `/sair`.

## Publicação gratuita de teste

1. Crie um repositório privado no GitHub e envie o conteúdo desta pasta.
2. No Render, escolha **New → Web Service** e conecte o repositório.
3. Use o plano Free, o comando `npm start` e defina `DECOLA_AUTH_CODE` como um código forte.
4. Acesse o subdomínio HTTPS fornecido pelo Render.

## Limitação importante

O MVP atual ainda usa `unified-data.json`. Em serviços gratuitos com filesystem efêmero, alterações locais podem ser perdidas em reinícios ou novos deploys. Antes de usar com dados reais, a próxima etapa é migrar clientes, campanhas, criativos e arquivos para um banco/Storage persistente, como Supabase.

Não configure credenciais Meta ou AdLiftr no frontend. Nenhuma campanha real é publicada automaticamente.
