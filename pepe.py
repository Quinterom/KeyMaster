import re

# Lee el contenido del archivo con codificación UTF-8
with open('palabra.html', 'r', encoding='utf-8') as archivo:
    contenido = archivo.read()

# Extrae las palabras utilizando expresiones regulares
palabras = re.findall(r'<span[^>]*>\s*([^<]+)\s*</span>', contenido)

# Crea el array de JavaScript con las palabras
array_js = '[' + ', '.join(['"' + palabra + '"' for palabra in palabras]) + ']'

# Guarda el resultado en un archivo con codificación UTF-8
with open('resultado.js', 'w', encoding='utf-8') as archivo_salida:
    archivo_salida.write(array_js)
