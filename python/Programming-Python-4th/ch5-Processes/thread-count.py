'''
time.sleep
'''
import _thread, time


def counter(myId, count):
    for i in range(count):
        time.sleep(0.5)
        print('[%s] => %s' %(myId, i))

for i in range(5):
    _thread.start_new_thread(counter, (i, 5))

time.sleep(3)
print('Main thread exiting.')