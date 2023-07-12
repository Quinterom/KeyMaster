# Importar las librerías necesarias.
import requests
from bs4 import BeautifulSoup

# URL de la página que contiene las palabras.
url = 'https://es.wiktionary.org/wiki/Ap%C3%A9ndice:1000_palabras_b%C3%A1sicas_en_espa%C3%B1ol'

# Obtener el contenido HTML de la página.
response = requests.get(url)
html = response.content

# Procesar el HTML para extraer las palabras.
soup = BeautifulSoup(html, 'html.parser')
table = soup.find('table', {'class': 'wikitable'})
rows = table.find_all('tr')[1:]
words = [row.find_all('td')[0].text.strip().lower() for row in rows]

# Crear un archivo JavaScript con las palabras.
with open('palabras.js', 'w') as file:
    file.write('const palabras = [\n')
    for word in words:
        file.write(f'    "{word}",\n')
    file.write('];')