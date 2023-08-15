from flask import session, redirect, request
from flask_classful import FlaskView, route

from classes.modules.email_sender import send_new_password
from classes.routes.pages.main.account_settings_page import AccountSettings
from classes.routes.pages.main.auth_page import AuthPage
from classes.routes.pages.main.code_page import CodePage
from classes.routes.pages.main.deposit_page import DepositPage
from classes.routes.pages.main.invest_page import InvestPage
from classes.routes.pages.main.main_page import MainPage
from classes.routes.pages.main.payment_page import PaymentPage
from classes.routes.pages.main.register_page import RegPage
from classes.routes.pages.main.reset_password_page import ResetPasswordPage
from classes.routes.pages.main.user_cabinet import UserCabinet
from classes.routes.pages.main.withdraw_page import WithdrawPage
from classes.utils.get_plans import get_plans
from classes.utils.get_referrals_cnt import get_referrals
from classes.utils.get_userinfo_api import *
from classes.utils.hash_generator import generate_hash
from classes.utils.other import generate_random_string


class MainRoute(FlaskView):
    def index(self):
        if session.get("name") is not None and session.get("email") is not None:
            user_id = get_user_id(session.get("email"))
            if user_id != "error":
                return MainPage(session.get("name")).render_page()

        return MainPage("none").render_page()

    def analitics(self):
        return "<h1>Admin analitics</h1>"
