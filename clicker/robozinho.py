from operator import contains
import pyautogui
from time import sleep

def click(x, y):
    pyautogui.moveTo(x, y)

def check_screen():
    button_set = pyautogui.locateOnScreen('aceitar.png' , confidence = 0.7)
    if button_set != None:
            click(button_set.left, button_set.top)
            return True
    return False
def main():
    while True:
        check_screen()
        sleep(6)

main()