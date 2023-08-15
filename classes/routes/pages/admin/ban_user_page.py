from flask import render_template

from classes.BD_connection import DBPool
from classes.routes.pages.abstraction.i_page import IPage


class BanUserPage(IPage):
    def __init__(self, user_id: int):
        super().__init__()
        self.set_html_file('admin/ban_page.html')
        self.user_id = user_id

    def get_ban_history(self):
        return DBPool().execute_sql_file('users/get_user_ban_history.sql', {"USER_ID": str(self.user_id)})

    def render_page(self):
        return render_template(self.html_file,
                               page_name="Ban page",
                               data={
                                   "user_id": self.user_id,
                                   "ban_history": self.get_ban_history()
                               })