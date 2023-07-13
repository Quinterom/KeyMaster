// index.js (en tu función en Vercel)

const { json, send } = require('micro');

// Definir el enrutador de middleware
const router = async (req, res) => {
  if (req.method === 'POST' && req.url === '/api/guardar-datos') {
    // Manejar la solicitud POST para guardar los datos en Airtable
    const data = await json(req);
    const palabrasPorMinuto = data.palabrasPorMinuto;

    // Realizar las operaciones necesarias con las credenciales seguras
    // ...

    // Responder con una confirmación o cualquier otro resultado necesario
    send(res, 200, { message: 'Datos guardados exitosamente' });
  } else {
    // Manejar otras rutas o métodos de solicitud si es necesario
    send(res, 404, { message: 'No encontrado' });
  }
};

module.exports = router;
