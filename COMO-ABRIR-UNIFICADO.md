# Sistema Decola 1.0 — aplicação unificada

Abra no navegador:

http://127.0.0.1:4200/

## Fluxo funcional do MVP

1. Criar ou abrir um cliente.
2. Salvar notas e anexos do onboarding.
3. Importar uma planilha CSV de vendas ou produtos.
4. Enviar fotos do cardápio e prints do Instagram.
5. Consultar o Cardápio e o Diagnóstico 360°.
6. Criar e acompanhar ações no Plano de Decolagem.
7. Abrir a Central de Tráfego, vincular uma conta Meta, revisar criativos e criar campanhas pausadas.
8. Abrir Conteúdo, analisar posts, identificar campeões, gerar ideias e criar roteiros.

CSV e XLSX são lidos e normalizados para produto, categoria, quantidade, preço, custo e faturamento quando essas colunas existirem. Antes de salvar, o sistema mostra os campos identificados e permite corrigi-los. XLS/PDF são aceitos como anexos de fonte, mas precisam de um leitor específico antes de serem interpretados automaticamente.

Fotos e prints são armazenados no cliente. A análise visual/OCR automática requer uma integração de IA configurada; o sistema não inventa leituras das imagens.

## Central de Tráfego

As telas de Campanhas, Criativos, Monitoramento, Automações e Configurações operam em português. O modo demonstração é separado dos dados reais. Sem credenciais autorizadas, a mensagem exibida é **AdLiftr não conectado** e nenhuma campanha é publicada.

## Conteúdo

Posts podem ser cadastrados com print/imagem/vídeo, métricas manuais, produto, formato, hook, CTA e função no funil. O módulo calcula classificações com os sinais fornecidos, marca N/D quando faltam dados e gera ideias/roteiros baseados nos produtos do cliente. A saída deixa claro quando é uma hipótese estruturada, não uma leitura automática de Instagram.
