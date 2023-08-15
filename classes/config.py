from classes.admin_tools.log import Log
from classes.base.singleton import MetaSingleton

SERVER_HOST = 'server_host'
SERVER_PORT = 'server_port'

DB_ADDRESS = 'db_address'
DB_PORT = 'db_port'
DB_NAME = 'db_name'
DB_USER = 'db_user'
DB_PASSWORD = 'db_password'


class Config(metaclass=MetaSingleton):
    def __init__(self):
        self.__params = {}

    def read_params(self):
        with open("config.cfg", "r") as conf:
            Log().success('Initializing settings...')
            for line in conf:
                if len(line) != 0 or '=' in line:
                    self.insert_param(line)

    def insert_param(self, param_str: str):
        try:
            para_line = param_str.replace('\n', '').split('=', 1)
            if len(para_line) == 2:
                key = para_line[0]
                value = para_line[1]
                Log().info("%s: %s" % (key, value))
                self.__params.update({key: value})
        except Exception as e:
            Log().error('Config: ' + str(e))

    def get_param(self, key: str):
        value = self.__params.get(key)
        if value is not None:
            return value
        else:
            Log().error('Config value "%s" did\'t initialized!' % key)
