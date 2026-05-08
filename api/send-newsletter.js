import { Resend } from 'resend';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed',
    });
  }

  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return res.status(500).json({
        success: false,
        error: 'RESEND_API_KEY não configurada',
      });
    }

    const resend = new Resend(apiKey);

    const body =
      typeof req.body === 'string'
        ? JSON.parse(req.body || '{}')
        : req.body || {};

    const {
      to = 'contato@baldshield.com',
      nome = 'Marcos',
      blogTitle = 'Por que a careca brilha?',
      blogSummary =
        'A ciência do couro cabeludo e o segredo do acabamento matte premium.',
      blogUrl =
        'https://www.baldshield.com/blog/por-que-a-careca-brilha',
      heroImage =
        'https://www.baldshield.com/Blog/Blog_brilho1a.png',
    } = body;

    const result = await resend.emails.send({
      from: 'BaldShield <contato@baldshield.com>',
      to,
      subject: `Novo artigo BaldShield: ${blogTitle}`,

      html: `
        <div style="margin:0;padding:40px;background:#000000;font-family:Arial,Helvetica,sans-serif;">
          <div style="max-width:680px;margin:0 auto;background:#0b0b0b;border:1px solid #1f1f1f;border-radius:28px;overflow:hidden;">

            <div style="padding:30px 32px 28px 32px;text-align:center;border-bottom:1px solid #1a1a1a;">
              <img
                src="https://www.baldshield.com/logo.png"
                alt="BaldShield"
                width="190"
                style="display:block;margin:0 auto 14px auto;"
              />

              <p style="color:#c9a96b;margin:0;letter-spacing:3px;font-size:12px;text-transform:uppercase;">
                Scalp care for the bold
              </p>
            </div>

            <img
              src="${heroImage}"
              alt="${blogTitle}"
              style="display:block;width:100%;height:auto;border:0;"
            />

            <div style="padding:46px 34px;color:#eaeaea;">

              <p style="margin:0 0 14px 0;color:#ff8c00;font-size:12px;font-weight:bold;letter-spacing:3px;text-transform:uppercase;">
                Novo artigo no blog
              </p>

              <h1 style="margin:0 0 22px 0;color:#ffffff;font-size:36px;line-height:1.15;font-weight:800;">
                ${blogTitle}
              </h1>

              <p style="margin:0 0 24px 0;color:#cfcfcf;font-size:17px;line-height:1.8;">
                Olá${nome ? `, ${nome}` : ''}. Publicamos um novo conteúdo sobre cuidado, brilho e presença para quem assumiu a careca.
              </p>

              <p style="margin:0 0 34px 0;color:#cfcfcf;font-size:17px;line-height:1.8;">
                ${blogSummary}
              </p>

              <div style="text-align:center;margin:40px 0;">
                <a
                  href="${blogUrl}"
                  style="
                    background:#ff8c00;
                    color:#000000;
                    text-decoration:none;
                    padding:17px 32px;
                    border-radius:14px;
                    font-weight:bold;
                    display:inline-block;
                    font-size:16px;
                  "
                >
                  Ler artigo completo
                </a>
              </div>

              <div style="margin-top:46px;padding:26px;border:1px solid #2a2a2a;border-radius:18px;background:#111111;text-align:center;">
                <p style="margin:0;color:#d8d8d8;font-size:16px;line-height:1.7;">
                  Assumir a careca é estilo. Cuidar dela é o próximo passo.
                </p>
              </div>

            </div>

            <div style="padding:26px 24px;text-align:center;border-top:1px solid #222;background:#070707;">

              <p style="margin:0 0 10px 0;color:#777;font-size:12px;">
                BaldShield © ${new Date().getFullYear()}
              </p>

              <p style="margin:0;color:#666;font-size:11px;line-height:1.7;">
                Você recebeu este e-mail porque se cadastrou para receber novidades da BaldShield.
                <br />
                Para cancelar sua inscrição, responda este e-mail com <strong>REMOVER</strong>.
              </p>

            </div>

          </div>
        </div>
      `,
    });

    return res.status(200).json({
      success: true,
      result,
    });

  } catch (error) {
    console.error('Erro ao enviar newsletter:', error);

    return res.status(500).json({
      success: false,
      error: error?.message || 'Erro ao enviar newsletter',
    });
  }
}