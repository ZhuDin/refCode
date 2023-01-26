import os


print('setenv...', end='')
print(os.environ['TEMP'])

os.system('python echoenv.py')
