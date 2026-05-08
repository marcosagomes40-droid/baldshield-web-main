import fs from 'fs';
import path from 'path';

const API_URL = 'https://www.baldshield.com/api/send-newsletter';

async function run() {
  try {
    const csvPath = path.join(process.cwd(), 'data', 'lista-baldshield.csv');

    const file = fs.readFileSync(csvPath, 'utf-8');

    const lines = file.split('\n').slice(1);

    const emails = [];

    for (const line of lines) {
      const columns = line.split(',');

      const email = columns[1]?.trim()?.toLowerCase();

      if (
        email &&
        email.includes('@') &&
        !emails.includes(email)
      ) {
        emails.push(email);
      }
    }

    const testEmails = emails.slice(0, 3);

    console.log('');
    console.log('==============================');
    console.log('TESTE NEWSLETTER BALDSHIELD');
    console.log('==============================');
    console.log('');

    for (const email of testEmails) {
      console.log(`Enviando para: ${email}`);

      try {
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            to: email,
            nome: 'BaldShield Member',
          }),
        });

        const result = await response.json();

        console.log('Resultado:', result.success ? 'OK' : 'ERRO');
      } catch (error) {
        console.log('Falha:', error.message);
      }

      console.log('');
    }

    console.log('Teste concluído.');

  } catch (error) {
    console.error('Erro geral:', error);
  }
}

run();