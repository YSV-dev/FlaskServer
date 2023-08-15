from flask_classful import FlaskView, route

from classes.routes.pages.admin.ban_user_page import BanUserPage
from classes.routes.pages.admin.main_admin_page import AdminUserPage


class AdminRoute(FlaskView):

    def index(self):
        return AdminUserPage().render_page()

    @route('/users/', methods=['GET', 'POST'])
    def users(self):
        return AdminUserPage().render_page()

    @route('/ban/<user_id>', methods=['GET'])
    def users(self, user_id):
        return BanUserPage(user_id).render_page()
