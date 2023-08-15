from flask import Flask, request
from flask_socketio import SocketIO, send
from classes.admin_tools.log import Log, get_logger
from classes.config import Config, SERVER_HOST, SERVER_PORT
from classes.BD_connection import BD_Pool
from classes.routes.admin import AdminRoute
from classes.routes.main import MainRoute
import os
os.system('color')


app = Flask(__name__)
app.config['SECRET_KEY'] = 'CEF324RP5'
socket = SocketIO(app)
app_config = Config()
host = app_config.get_param(SERVER_HOST)
port = app_config.get_param(SERVER_PORT)

get_logger().info('Server started at %s:%s' % (host, port))
bd_connection = None #BD_Pool(app_config)

AdminRoute.register(app,route_base = '/admin')
MainRoute.register(app,route_base = '/')

if __name__ == '__main__':
    socket.run(app, host=host, port=port)
