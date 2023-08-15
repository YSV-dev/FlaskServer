# -*- coding: utf-8 -*-
import traceback
from flask_mysqlpool import MySQLPool

from classes.admin_tools.log import Log
from classes.base.singleton import MetaSingleton
from classes.config import Config, DB_ADDRESS, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD


class IDBCon(object):
    def __init__(self, dbconfig):
        self.config = Config()
        self.params = dbconfig
        self.connection = None

    def execute_query(self, query: str):
        pass

    def execute_sql_file(self, file_name: str, params=None):
        if params is None:
            params = {}


def make_dict_factory(cursor):
    column_names = [d[0] for d in cursor.description]

    def create_row(*args):
        return dict(zip(column_names, args))

    return create_row


class DBPool(IDBCon, metaclass=MetaSingleton):
    def __init__(self, dbconfig=None):
        super().__init__(dbconfig)
        self.app = None
        self.__db = None

    def set_app(self, app):
        self.app = app
        return self

    def connect(self):
        self.app.config['MYSQL_HOST'] = Config().get_param(DB_ADDRESS)
        self.app.config['MYSQL_PORT'] = int(Config().get_param(DB_PORT))
        self.app.config['MYSQL_USER'] = Config().get_param(DB_USER)
        self.app.config['MYSQL_PASS'] = Config().get_param(DB_PASSWORD)
        self.app.config['MYSQL_DB'] = Config().get_param(DB_NAME)
        self.app.config['MYSQL_POOL_NAME'] = 'mysql_pool'
        self.app.config['MYSQL_POOL_SIZE'] = 5
        self.app.config['MYSQL_AUTOCOMMIT'] = True
        self.app.config['MYSQL_CHARSET'] = "utf8mb4"
        self.app.config["MYSQL_COLLATION"] = "utf8mb4_general_ci"
        self.app.config['MAX_CONTENT_LENGTH'] = 1024 * 2048
        self.app.config['UPLOAD_EXTENSIONS'] = ['.jpg', '.png', '.jpeg']
        self.app.config['UPLOAD_FOLDER'] = 'uploads'
        self.__db = MySQLPool(self.app)
        Log().success('Connected!')

    def execute_query(self, query: str, params=None):
        conn = self.__db.connection.get_connection()
        try:
            with conn.cursor(dictionary=True) as cursor:
                cursor.execute(query, params)

                data = cursor.fetchall()
                Log().info(data)
            return data
        except Exception as e:
            Log().error('Executing query: ' + str(e) + ' ' + traceback.format_exc())
            return False
        finally:
            conn.close()

    def execute_sql_file(self, file_name: str, params=None):
        if params is None:
            params = {}
        try:
            with open('./sql/' + file_name) as file:
                return self.execute_query(file.read().replace('\n', ' '), params)
        except Exception as e:
            Log().error('Read file: ' + str(e))
            return False
