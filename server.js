const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const path = require('path');

app.use(express.json());

const axios = require('axios');

const API_BASE_URL = 'https://crudcrud.com/api/d0c585eb0df2417093a7d678c472bcab';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const generateUniqueId = () => {
  const currentTime = Date.now();
  const randomString = Math.random().toString(36).substr(2, 9);
  const uniqueId = `${currentTime}-${randomString}`;
  return uniqueId;
};

app.get('/api/muskelgrupper', async (req, res) => {
  try {
    const response = await api.get('/muskelgrupper');
    res.json(response.data);
  } catch (error) {
    console.error('Feil ved henting av muskelgrupper:', error);
    res.status(500).json({ error: 'Feil ved henting av muskelgrupper' });
  }
});

app.get('/api/muskelgrupper/:muscleGroupId', async (req, res) => {
  const { muscleGroupId } = req.params;
  try {
    const response = await api.get(`/muskelgrupper/${muscleGroupId}`);
    res.json(response.data);
  } catch (error) {
    console.error('Feil ved henting av muskelgruppe:', error);
    res.status(500).json({ error: 'Feil ved henting av muskelgruppe' });
  }
});

app.post('/api/muskelgrupper', async (req, res) => {
  const muscleGroupData = req.body;
  const id = generateUniqueId();
  try {
    const response = await api.post('/muskelgrupper', {
      ...muscleGroupData,
      id,
    });
    res.json(response.data);
  } catch (error) {
    console.error('Feil ved opprettelse av muskelgruppe:', error);
    res.status(500).json({ error: 'Feil ved opprettelse av muskelgruppe' });
  }
});

app.put('/api/muskelgrupper/:muscleGroupId', async (req, res) => {
  const { muscleGroupId } = req.params;
  const muscleGroupData = req.body;
  try {
    const response = await api.put(`/muskelgrupper/${muscleGroupId}`, muscleGroupData);
    res.json(response.data);
  } catch (error) {
    console.error('Feil ved oppdatering av muskelgruppe:', error);
    res.status(500).json({ error: 'Feil ved oppdatering av muskelgruppe' });
  }
});

app.delete('/api/muskelgrupper/:muscleGroupId', async (req, res) => {
  const { muscleGroupId } = req.params;
  try {
    const response = await api.delete(`/muskelgrupper/${muscleGroupId}`);
    res.json(response.data);
  } catch (error) {
    console.error('Feil ved sletting av muskelgruppe:', error);
    res.status(500).json({ error: 'Feil ved sletting av muskelgruppe' });
  }
});

app.get('/api/øvelser', async (req, res) => {
  try {
    const response = await api.get('/øvelser');
    res.json(response.data);
  } catch (error) {
    console.error('Feil ved henting av øvelser:', error);
    res.status(500).json({ error: 'Feil ved henting av øvelser' });
  }
});

app.get('/api/øvelser/:exerciseId', async (req, res) => {
  const { exerciseId } = req.params;
  try {
    const response = await api.get(`/øvelser/${exerciseId}`);
    res.json(response.data);
  } catch (error) {
    console.error('Feil ved henting av øvelse:', error);
    res.status(500).json({ error: 'Feil ved henting av øvelse' });
  }
});

app.post('/api/øvelser', async (req, res) => {
  const exerciseData = req.body;
  const id = generateUniqueId();
  try {
    const response = await api.post('/øvelser', {
      ...exerciseData,
      id,
    });
    res.json(response.data);
  } catch (error) {
    console.error('Feil ved opprettelse av øvelse:', error);
    res.status(500).json({ error: 'Feil ved opprettelse av øvelse' });
  }
});

app.put('/api/øvelser/:exerciseId', async (req, res) => {
  const { exerciseId } = req.params;
  const exerciseData = req.body;
  try {
    const response = await api.put(`/øvelser/${exerciseId}`, exerciseData);
    res.json(response.data);
  } catch (error) {
    console.error('Feil ved oppdatering av øvelse:', error);
    res.status(500).json({ error: 'Feil ved oppdatering av øvelse' });
  }
});

app.delete('/api/øvelser/:exerciseId', async (req, res) => {
  const { exerciseId } = req.params;
  try {
    const response = await api.delete(`/øvelser/${exerciseId}`);
    res.json(response.data);
  } catch (error) {
    console.error('Feil ved sletting av øvelse:', error);
    res.status(500).json({ error: 'Feil ved sletting av øvelse' });
  }
});

app.listen(port, () => {
  console.log(`Serveren kjører på port ${port}`);
});
