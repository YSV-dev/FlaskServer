from classes.admin_tools.log import get_logger
from classes.config import Config
import cx_Oracle


#Пропишешь тут свою БД
class I_BD_con(object):
    def __init__(self, config: Config):
        self.config = config
        self.dsn = self.config.get_param('dsn')
        self.user = self.config.get_param('user')
        self.password = self.config.get_param('password')

    def execute_query(self, query: str):
        pass

    def execute_sql_file(self, file_name:str, params: dict={}):
        pass

class BD_Pool(I_BD_con):
    def __init__(self, config: Config):
        super().__init__(config)
        get_logger().info('Trying to create DB connection pool')

        try:
            
            self.pool = cx_Oracle.SessionPool(
                self.user,
                self.password,
                dsn = self.dsn,
                min=100,
                max=100,
                increment=0,
                encoding='UTF-8'
            )
            get_logger().success('Connected!')
        except Exception as e:
            get_logger().error('Connecting: ' + str(e))

    def makeDictFactory(self, cursor):
        columnNames = [d[0] for d in cursor.description]
        def createRow(*args):
            return dict(zip(columnNames, args))
        return createRow

    def execute_query(self, query: str, params: dict={}):
        try:
            connection = self.pool.acquire()
            
            with connection.cursor() as cursor:
                cursor.execute(query, params)
                cursor.rowfactory = self.makeDictFactory(cursor)
                data = cursor.fetchall()
                get_logger().info(data)
                return data
        except Exception as e:
            get_logger().error('Executing query: ' + str(e))
            return False

    def execute_sql_file(self, file_name:str, params: dict={}):
        try:
            with open('./sql/'+file_name+'.sql') as file:
                return self.execute_query(file.read().replace('\n', ' '), params)
        except Exception as e:
            get_logger().error('Read file: ' + str(e))
            return False




