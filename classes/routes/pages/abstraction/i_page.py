from classes.BD_connection import IDBCon


class IPage(object):
    def __init__(self):
        self.bd_con = None
        self.html_file = None

    def set_db_connection(self, bd_con: IDBCon):
        self.bd_con = bd_con

    def set_html_file(self, path: str):
        self.html_file = path

    def render_page(self):
        return "<h1>Unrendered</h1>"
