from classes.routes.pages.abstraction.i_page import IPage
from flask import render_template
from classes.routes.pages.main.user_cabinet import get_avatar


class MainPage(IPage):
    def __init__(self, user_name: str):
        super().__init__()
        self.set_html_file('main/main_page.html')
        self.user_name = user_name

    def render_page(self):
        if self.user_name != "none":
            return render_template(self.html_file, page_name="BitMake | Main",
                                   data={"user_name": self.user_name,
                                         "profile_picture": get_avatar()})

        return render_template(self.html_file, page_name="Main", data={"user_name": "",
                                                                                 "profile_picture": ""})
