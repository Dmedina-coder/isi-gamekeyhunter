import requests

def get_cheapshark_prices(game_name="Lego Batman"):
    cheapshark_search_url = f"https://www.cheapshark.com/api/1.0/games?title={game_name}"
    try:
        response = requests.get(cheapshark_search_url)
        response.raise_for_status()
        data = response.json()
        if data:  # Si se encontró al menos un juego
            return data[0]
        else:
            return {"error": "No se encontró ningún juego en CheapShark con ese nombre."}
    except Exception as e:
        return {"error": f"CheapShark API error: {str(e)}"}
