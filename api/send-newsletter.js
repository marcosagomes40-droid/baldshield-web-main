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
      blogSummary = 'A ciência do couro cabeludo e o segredo do acabamento matte premium.',
      blogUrl = 'https://www.baldshield.com/blog/por-que-a-careca-brilha',
      heroImage = 'https://www.baldshield.com/Blog/Blog_brilho1a.png',
    } = body;

    const result = await resend.emails.send({
      from: 'BaldShield <contato@baldshield.com>',
      to,
      subject: `Novo artigo BaldShield: ${blogTitle}`,
      html: `
        <div style="margin:0; padding:0; background:#050505; font-family: Arial, Helvetica, sans-serif;">
          <div style="max-width:640px; margin:0 auto; padding:32px 16px;">
            <div style="background:#0f0f0f; border:1px solid #222; border-radius:18px; overflow:hidden;">

              <div style="padding:28px 24px; text-align:center; border-bottom:1px solid #222;">
                <img
                  src="https://www.baldshield.com/escudo.png"
                  alt="BaldShield"
                  width="72"
                  style="display:block; margin:0 auto 14px auto;"
                />

                <div style="color:#ffffff; font-size:18px; font-weight:bold; letter-spacing:2px;">
                  BALDSHIELD
                </div>

                <div style="margin-top:6px; color:#9a9a9a; font-size:12px; letter-spacing:1px;">
                  SCALP CARE FOR THE BOLD
                </div>
              </div>

              <img
                src="${heroImage}"
                alt="${blogTitle}"
                style="display:block; width:100%; height:auto; border:0;"
              />

              <div style="padding:34px 28px; color:#eaeaea;">
                <p style="margin:0 0 12px 0; color:#ff6a00; font-size:12px; font-weight:bold; letter-spacing:2px; text-transform:uppercase;">
                  Novo artigo no blog
                </p>

                <h1 style="margin:0 0 18px 0; color:#ffffff; font-size:30px; line-height:1.2;">
                  ${blogTitle}
                </h1>

                <p style="margin:0 0 22px 0; color:#cfcfcf; font-size:16px; line-height:1.7;">
                  Olá${nome ? `, ${nome}` : ''}. Publicamos um novo conteúdo sobre cuidado, brilho e presença para quem assumiu a careca.
                </p>

                <p style="margin:0 0 30px 0; color:#cfcfcf; font-size:16px; line-height:1.7;">
                  ${blogSummary}
                </p>

                <div style="text-align:center; margin:34px 0;">
                  <a
                    href="${blogUrl}"
                    style="background:#ff6a00; color:#000000; padding:15px 26px; border-radius:10px; text-decoration:none; font-weight:bold; display:inline-block;"
                  >
                    Ler artigo completo
                  </a>
                </div>

                <div style="margin-top:34px; padding-top:24px; border-top:1px solid #222;">
                  <p style="margin:0; color:#9a9a9a; font-size:14px; line-height:1.6;">
                    Assumir a careca é estilo. Cuidar dela é o próximo passo.
                  </p>
                </div>
              </div>

              <div style="padding:22px 24px; text-align:center; border-top:1px solid #222; background:#090909;">
                <p style="margin:0 0 8px 0; color:#777; font-size:12px;">
                  BaldShield © ${new Date().getFullYear()}
                </p>

                <p style="margin:0; color:#666; font-size:11px; line-height:1.6;">
                  Você recebeu este e-mail porque se cadastrou para receber novidades da BaldShield.
                  <br />
                  Para cancelar sua inscrição, responda este e-mail com <strong>REMOVER</strong>.
                </p>
              </div>

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