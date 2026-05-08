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
      blogUrl = 'https://www.baldshield.com/blog/por-que-a-careca-brilha',
      heroImage = 'https://www.baldshield.com/Blog/Blog_brilho1a.png',
    } = body;

    const result = await resend.emails.send({
      from: 'BaldShield <contato@baldshield.com>',
      to,
      subject: `Novo artigo BaldShield: ${blogTitle}`,
      html: `
        <div style="margin:0;padding:0;background:#000000;font-family:Arial,Helvetica,sans-serif;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#000000;border-collapse:collapse;">
            <tr>
              <td align="center" style="padding:24px 10px;">

                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#0f0f0f;border:1px solid #222222;border-radius:18px;overflow:hidden;border-collapse:separate;">
                  
                  <tr>
                    <td align="center" style="padding:28px 20px 24px 20px;border-bottom:1px solid #222222;">
                      <img
                        src="https://www.baldshield.com/escudo.png"
                        alt="BaldShield"
                        width="120"
                        style="display:block;width:120px;max-width:120px;height:auto;margin:0 auto 16px auto;border:0;"
                        />

                      <div style="color:#ffffff;font-size:19px;font-weight:bold;letter-spacing:2px;line-height:1.2;">
                        BALDSHIELD
                      </div>

                      <div style="margin-top:7px;color:#c9a96b;font-size:11px;letter-spacing:2px;line-height:1.5;text-transform:uppercase;">
                        Scalp Care for the Bold
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:0;">
                      <img
                        src="${heroImage}"
                        alt="${blogTitle}"
                        width="600"
                        style="display:block;width:100%;max-width:600px;height:auto;border:0;"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:30px 22px 32px 22px;color:#eaeaea;">
                      <p style="margin:0 0 12px 0;color:#ff6a00;font-size:11px;font-weight:bold;letter-spacing:2px;text-transform:uppercase;line-height:1.4;">
                        Novo artigo no blog
                      </p>

                      <h1 style="margin:0 0 18px 0;color:#ffffff;font-size:26px;line-height:1.18;font-weight:800;">
                        ${blogTitle}
                      </h1>

                      <p style="margin:0 0 18px 0;color:#cfcfcf;font-size:15px;line-height:1.65;">
                        Olá${nome ? `, ${nome}` : ''}. Publicamos um novo conteúdo sobre cuidado, brilho e presença para quem assumiu a careca.
                      </p>

                      <p style="margin:0 0 28px 0;color:#cfcfcf;font-size:15px;line-height:1.65;">
                        ${blogSummary}
                      </p>

                      <table role="presentation" cellpadding="0" cellspacing="0" align="center" style="margin:30px auto;border-collapse:collapse;">
                        <tr>
                          <td align="center" bgcolor="#ff6a00" style="border-radius:10px;">
                            <a
                              href="${blogUrl}"
                              style="display:inline-block;padding:14px 24px;color:#000000;text-decoration:none;font-weight:bold;font-size:15px;line-height:1.2;"
                            >
                              Ler artigo completo
                            </a>
                          </td>
                        </tr>
                      </table>

                      <div style="margin-top:28px;padding-top:22px;border-top:1px solid #222222;">
                        <p style="margin:0;color:#9a9a9a;font-size:13px;line-height:1.5;text-align:center;">
                          Assumir a careca é estilo. Cuidar dela é o próximo passo.
                        </p>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td align="center" style="padding:22px 18px;text-align:center;border-top:1px solid #222222;background:#090909;">
                      <p style="margin:0 0 8px 0;color:#777777;font-size:12px;line-height:1.4;">
                        BaldShield © ${new Date().getFullYear()}
                      </p>

                      <p style="margin:0;color:#666666;font-size:11px;line-height:1.5;">
                        Você recebeu este e-mail porque se cadastrou para receber novidades da BaldShield.
                        <br />
                        Para cancelar sua inscrição, responda este e-mail com <strong>REMOVER</strong>.
                      </p>
                    </td>
                  </tr>

                </table>

              </td>
            </tr>
          </table>
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