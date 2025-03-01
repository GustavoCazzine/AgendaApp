document.getElementById('form-agendamento').addEventListener('submit', async function (event) {
    event.preventDefault(); // Evita o reload da página

    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;
    const duracao = parseInt(document.getElementById('duracao').value); // em minutos
    const titulo = document.getElementById('titulo').value;

    if (!data || !hora || !titulo || duracao <= 0) {
        document.getElementById('mensagem').innerText = "Preencha todos os campos corretamente!";
        return;
    }

    // Formata a data/hora para o Google Calendar (ISO 8601)
    const dataHoraInicio = new Date(`${data}T${hora}:00`);
    const dataHoraFim = new Date(dataHoraInicio.getTime() + duracao * 60000);

    // Enviando dados para o servidor Node.js
    const response = await fetch('http://localhost:3000/agendar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            summary: titulo,
            start: { dateTime: dataHoraInicio.toISOString(), timeZone: 'America/Sao_Paulo' },
            end: { dateTime: dataHoraFim.toISOString(), timeZone: 'America/Sao_Paulo' }
        })
    });

    const resultado = await response.json();

    if (response.ok) {
        document.getElementById('mensagem').innerText = "✅ Evento agendado com sucesso!";
    } else {
        document.getElementById('mensagem').innerText = "❌ Erro ao agendar evento.";
    }
});
