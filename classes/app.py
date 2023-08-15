from flask import Flask
from flask_socketio import SocketIO

from classes.BD_connection import DBPool
from classes.admin_tools.log import Log
from classes.base.singleton import MetaSingleton
from classes.config import Config, SERVER_HOST, SERVER_PORT
from classes.routes.admin import AdminRoute
from flask import Flask, render_template, redirect, request, session
from flask_session import Session
from classes.routes.main import MainRoute
from classes.routes.pages.admin.user_api import UserApi


class App(Flask, metaclass=MetaSingleton):
    def __init__(self, name=None):
        super().__init__(name)
        self.secret_key = 'ak;fkpwoejfmxvm;sdmg;lasdiw'
        self.config['SECRET_KEY'] = self.secret_key

        self.config["SESSION_PERMANENT"] = False
        self.config["SESSION_TYPE"] = "filesystem"
        Session(self)

        self.__app_config = Config()
        self.__app_config.read_params()

        self.__db = DBPool()
        self.__db.set_app(self).connect()

        self.__socket = SocketIO(self)
        # self.__setattr__('template_folder', '/') # если сменится путь к шаблонам, то делаем через вот это вот
        self.__host = None
        self.__port = None

    def __get_params(self):
        self.__host = self.__app_config.get_param(SERVER_HOST)
        self.__port = self.__app_config.get_param(SERVER_PORT)

    def __registrate_routes(self):
        MainRoute.register(self, route_base='/')
        AdminRoute.register(self, route_base='/admin')
        UserApi.register(self, route_base='/user_api') # там вроде можно переопределить правила чтобы было в 2 уровня

    def start(self):
        self.__get_params()
        self.__registrate_routes()
        host = self.get_host()
        port = int(self.get_port())

        try:
            self.__socket.run(self, host=host, port=port)
            Log().info('Server started at %s:%s' % (host, port))
        except Exception as e:
            Log().error('Connecting: ' + str(e))

    def get_db(self):
        return self.__db

    def get_config(self):
        return self.__app_config

    def get_host(self):
        return self.__host

    def get_port(self):
        return self.__port
