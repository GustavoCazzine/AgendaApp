📅 Formulário de Agendamento Online
Este é um projeto de um formulário de agendamento online que permite aos usuários agendar eventos diretamente em um calendário (como o Google Calendar). O formulário é simples, intuitivo e validado para garantir que os dados sejam corretos antes do envio.

🚀 Funcionalidades
Seleção de Serviço 🛠️
O usuário escolhe um serviço pré-definido (ex: Corte de Cabelo, Manicure, Massagem), e a duração é automaticamente preenchida.

Data e Hora 📅⏰

O usuário seleciona uma data futura (datas passadas são bloqueadas).

A hora de início é escolhida em intervalos de 30 minutos (ex: 08:00, 08:30, 09:00).

Duração Automática ⏳
A duração do evento é preenchida automaticamente com base no serviço selecionado e não pode ser alterada pelo usuário.

Título do Evento ✏️
O usuário pode adicionar um título personalizado para o evento.

Envio para o Backend 📤
Os dados do evento são enviados para um servidor Node.js (simulado) para serem processados e adicionados ao calendário.

🛠️ Tecnologias Utilizadas
HTML → Estrutura do formulário.

CSS → Estilização e design responsivo.

JavaScript → Validações, preenchimento dinâmico e envio dos dados.

Fetch API → Comunicação com o backend.

📂 Estrutura do Projeto
O projeto é composto por três arquivos principais:

index.html
Contém a estrutura do formulário e a seção de agendamento.

styles.css
Responsável pela estilização do formulário e da página.

script.js
Contém toda a lógica de validação, preenchimento dinâmico e envio dos dados.

🖥️ Como Executar o Projeto
1. Baixe os Arquivos
Clone este repositório ou faça o download dos arquivos (index.html, styles.css, script.js).

2. Abra o Projeto
Abra o arquivo index.html no seu navegador.

3. Teste o Formulário
Preencha os campos e clique em "Agendar".

Veja a mensagem de sucesso ou erro após o envio.

🎯 Como Funciona o Código
HTML (index.html)
Contém o formulário com campos para:

Seleção de serviço.

Data e hora.

Duração (somente leitura).

Título do evento.

Inclui links para o CSS e o JavaScript.

CSS (styles.css)
Define o estilo do formulário, como cores, fontes e layout.

Torna o formulário responsivo e visualmente agradável.

JavaScript (script.js)
Preenchimento Dinâmico:

Preenche a duração com base no serviço selecionado.

Gera opções de horário em intervalos de 30 minutos.

Validações:

Bloqueia datas passadas.

Verifica se todos os campos estão preenchidos.

Envio dos Dados:

Envia os dados do evento para um servidor Node.js (simulado) usando a Fetch API.

🧩 Exemplo de Uso
Selecione um Serviço
Escolha um serviço no menu suspenso (ex: "Corte de Cabelo").

Escolha a Data e Hora

Selecione uma data futura.

Escolha um horário disponível.

Confira a Duração
A duração será preenchida automaticamente com base no serviço.

Adicione um Título
Dê um nome ao evento (ex: "Corte de Cabelo - João").

Clique em "Agendar"
O evento será enviado para o backend, e uma mensagem de sucesso ou erro será exibida.

🛑 Possíveis Erros e Soluções
Erro: "Preencha todos os campos corretamente!"
Verifique se todos os campos estão preenchidos e se a data selecionada é futura.

Erro: "❌ Erro ao agendar evento."
O servidor pode estar offline ou houve um problema na comunicação. Verifique o backend.

📝 Melhorias Futuras
Integração com Google Calendar
Conectar o formulário diretamente à API do Google Calendar para criar eventos reais.

Validação de Conflitos de Horário
Verificar se o horário selecionado já está ocupado.

Notificações por E-mail
Enviar um e-mail de confirmação para o usuário após o agendamento.



🤝 Contribuição
Contribuições são bem-vindas! Siga os passos abaixo:

Faça um fork do projeto.

Crie uma branch com sua feature (git checkout -b feature/nova-feature).

Commit suas mudanças (git commit -m 'Adicionando nova feature').

Push para a branch (git push origin feature/nova-feature).

Abra um Pull Request.

📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

Feito com por Gustavo Cazzine.
