from flask_classful import FlaskView


class APIRoute(FlaskView):
    def users(self):
        return "users: [{login: '', user_data: ''}]"

    def currancy(self):
        return "some currancy data"
