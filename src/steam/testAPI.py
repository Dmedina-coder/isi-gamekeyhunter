"""Este archivo comprueba que funciona correctamente cada API del programa, en caso de que de error, comprueba que las credenciales
son correctas"""



from flask import Flask, jsonify, request
import time
import requests
from bs4 import BeautifulSoup

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
    response = requests.get(f"https://store.steampowered.com/search/?term={keyword}")
    if response.status_code != 200:
        return False
    soup = BeautifulSoup(response.text, "html.parser")

    game_elements = soup.find_all("a", class_="search_result_row")

    games = {}
    for game in game_elements:
        # Extraer el nombre del juego
        title_elem = game.find("span", class_="title")
        # Extraer el precio final (dentro de un div con clase 'discount_final_price')
        price_elem = game.find("div", class_="discount_final_price")
        if title_elem and price_elem:
            games[title_elem.get_text(strip=True)] = price_elem.get_text(strip=True)
    return games


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
