from flask_classful import FlaskView
from classes.routes.pages.main.main_page import MainPage


class MainRoute(FlaskView):
    def index(self):
        return MainPage().render_page()

    def analitics(self):
        return "<h1>Admin analitics</h1>"
