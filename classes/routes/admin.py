from flask_classful import FlaskView


class AdminRoute(FlaskView):
    def index(self):
        return "<h1>Admin page</h1>"

    def analitics(self):
        return "<h1>Admin analitics</h1>"
