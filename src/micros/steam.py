import requests

def get_steam_game(game_name="Counter Strike: Global Offensive"):
    steam_search_url = f"https://store.steampowered.com/api/storesearch/?term={game_name}&cc=EU&l=es"
    try:
        search_response = requests.get(steam_search_url)
        search_response.raise_for_status()
        search_data = search_response.json()
        if search_data.get("total", 0) > 0:
            # Tomar el primer resultado y extraer su appid
            first_item = search_data["items"][0]
            appid = first_item["id"]
            steam_details_url = f"https://store.steampowered.com/api/appdetails?appids={appid}&cc=EU&l=es"
            details_response = requests.get(steam_details_url)
            details_response.raise_for_status()
            return details_response.json()
        else:
            return {"error": "No se encontró ningún juego en Steam con ese nombre."}
    except Exception as e:
        return {"error": f"Steam API error: {str(e)}"}
