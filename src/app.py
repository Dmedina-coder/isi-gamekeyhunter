from flask import Flask, jsonify, request
from micros.epic import get_epic_free_game
from micros.steam import get_steam_game
from micros.cheapshark import get_cheapshark_prices

app = Flask(__name__)

@app.route("/")
def index():
    results = {}

    # Obtener el nombre del juego desde la query string; si no se pasa, usar valores por defecto
    game_name = request.args.get("game_name")
    if game_name:
        game_name_steam = game_name
        game_name_cheap = game_name
    else:
        game_name_steam = "Counter Strike: Global Offensive"
        game_name_cheap = "Lego Batman"

    # Llamada a cada microservicio
    results["epic_free_game"] = get_epic_free_game()
    results["steam_game"] = get_steam_game(game_name_steam)
    results["cheapshark_prices"] = get_cheapshark_prices(game_name_cheap)

    return jsonify(results)

if __name__ == "__main__":
    app.run(debug=True)
