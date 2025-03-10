from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
import uuid
from werkzeug.security import generate_password_hash, check_password_hash

import jwt
from datetime import datetime, timedelta

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////Users/danielmedinanegrete/git/API REST/dbtest.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
app.config['SECRET_KEY'] = 'ItIsNNotAGoodIdeaToPutYourSrecretKEYHere'

db = SQLAlchemy(app)

class Usuarios(db.Model):
    ID = db.Column(db.Integer, primary_key = True),
    Nombre = db.Column(db.String(100)),
    Apellidos = db.Column(db.String(100)),
    Apellidos = db.Column(db.String(100)),
    Password = db.Column(db.String(100)),
    Direccion = db.Column(db.String(100)),
    Provincia = db.Column(db.String(100)),
    Ciudad = db.Column(db.String(100)),
    CP = db.Column(db.String(100)),
    RangoEdad = db.Column(db.Integer)
    
class Juegos(db.Model):
    ID = db.Column(db.Integer, primary_key = True),
    Nombre = db.Column(db.String(100))
    
@app.route("/api/v1/registerUser", methods=['POST'])
def register():
    user = Usuarios(
        Nombre = "User",
        Password = generate_password_hash("1234")
    )
    db.session.add(user)
    db.session.commit()
    return jsonify({"result":"ok"})

@app.route("/api/v1/loginUser", methods=['GET'])
def login():
    users = Usuarios.query.all()
    for user in users:
        if (user.Nombre == "User" and check_password_hash(user.Password, "1234")):
            return make_response(jsonify({'token': token.decode('UTF-8')}), 200)
    return make_response(jsonify({"result":"User not found or password incorrect"}), 400)


