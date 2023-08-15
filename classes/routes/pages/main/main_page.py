from classes.routes.pages.abstraction.i_page import I_Page
from flask import render_template

class MainPage(I_Page):
    def __init__(self):
        self.set_html_file('main/main_page.html')

    def render_page(self):
        return render_template(self.html_file, page_name="Главная страница")

    
