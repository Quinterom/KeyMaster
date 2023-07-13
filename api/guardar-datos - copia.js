// guardar-datos.js

import { MongoClient } from 'mongodb';

// Configura la cadena de conexión a tu base de datos en MongoDB Atlas
//const uri = 'mongodb+srv://<jlqm>:<Mazinger3>@<ClusterKeyM>.mongodb.net/<basededatos>?retryWrites=true&w=majority';

const uri = 'mongodb+srv://jlqm:Mazinger3@clusterkeym.etc90r2.mongodb.net/?retryWrites=true&w=majority'; 

// Función para guardar los datos en la base de datos
const guardarDatos = async (data) => {
  const client = new MongoClient(uri);

  try {
    await client.connect();

    // Conectarse a la base de datos y obtener una referencia a la colección
    const db = client.db('<KeyMastercoleccion>');
    const collection = db.collection('<KeyMastercoleccion>');

    // Insertar los datos en la colección
    await collection.insertOne(data);

    console.log('Datos guardados exitosamente');
  } catch (error) {
    console.error('Error al guardar los datos...', error);
  } finally {
    // Cerrar la conexión con la base de datos
    await client.close();
  }
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const data = req.body;

      // Realizar las operaciones necesarias con las credenciales seguras
      // ...

      // Guardar los datos en la base de datos
      await guardarDatos(data);

      // Responder con una confirmación o cualquier otro resultado necesario
      res.status(200).json({ message: 'Datos guardados exitosamente' });
    } catch (error) {
      res.status(500).json({ message: 'Error al procesar la solicitud' });
    }
  } else {
    res.status(404).json({ message: 'No encontrado' });
  }
}
