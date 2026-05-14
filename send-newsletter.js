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

    const lines = file.split(/\r?\n/).slice(1);
    const contacts = [];

    for (const line of lines) {
      if (!line.trim()) continue;

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
        !contacts.some((item) => item.email === email)
      ) {
        contacts.push({
          nome: nome || 'BaldShield Member',
          email,
        });
      }
    }

    const batch = contacts.slice(0, BATCH_SIZE);

    console.log('');
    console.log('==============================');
    console.log('BALDSHIELD NEWSLETTER');
    console.log('==============================');
    console.log('');
    console.log(`Total encontrado na waitlist: ${contacts.length}`);
    console.log(`Enviando agora: ${batch.length}`);
    console.log('');

    let success = 0;
    let failed = 0;

    for (const contact of batch) {
      try {
        console.log(`Enviando para: ${contact.email}`);

        const response = await fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            to: contact.email,
            nome: contact.nome,
          }),
        });

        const result = await response.json();

        if (result.success) {
          success++;
          console.log('Resultado: OK');
        } else {
          failed++;
          console.log('Resultado: ERRO');
        }
      } catch (error) {
        failed++;
        console.log('Falha:', error.message);
      }

      console.log('');
      await delay(DELAY_MS);
    }

    console.log('==============================');
    console.log('FINALIZADO');
    console.log('==============================');
    console.log(`Sucesso: ${success}`);
    console.log(`Falhas: ${failed}`);
    console.log('');
  } catch (error) {
    console.error('Erro geral:', error);
  }
}

run();