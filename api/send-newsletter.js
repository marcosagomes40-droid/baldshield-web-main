import fs from 'fs';
import path from 'path';

const API_URL = 'https://www.baldshield.com/api/send-newsletter';

const BATCH_SIZE = 10;
const DELAY_MS = 2500;

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function run() {
  try {
    const csvPath = path.join(process.cwd(), 'data', 'lista-baldshield.csv');

    const file = fs.readFileSync(csvPath, 'utf-8');

    const lines = file.split('\n').slice(1);

    const emails = [];

    for (const line of lines) {
      const columns = line.split(',');

      const nome = columns[0]?.trim();
      const email = columns[1]?.trim()?.toLowerCase();
      const assunto = columns[2]?.trim()?.toLowerCase();
      const origem = columns[4]?.trim()?.toLowerCase();

      const isWaitlist =
        assunto?.includes('lista de espera') ||
        origem?.includes('waitlist-products');

      if (
        isWaitlist &&
        email &&
        email.includes('@') &&
        !emails.some((item) => item.email === email)
      ) {
        emails.push({
          nome,
          email,
        });
      }
    }

    const batch = emails.slice(0, BATCH_SIZE);

    console.log('');
    console.log('==============================');
    console.log('BALDSHIELD NEWSLETTER');
    console.log('==============================');
    console.log('');

    console.log(`Total selecionado: ${batch.length}`);
    console.log('');

    let success = 0;
    let failed = 0;

    for (const item of batch) {
      try {
        console.log(`Enviando para: ${item.email}`);

        const response = await fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            to: item.email,
            nome: item.nome || 'BaldShield Member',
          }),
        });

        const result = await response.json();

        if (result.success) {
          success++;
          console.log('OK');
        } else {
          failed++;
          console.log('ERRO');
        }
      } catch (error) {
        failed++;
        console.log('FALHA:', error.message);
      }

      console.log('');

      await delay(DELAY_MS);
    }

    console.log('==============================');
    console.log('FINALIZADO');
    console.log('==============================');
    console.log('');

    console.log(`Sucesso: ${success}`);
    console.log(`Falhas: ${failed}`);
    console.log('');

  } catch (error) {
    console.error('Erro geral:', error);
  }
}

run();