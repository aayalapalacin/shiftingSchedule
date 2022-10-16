"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Programs
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/programs', methods=['GET'])
def get_all_programs():
    programs_list = Programs.query.all()
    programs_serialized = [program.serialize() for program in programs_list] 
    return jsonify(programs_serialized), 200

@api.route("/newProgram", methods=['POST'])
def new_program():
    data = request.get_json()
    add_program = Programs(name = data["name"],description = data["description"],prog_bar_txt = data["prog_bar_txt"],start_time = data["start_time"],end_time = data["end_time"],monday = data["monday"],tuesday = data["tuesday"],wednesday = data["wednesday"],thursday = data["thursday"],friday = data["friday"],saturday = data["saturday"],sunday = data["sunday"],thur_start_time = data["thur_start_time"],thur_end_time = data["thur_end_time"],prog_bar_thur_txt = data["prog_bar_thur_txt"],sat_start_time = data["sat_start_time"],sat_end_time = data["sat_end_time"],prog_bar_sat_txt = data["prog_bar_sat_txt"])
    db.session.add(add_program)
    db.session.commit()
    return jsonify(add_program.serialize())