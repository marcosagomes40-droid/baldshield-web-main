import fs from 'fs';
import path from 'path';

const API_URL = 'https://www.baldshield.com/api/send-newsletter';

const BATCH_SIZE = 1;
const DELAY_MS = 2500;

const NEWSLETTER = {
  subject: 'Sua careca parece mais brilhante na câmera?',
  preview:
    'Entenda como iluminação, webcams e reflexos podem alterar a aparência do couro cabeludo exposto.',
  title: 'Por que minha careca parece mais brilhante na câmera?',
  subtitle:
    'Entenda como iluminação, webcams, telas e reflexos podem alterar a aparência do couro cabeludo exposto em videoconferências.',
  articleUrl:
    'https://www.baldshield.com/blog/por-que-minha-careca-brilha-na-camera',
  imageUrl:
    'https://www.baldshield.com/Blog/careca-brilha-na-camera-videoconferencia-baldshield.webp',
};

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function buildEmailHtml(nome) {
  const firstName = nome?.split(' ')?.[0] || 'BaldShield Member';

  return `
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>${NEWSLETTER.subject}</title>
  </head>
  <body style="margin:0; padding:0; background:#050505; font-family:Arial, Helvetica, sans-serif; color:#ffffff;">
    <div style="display:none; max-height:0; overflow:hidden; opacity:0;">
      ${NEWSLETTER.preview}
    </div>

    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#050505; padding:32px 0;">
      <tr>
        <td align="center">
          <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:640px; background:#0b0b0b; border:1px solid #222; border-radius:24px; overflow:hidden;">
            
            <tr>
              <td style="padding:28px 32px 18px 32px; text-align:center;">
                <img 
                  src="https://www.baldshield.com/baldshield-logo.png" 
                  alt="BaldShield" 
                  width="180" 
                  style="display:block; margin:0 auto; max-width:180px; height:auto;" 
                />
              </td>
            </tr>

            <tr>
              <td>
                <img 
                  src="${NEWSLETTER.imageUrl}" 
                  alt="Homem careca em videoconferência percebendo brilho excessivo no couro cabeludo" 
                  width="640" 
                  style="display:block; width:100%; max-width:640px; height:auto;" 
                />
              </td>
            </tr>

            <tr>
              <td style="padding:36px 32px 12px 32px;">
                <p style="margin:0 0 14px 0; color:#ff7a1a; font-size:12px; letter-spacing:4px; text-transform:uppercase; font-weight:bold;">
                  Aparência Digital
                </p>

                <h1 style="margin:0 0 18px 0; color:#ffffff; font-size:30px; line-height:1.18; font-weight:800;">
                  ${NEWSLETTER.title}
                </h1>

                <p style="margin:0 0 24px 0; color:#cfcfcf; font-size:17px; line-height:1.7;">
                  ${NEWSLETTER.subtitle}
                </p>

                <p style="margin:0 0 18px 0; color:#cfcfcf; font-size:16px; line-height:1.7;">
                  Olá, ${firstName}.
                </p>

                <p style="margin:0 0 18px 0; color:#cfcfcf; font-size:16px; line-height:1.7;">
                  Você já participou de uma reunião online e teve a sensação de que sua careca parecia muito mais brilhante na câmera do que no espelho?
                </p>

                <p style="margin:0 0 18px 0; color:#cfcfcf; font-size:16px; line-height:1.7;">
                  A boa notícia é que isso nem sempre está relacionado à oleosidade.
                </p>

                <p style="margin:0 0 18px 0; color:#cfcfcf; font-size:16px; line-height:1.7;">
                  Iluminação, webcams, monitores e reflexos podem alterar significativamente a forma como o couro cabeludo exposto aparece em videochamadas e gravações.
                </p>

                <div style="margin:30px 0; padding:22px; border:1px solid #2a2a2a; border-radius:20px; background:#080808;">
                  <p style="margin:0 0 14px 0; color:#ff7a1a; font-size:12px; letter-spacing:3px; text-transform:uppercase; font-weight:bold; text-align:center;">
                    Neste artigo você vai descobrir
                  </p>

                  <p style="margin:0 0 10px 0; color:#ffffff; font-size:15px; line-height:1.7;">
                    ✓ Por que a câmera pode aumentar a percepção de brilho
                  </p>

                  <p style="margin:0 0 10px 0; color:#ffffff; font-size:15px; line-height:1.7;">
                    ✓ Como a iluminação influencia sua aparência
                  </p>

                  <p style="margin:0 0 10px 0; color:#ffffff; font-size:15px; line-height:1.7;">
                    ✓ O impacto das webcams e telas no resultado final
                  </p>

                  <p style="margin:0; color:#ffffff; font-size:15px; line-height:1.7;">
                    ✓ Práticas simples para melhorar sua presença online
                  </p>
                </div>

                <table cellpadding="0" cellspacing="0" border="0" style="margin:0 auto 32px auto;">
                  <tr>
                    <td align="center" bgcolor="#ff7a1a" style="border-radius:999px;">
                      <a 
                        href="${NEWSLETTER.articleUrl}" 
                        target="_blank" 
                        style="display:inline-block; padding:16px 30px; color:#050505; text-decoration:none; font-size:15px; font-weight:800;"
                      >
                        Ler artigo completo
                      </a>
                    </td>
                  </tr>
                </table>

                <p style="margin:0 0 18px 0; color:#cfcfcf; font-size:16px; line-height:1.7;">
                  Na BaldShield acreditamos que assumir a careca é estilo.
                  Cuidar dela é o próximo passo.
                </p>

                <p style="margin:0 0 8px 0; color:#ffffff; font-size:16px; line-height:1.7; font-weight:bold;">
                  BaldShield
                </p>

                <p style="margin:0; color:#a9a9a9; font-size:14px; line-height:1.6;">
                  Scalp Defense System™ · Confidence for the Bold.
                </p>
              </td>
            </tr>

            <tr>
              <td style="padding:24px 32px 32px 32px;">
                <div style="height:1px; background:#222; margin-bottom:22px;"></div>
                <p style="margin:0; color:#777; font-size:12px; line-height:1.6; text-align:center;">
                  Você está recebendo este e-mail porque entrou na lista da BaldShield.
                </p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;
}

function buildEmailText(nome) {
  const firstName = nome?.split(' ')?.[0] || 'BaldShield Member';

  return `
Olá, ${firstName}.

Você já participou de uma reunião online e teve a sensação de que sua careca parecia muito mais brilhante na câmera do que no espelho?

A boa notícia é que isso nem sempre está relacionado à oleosidade.

Iluminação, webcams, monitores e reflexos podem alterar significativamente a forma como o couro cabeludo exposto aparece em videochamadas e gravações.

No novo artigo da BaldShield você vai descobrir:

- Por que a câmera pode aumentar a percepção de brilho
- Como a iluminação influencia sua aparência
- O impacto das webcams e telas no resultado final
- Práticas simples para melhorar sua presença online

Leia agora:
${NEWSLETTER.articleUrl}

BaldShield
Scalp Defense System™
Confidence for the Bold.
`;
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
    console.log(`Assunto: ${NEWSLETTER.subject}`);
    console.log(`Artigo: ${NEWSLETTER.articleUrl}`);
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
            subject: NEWSLETTER.subject,
            preview: NEWSLETTER.preview,
            title: NEWSLETTER.title,
            subtitle: NEWSLETTER.subtitle,
            articleUrl: NEWSLETTER.articleUrl,
            imageUrl: NEWSLETTER.imageUrl,
            html: buildEmailHtml(contact.nome),
            text: buildEmailText(contact.nome),
          }),
        });

        const result = await response.json();

        if (result.success) {
          success++;
          console.log('Resultado: OK');
        } else {
          failed++;
          console.log('Resultado: ERRO');
          console.log(result);
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