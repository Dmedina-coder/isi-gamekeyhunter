"""Este archivo comprueba que funciona correctamente cada API del programa, en caso de que de error, comprueba que las credenciales
son correctas"""



from flask import Flask, jsonify, request
import time
import requests

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
    response = requests.get(f"https://www.cheapshark.com/api/1.0/games?title={keyword}&limit=10")
    games = response.json()

    cheapShark = {}
    for game in games:
        cheapShark[game.get('external')] = game.get('cheapest')

    return cheapShark

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
