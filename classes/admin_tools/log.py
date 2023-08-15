from datetime import datetime
from termcolor import colored
from collections import deque

from classes.base.singleton import MetaSingleton


class Log(metaclass=MetaSingleton):
    def __init__(self, log_level: int = 0, log_output_level: int = 0):
        self.log_level = log_level
        self.log_output_level = log_output_level
        self.log_buffer = deque()
        self.subscribers = []

    def __print(self, prefix: str, msg: str, color: str, log_level: int = 0, log_print_level: int = 0):
        if self.log_level >= log_level:
            now = datetime.now()
            if len(self.log_buffer) > 1000:
                self.log_buffer.popleft()
            output_data = {'tag': prefix, 'time': now.strftime("%d.%m.%Y %H:%M:%S"), 'msg': msg, 'color': color}
            self.log_buffer.append(output_data)

            for sub in self.subscribers:
                sub(output_data)

            print('{:<20} {:<22} {}'.format(f'[{colored(prefix, color)}]', f'[{now.strftime("%d.%m.%Y %H:%M:%S")}] ',
                                            colored(msg, color))) #+ ' ' + traceback.format_exc())

    def error(self, msg: str, log_level: int = 0, log_print_level: int = 0):
        self.__print('ERROR', msg, 'red', log_level, log_print_level)

    def info(self, msg, log_level: int = 0, log_print_level: int = 0):
        self.__print('INFO', msg, 'white', log_level, log_print_level)

    def warn(self, msg, log_level: int = 0, log_print_level: int = 0):
        self.__print('WARN', msg, 'yellow', log_level, log_print_level)

    def success(self, msg, log_level: int = 0, log_print_level: int = 0):
        self.__print('SUCCESS', msg, 'green', log_level, log_print_level)

    def subscribe(self, sub_function):
        self.subscribers.append(sub_function)

    def unsubscribe(self, sub_function):
        self.subscribers.remove(sub_function)

