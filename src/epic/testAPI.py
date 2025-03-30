"""Este archivo comprueba que funciona correctamente cada API del programa, en caso de que de error, comprueba que las credenciales
son correctas"""



from flask import Flask, jsonify, request
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import requests
import re
import json

app=Flask(__name__)

access_token = None
token_expiry_time = 0
strResult=""

token_url= "https://sandboxapi.g2a.com/oauth/token"

#escribe aqui las credenciales de g2a
g2a_cli = ""
g2a_secret = ""

token2_url = "https://api.isthereanydeal.com"


def get_g2a_token():
    global access_token, token_expiry_time

    response = requests.post(
        token_url,
        data={"grant_type": "client_credentials",
              "client_id": g2a_cli,
              "client_secret": g2a_secret
              }
    )

    if response.status_code == 200:
        data = response.json()
        access_token = data["access_token"]
        token_expiry_time = time.time() + data['expires_in']

def access_token():
    global access_token, token_expiry_time

    if access_token is None or time.time() >= token_expiry_time:
        get_g2a_token()
    
    return access_token

@app.route("/<keyword>")
def index(keyword):
   # Configuración de opciones para Chrome
    chrome_options = Options()
    # Es recomendable no usar headless para evitar detección en algunos sitios
    # chrome_options.add_argument("--headless")
    chrome_options.add_argument("--disable-blink-features=AutomationControlled")
    chrome_options.add_argument("user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36")

    # Ruta al chromedriver (asegúrate de tenerlo instalado y configurado en PATH)
    service = Service()

    # Inicializar el driver
    driver = webdriver.Chrome(service=service, options=chrome_options)

    # URL de la página que deseas obtener
    url = f"https://store.epicgames.com/es-ES/browse?q={keyword}&sortBy=relevancy&sortDir=DESC&count=40"

    driver.get(url)

    # Espera hasta que algún elemento esperado esté presente (por ejemplo, el body de la página)
    try:
        WebDriverWait(driver, 15).until(EC.presence_of_element_located((By.TAG_NAME, "body")))
    except Exception as e:
        print("No se pudo cargar la página correctamente:", e)

    # Obtener el HTML de la página
    html = driver.page_source

    # Cerrar el navegador
    driver.quit()


    pattern = r"window\.__REACT_QUERY_INITIAL_QUERIES__\s*=\s*({.*?});"
    match = re.search(pattern, html, re.DOTALL)
    if match:
        json_str = match.group(1)
        try:
            data = json.loads(json_str)
            return data
        except json.JSONDecodeError as e:
            return {"error": e}

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
