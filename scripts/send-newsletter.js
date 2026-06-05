import fs from 'fs';
import path from 'path';

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const BATCH_SIZE = 10;
const DELAY_MS = 2500;
const FROM = 'BaldShield <contato@baldshield.com>';

const NEWSLETTER = {
  subject: 'A rotina ideal para homens carecas',
  articleUrl: 'https://www.baldshield.com/blog/rotina-ideal-para-homens-carecas',
  imageUrl: 'https://www.baldshield.com/Blog/rotina-ideal-homens-carecas-baldshield.webp',
};

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function buildHtml(nome) {
  const firstName = nome?.split(' ')?.[0] || 'BaldShield Member';

  return `
  <div style="background:#050505;padding:32px;font-family:Arial;color:#fff;">
    <div style="max-width:640px;margin:auto;background:#0b0b0b;border:1px solid #222;border-radius:24px;overflow:hidden;">
      <img src="${NEWSLETTER.imageUrl}" alt="A rotina ideal para homens carecas" style="width:100%;display:block;" />

      <div style="padding:32px;">
        <p style="color:#ff7a1a;text-transform:uppercase;letter-spacing:4px;font-size:12px;font-weight:bold;">
          Blog BaldShield
        </p>

        <h1 style="font-size:34px;line-height:1.15;margin:0 0 20px;">
          A rotina ideal para homens carecas
        </h1>

        <p style="color:#cfcfcf;font-size:16px;line-height:1.7;">
          Olá, ${firstName}.
        </p>

        <p style="color:#cfcfcf;font-size:16px;line-height:1.7;">
          Existe uma diferença entre raspar a cabeça e cuidar dela.
        </p>

        <p style="color:#cfcfcf;font-size:16px;line-height:1.7;">
          Durante muito tempo, homens carecas simplesmente improvisaram. Mas o couro cabeludo continua sendo pele — e talvez uma das áreas mais expostas do corpo.
        </p>

        <p style="color:#cfcfcf;font-size:16px;line-height:1.7;">
          No novo artigo da BaldShield, falamos sobre oleosidade, brilho excessivo, exposição solar, conforto e o nascimento do scalp care masculino.
        </p>

        <div style="text-align:center;margin:32px 0;">
          <a href="${NEWSLETTER.articleUrl}" target="_blank" style="background:#ff7a1a;color:#050505;text-decoration:none;padding:16px 28px;border-radius:14px;font-weight:bold;">
            Ler artigo agora
          </a>
        </div>

        <p style="color:#fff;font-weight:bold;margin-bottom:4px;">BaldShield</p>
        <p style="color:#999;font-size:14px;">Scalp Care para homens carecas.</p>

        <hr style="border:none;border-top:1px solid #222;margin:28px 0;" />

        <p style="color:#777;font-size:12px;text-align:center;">
          Você está recebendo este e-mail porque entrou na lista da BaldShield.
        </p>
      </div>
    </div>
  </div>
  `;
}

async function sendEmail(contact) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: FROM,
      to: contact.email,
      subject: NEWSLETTER.subject,
      html: buildHtml(contact.nome),
    }),
  });

  const text = await response.text();

  let result = {};
  try {
    result = text ? JSON.parse(text) : {};
  } catch {
    result = { raw: text };
  }

  return {
    ok: response.ok,
    status: response.status,
    result,
  };
}

async function run() {
  if (!RESEND_API_KEY) {
    console.error('Erro: RESEND_API_KEY não configurada.');
    return;
  }

  const csvPath = path.join(process.cwd(), 'data', 'lista-baldshield.csv');
  const file = fs.readFileSync(csvPath, 'utf-8');

  const lines = file.split(/\r?\n/).slice(1);
  const contacts = [];

  for (const line of lines) {
    if (!line.trim()) continue;

    const columns = line.split(',');

    const nome = columns[0]?.trim();
    const email = columns[1]?.trim()?.toLowerCase();

    if (
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
  console.log(`Total encontrado: ${contacts.length}`);
  console.log(`Enviando agora: ${batch.length}`);
  console.log('');

  let success = 0;
  let failed = 0;

  for (const contact of batch) {
    console.log(`Enviando para: ${contact.email}`);

    try {
      const result = await sendEmail(contact);

      if (result.ok) {
        success++;
        console.log('Resultado: OK');
      } else {
        failed++;
        console.log('Resultado: ERRO');
        console.log('Status:', result.status);
        console.log(result.result);
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
}

run();