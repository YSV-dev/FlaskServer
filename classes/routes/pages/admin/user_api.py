# -*- coding: utf-8 -*-
import hashlib
import json
import os
import random
import sys
import traceback
from datetime import datetime, timedelta

import flask
from flask import jsonify
from flask import redirect, session
from flask_classful import FlaskView, route
from werkzeug.utils import secure_filename

from classes.BD_connection import DBPool
from classes.admin_tools.log import Log
from classes.modules import email_sender
from classes.utils.get_userinfo_api import get_user_id
from classes.utils.hash_checker import hash_check
from classes.utils.hash_generator import generate_hash
from classes.utils.other import validate_image, check_email, generate_random_string


class UserApi(FlaskView):
    @route('/get_transactions/', methods=['POST'])
    def get_list_fake_transactions(self):
        try:
            transactions = DBPool().execute_sql_file('users/get_faketransactions.sql')
        except Exception as e:
            Log().error('API ban user error: ' + str(e) + ' ' + traceback.format_exc())
            return jsonify({'result': 500})

        return jsonify({'result': transactions})

    @route('/ban/', methods=['POST'])
    def ban(self):
        return jsonify({'result': 200})
