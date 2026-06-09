import fs from 'fs';
import path from 'path';

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const BATCH_SIZE = 20;
const DELAY_MS = 2500;
const FROM = 'BaldShield <contato@baldshield.com>';

const NEWSLETTER = {
  subject: 'O que é o Scalp Defense System™?',
  articleUrl: 'https://www.baldshield.com/blog/o-que-e-scalp-defense-system',
  imageUrl:
    'https://www.baldshield.com/Blog/o-que-e-scalp-defense-system-baldshield.webp',
};

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function buildHtml(nome) {
  const firstName = nome?.split(' ')?.[0] || 'BaldShield Member';

  return `
  <div style="background:#050505;padding:32px;font-family:Arial,Helvetica,sans-serif;color:#fff;">
    <div style="max-width:720px;margin:auto;background:#0b0b0b;border:1px solid #222;border-radius:24px;overflow:hidden;">
      
      <img 
        src="${NEWSLETTER.imageUrl}" 
        alt="Scalp Defense System BaldShield" 
        style="width:100%;max-height:380px;object-fit:cover;display:block;" 
      />

      <div style="padding:34px 24px 24px;text-align:left;">
        <p style="color:#ff7a1a;text-transform:uppercase;letter-spacing:4px;font-size:12px;font-weight:bold;margin:0 0 18px;text-align:center;">
          SCALP DEFENSE SYSTEM™
        </p>

        <h1 style="font-family:Georgia,'Times New Roman',serif;font-size:22px;line-height:1.25;margin:0 0 28px;color:#ffffff;text-align:center;">
          O que é o Scalp Defense System™?
        </h1>

        <p style="color:#cfcfcf;font-size:16px;line-height:1.7;margin:0 0 18px;">
          Olá, ${firstName}.
        </p>

        <p style="color:#cfcfcf;font-size:16px;line-height:1.7;margin:0 0 18px;">
          Quando alguém perde os cabelos, os fios desaparecem. Mas o couro cabeludo continua lá.
        </p>

        <p style="color:#cfcfcf;font-size:16px;line-height:1.7;margin:0 0 18px;">
          Continua exposto ao sol. Continua produzindo oleosidade. Continua sofrendo com calor, ressecamento e desconforto.
        </p>

        <p style="color:#cfcfcf;font-size:16px;line-height:1.7;margin:0 0 18px;">
          Mesmo assim, durante décadas, quase ninguém criou uma rotina específica para essa realidade.
        </p>

        <p style="color:#cfcfcf;font-size:16px;line-height:1.7;margin:0 0 24px;">
          Foi dessa observação que nasceu o <strong style="color:#ffffff;">Scalp Defense System™</strong>: o método desenvolvido pela BaldShield para ajudar homens carecas a cuidarem da saúde, do conforto e da aparência do couro cabeludo exposto.
        </p>

        <div style="margin:30px 0;padding:22px;border:1px solid #2a2a2a;border-radius:20px;background:#080808;">
          <p style="color:#ff7a1a;text-transform:uppercase;letter-spacing:3px;font-size:12px;font-weight:bold;margin:0 0 16px;text-align:center;">
            OS QUATRO PILARES
          </p>

          <p style="color:#ffffff;font-size:16px;line-height:1.7;margin:0 0 10px;">
            <strong>Clean</strong> — Limpeza e equilíbrio diário.
          </p>

          <p style="color:#ffffff;font-size:16px;line-height:1.7;margin:0 0 10px;">
            <strong>Hydrate</strong> — Conforto e hidratação.
          </p>

          <p style="color:#ffffff;font-size:16px;line-height:1.7;margin:0 0 10px;">
            <strong>Protect</strong> — Proteção contra agressões externas.
          </p>

          <p style="color:#ffffff;font-size:16px;line-height:1.7;margin:0;">
            <strong>Control</strong> — Controle da aparência oleosa ao longo do dia.
          </p>
        </div>

        <p style="color:#cfcfcf;font-size:16px;line-height:1.7;margin:0 0 24px;">
          Este é apenas o começo de uma nova categoria de cuidados pensada para homens carecas.
        </p>

        <div style="text-align:center;margin:34px 0;">
          <a href="${NEWSLETTER.articleUrl}" target="_blank" style="background:#ff7a1a;color:#050505;text-decoration:none;padding:16px 30px;border-radius:999px;font-weight:bold;font-size:15px;display:inline-block;">
            Ler artigo completo
          </a>
        </div>

        <div style="margin:34px 0 28px;padding:22px;border:1px solid #2a2a2a;border-radius:20px;background:#080808;">
          <p style="color:#ff7a1a;text-transform:uppercase;letter-spacing:3px;font-size:12px;font-weight:bold;margin:0 0 18px;text-align:center;">
            Continue explorando
          </p>

          <table width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr>
              <td style="padding:0 0 12px 0;">
                <a href="https://www.baldshield.com/blog/rotina-ideal-para-homens-carecas" target="_blank" style="color:#ffffff;text-decoration:none;font-size:15px;line-height:1.6;">
                  → A rotina ideal para homens carecas
                </a>
              </td>
            </tr>

            <tr>
              <td style="padding:0 0 12px 0;">
                <a href="https://www.baldshield.com/blog/risco-invisivel-no-couro-cabeludo" target="_blank" style="color:#ffffff;text-decoration:none;font-size:15px;line-height:1.6;">
                  → O risco invisível no couro cabeludo
                </a>
              </td>
            </tr>

            <tr>
              <td>
                <a href="https://www.baldshield.com/blog/por-que-a-careca-brilha" target="_blank" style="color:#ffffff;text-decoration:none;font-size:15px;line-height:1.6;">
                  → Por que a careca brilha?
                </a>
              </td>
            </tr>
          </table>
        </div>

        <p style="color:#ff7a1a;font-size:15px;line-height:1.7;margin:0;text-align:left;font-weight:600;">
          O futuro do scalp care masculino começou.
        </p>

        <div style="margin-top:32px;text-align:left;">
          <p style="color:#ffffff;font-weight:bold;margin:0 0 4px;">BaldShield</p>
          <p style="color:#999999;font-size:14px;margin:0;">Confidence for the Bold.</p>
        </div>

        <hr style="border:none;border-top:1px solid #222;margin:32px 0;" />

        <p style="color:#999999;font-size:13px;text-align:center;margin:0 0 10px;">
          Acompanhe a BaldShield:
        </p>

        <p style="color:#777777;font-size:13px;text-align:center;margin:0 0 18px;">
          <a href="https://www.baldshield.com" target="_blank" style="color:#ff7a1a;text-decoration:none;">Site</a>
          &nbsp;·&nbsp;
          <a href="https://www.instagram.com/baldshield.br" target="_blank" style="color:#ff7a1a;text-decoration:none;">Instagram</a>
        </p>

        <p style="color:#777777;font-size:12px;line-height:1.5;text-align:center;margin:0;">
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
  console.log('BALDSHIELD SDS NEWSLETTER');
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