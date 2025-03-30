import requests

def get_epic_free_game():
    epic_url = "https://store-site-backend-static.ak.epicgames.com/freeGamesPromotions"
    try:
        response = requests.get(epic_url)
        response.raise_for_status()
        return response.json()
    except Exception as e:
        return {"error": f"Epic API error: {str(e)}"}
