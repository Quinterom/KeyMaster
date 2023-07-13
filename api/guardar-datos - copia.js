// index.js (en tu función en Vercel)

// Definir el enrutador de middleware
const router = async (req, res) => {
    if (req.method === 'POST' && req.url === '/api/guardar-datos') {
      try {
        // Manejar la solicitud POST para guardar los datos en Airtable
        const data = await parseBody(req);
        const palabrasPorMinuto = data.palabrasPorMinuto;
  
        // Realizar las operaciones necesarias con las credenciales seguras
        // ...
  
        // Responder con una confirmación o cualquier otro resultado necesario
        sendResponse(res, 200, { message: 'Datos guardados exitosamente' });
      } catch (error) {
        sendResponse(res, 500, { message: 'Error al procesar la solicitud' });
      }
    } else {
      // Manejar otras rutas o métodos de solicitud si es necesario
      sendResponse(res, 404, { message: 'No encontrado' });
    }
  };
  
  // Función para analizar el cuerpo de la solicitud
  const parseBody = async (req) => {
    return new Promise((resolve, reject) => {
      let body = '';
      req.on('data', (chunk) => {
        body += chunk.toString();
      });
      req.on('end', () => {
        try {
          const data = JSON.parse(body);
          resolve(data);
        } catch (error) {
          reject(error);
        }
      });
      req.on('error', (error) => {
        reject(error);
      });
    });
  };
  
  // Función para enviar la respuesta
  const sendResponse = (res, statusCode, body) => {
    res.writeHead(statusCode, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(body));
  };
  
  module.exports = router;
  