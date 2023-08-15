from flask import render_template
from classes.BD_connection import DBPool
from classes.routes.pages.abstraction.i_page import IPage


class AdminUserPage(IPage):
    def __init__(self):
        super().__init__()
        self.set_html_file('admin/user_page.html')

    def get_user_list(self):
        return DBPool().execute_sql_file('users/get_users.sql', {"ORDER_BY": "ID", "LIMIT": 10})

    def render_page(self):
        return render_template(self.html_file, page_name="Admin panel", user_list=self.get_user_list())
