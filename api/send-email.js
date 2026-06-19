export default async function handler(req, res) {
  return res.status(503).json({
    success: false,
    error: 'Formulário temporariamente indisponível.',
  });
}
