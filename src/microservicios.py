from flask import Flask, jsonify, request
import requests

app = Flask(__name__)

@app.route("/")
def index():
    results = {}
    
    # Obtener el nombre del juego desde la query string; si no se pasa, se usan valores por defecto.
    game_name = request.args.get("game_name")
    if not game_name:
        # Valores por defecto: para Steam se usará "Counter Strike: Global Offensive" 
        # y para CheapShark "Lego Batman"
        game_name_steam = "Counter Strike: Global Offensive"
        game_name_cheap = "Lego Batman"
    else:
        game_name_steam = game_name
        game_name_cheap = game_name

    # 1. Epic Games: obtener el juego gratis del momento (promociones gratuitas)
    epic_url = "https://store-site-backend-static.ak.epicgames.com/freeGamesPromotions"
    epic_response = requests.get(epic_url)
    if epic_response.status_code == 200:
        epic_data = epic_response.json()
        
        results["epic_free_game"] = epic_data
    else:
        results["epic_free_game"] = f"Error: Epic API status code {epic_response.status_code}"

    # 2. Steam: buscar juego por nombre y obtener detalles
    steam_search_url = f"https://store.steampowered.com/api/storesearch/?term={game_name_steam}&cc=EU&l=es"
    steam_search_response = requests.get(steam_search_url)
    if steam_search_response.status_code == 200:
        search_data = steam_search_response.json()
        if search_data.get("total", 0) > 0:
            
            first_item = search_data["items"][0]
            appid = first_item["id"]
            
            steam_details_url = f"https://store.steampowered.com/api/appdetails?appids={appid}&cc=EU&l=es"
            steam_details_response = requests.get(steam_details_url)
            if steam_details_response.status_code == 200:
                steam_data = steam_details_response.json()
                results["steam_game"] = steam_data
            else:
                results["steam_game"] = f"Error: Steam appdetails API status code {steam_details_response.status_code}"
        else:
            results["steam_game"] = "No se encontró ningún juego en Steam con ese nombre."
    else:
        results["steam_game"] = f"Error: Steam search API status code {steam_search_response.status_code}"

    # 3. CheapShark: buscar juego por nombre para obtener precios
    cheapshark_search_url = f"https://www.cheapshark.com/api/1.0/games?title={game_name_cheap}"
    cheapshark_search_response = requests.get(cheapshark_search_url)
    if cheapshark_search_response.status_code == 200:
        cheapshark_data = cheapshark_search_response.json()
        if cheapshark_data: 
            results["cheapshark_prices"] = cheapshark_data[0]
        else:
            results["cheapshark_prices"] = "No se encontró ningún juego en CheapShark con ese nombre."
    else:
        results["cheapshark_prices"] = f"Error: CheapShark API status code {cheapshark_search_response.status_code}"

    return jsonify(results)

if __name__ == "__main__":
    app.run(debug=True)
