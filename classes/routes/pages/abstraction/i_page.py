from classes.BD_connection import I_BD_con

class I_Page(object):
    def __init__(self):
        self.bd_con = None
        self.html_file = None

    def set_db_connection(bd_con: I_BD_con):
        self.bd_con = bd_con

    def set_html_file(self, path: str):
        self.html_file = path

    def render_page(self):
        return "<h1>Unrendered</h1>"
