require('dotenv').config();
const express = require('express');
const { google } = require('googleapis');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const SCOPES = ['https://www.googleapis.com/auth/calendar'];
const auth = new google.auth.GoogleAuth({
    keyFile: 'credenciais.json', // Substitua pelo caminho do seu arquivo de credenciais
    scopes: SCOPES
});
const calendar = google.calendar({ version: 'v3', auth });

app.post('/agendar', async (req, res) => {
    try {
        const { summary, start, end } = req.body;

        const response = await calendar.events.insert({
            calendarId: 'fc241ec055f7bb203036c1b7b2fd812f3de00f7742c37e9ad4dd3cd24ac0ac71@group.calendar.google.com',
            requestBody: { summary, start, end }
        });

        res.json({ mensagem: 'Evento agendado com sucesso!', eventoId: response.data.id });
    } catch (erro) {
        console.error('Erro ao criar evento:', erro);
        res.status(500).json({ mensagem: 'Erro ao agendar evento' });
    }
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
