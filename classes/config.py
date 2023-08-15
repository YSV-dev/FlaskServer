from classes.admin_tools.log import Log

SERVER_HOST = 'server_host'
SERVER_PORT = 'server_port'

class Config(object):
    def __init__(self):
        self.__params = {}
        self.read_params()

    def read_params(self):
        with open("config.cfg", "r") as conf:
            for line in conf:
                if(len(line) != 0 or '=' in line):
                    self.insert_param(line)

    def insert_param(self, param_str: str):
        try:
            para_line = param_str.replace('\n', '').split('=', 1)
            key = para_line[0]
            value = para_line[1]
            self.__params.update({key: value})
        except:
            return

    def get_param(self, key: str):
        value = self.__params.get(key)
        if(value is not None):
            return value
        else:
            print('!')
    
