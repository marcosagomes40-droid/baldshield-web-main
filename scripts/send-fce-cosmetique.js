import fs from "fs";
import path from "path";

const RESEND_API_KEY = "COLE_SUA_CHAVE_RESEND_AQUI";

const BATCH_SIZE = 1;
const DELAY_MS = 2500;

const FROM = "BaldShield <contato@baldshield.com>";

const NEWSLETTER = {
  subject: "Durante anos ninguém criou uma rotina para homens carecas",
  articleUrl: "https://www.baldshield.com/blog/o-que-e-scalp-defense-system",
  logoUrl: "https://www.baldshield.com/baldshield-logo.png",
};

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getFirstName(nome) {
  return nome?.trim()?.split(" ")?.[0] || "BaldShield Member";
}

function buildHtml(contact) {
  const firstName = getFirstName(contact.nome);

  return `
  <div style="background:#050505;padding:32px;font-family:Arial,Helvetica,sans-serif;color:#ffffff;">
    <div style="max-width:640px;margin:0 auto;background:#0b0b0b;border:1px solid #242424;border-radius:28px;overflow:hidden;">
      
      <div style="padding:34px 24px 24px;text-align:center;">
        <img 
          src="${NEWSLETTER.logoUrl}" 
          alt="BaldShield" 
          style="width:210px;max-width:75%;height:auto;margin:0 auto 34px;display:block;" 
        />

        <p style="color:#ff7a1a;text-transform:uppercase;letter-spacing:5px;font-size:12px;font-weight:bold;margin:0 0 22px;">
          SCALP DEFENSE SYSTEM™
        </p>

        <h1 style="font-family:Georgia,'Times New Roman',serif;font-size:28px;line-height:1.18;margin:0 0 32px;color:#ffffff;">
          Durante anos ninguém criou uma rotina para homens carecas.
        </h1>

        <p style="color:#cfcfcf;font-size:16px;line-height:1.7;margin:0 0 18px;text-align:left;">
          Olá, ${firstName}.
        </p>

        <p style="color:#cfcfcf;font-size:16px;line-height:1.7;margin:0 0 18px;text-align:left;">
          Quando alguém perde os cabelos, os fios desaparecem. Mas o couro cabeludo continua lá.
        </p>

        <p style="color:#cfcfcf;font-size:16px;line-height:1.7;margin:0 0 18px;text-align:left;">
          Continua exposto ao sol. Continua produzindo oleosidade. Continua sofrendo com calor, ressecamento e desconforto.
        </p>

        <p style="color:#cfcfcf;font-size:16px;line-height:1.7;margin:0 0 18px;text-align:left;">
          Foi dessa observação que nasceu o <strong style="color:#ffffff;">Scalp Defense System™</strong>: o método desenvolvido pela BaldShield para cuidar da saúde, do conforto e da aparência do couro cabeludo exposto.
        </p>

        <div style="margin:32px 0;padding:20px 22px;border:1px solid #2a2a2a;border-radius:20px;background:#080808;text-align:center;">
          <p style="color:#ff7a1a;text-transform:uppercase;letter-spacing:4px;font-size:12px;font-weight:bold;margin:0 0 16px;">
            OS QUATRO PILARES
          </p>

          <p style="color:#ffffff;font-size:17px;line-height:1.6;margin:0 0 12px;font-weight:bold;">
            Clean · Hydrate · Protect · Control
          </p>

          <p style="color:#999999;font-size:14px;line-height:1.6;margin:0;">
            Um sistema pensado para quem assumiu a careca com estilo, presença e confiança.
          </p>
        </div>

        <p style="color:#cfcfcf;font-size:16px;line-height:1.7;margin:0 0 24px;text-align:left;">
          Este é apenas o começo de uma nova categoria de cuidados pensada para homens carecas.
        </p>

        <div style="text-align:center;margin:36px 0;">
          <a href="${NEWSLETTER.articleUrl}" target="_blank" style="background:#ff7a1a;color:#050505;text-decoration:none;padding:16px 32px;border-radius:999px;font-weight:bold;font-size:15px;display:inline-block;">
            Ler artigo completo
          </a>
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
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM,
      to: contact.email,
      subject: NEWSLETTER.subject,
      html: buildHtml(contact),
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
  if (!RESEND_API_KEY || RESEND_API_KEY.includes("COLE_SUA_CHAVE")) {
    console.error("Erro: RESEND_API_KEY não configurada.");
    return;
  }

  const csvPath = path.join(process.cwd(), "data", "lista-baldshield.csv");
  const file = fs.readFileSync(csvPath, "utf-8");

  const lines = file.split(/\r?\n/).slice(1);
  const contacts = [];

  for (const line of lines) {
    if (!line.trim()) continue;

    const columns = line.split(",");

    const nome = columns[0]?.trim();
    const email = columns[1]?.trim()?.toLowerCase();

    if (
      email &&
      email.includes("@") &&
      !contacts.some((item) => item.email === email)
    ) {
      contacts.push({
        nome: nome || "BaldShield Member",
        email,
      });
    }
  }

  const batch = contacts.slice(0, BATCH_SIZE);

  console.log("");
  console.log("==============================");
  console.log("BALDSHIELD SDS NEWSLETTER");
  console.log("==============================");
  console.log(`Total encontrado: ${contacts.length}`);
  console.log(`Enviando agora: ${batch.length}`);
  console.log("");

  let success = 0;
  let failed = 0;

  for (const contact of batch) {
    console.log(`Enviando para: ${contact.email}`);

    try {
      const result = await sendEmail(contact);

      if (result.ok) {
        success++;
        console.log("Resultado: OK");
      } else {
        failed++;
        console.log("Resultado: ERRO");
        console.log("Status:", result.status);
        console.log(result.result);
      }
    } catch (error) {
      failed++;
      console.log("Falha:", error.message);
    }

    console.log("");
    await delay(DELAY_MS);
  }

  console.log("==============================");
  console.log("FINALIZADO");
  console.log("==============================");
  console.log(`Sucesso: ${success}`);
  console.log(`Falhas: ${failed}`);
}

run();