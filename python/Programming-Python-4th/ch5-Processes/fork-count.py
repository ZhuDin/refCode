''' multiprocessing '''
import os, time


def counter(count):
    for i in range(count):
        time.sleep(0.5)
        print('[%s] => %s' % (os.getpid(), i))

for i in range(5):
    pid = os.fork()
    if pid != 0:
        print('Process %d spawned' % pid)
    else:
        counter(5)
        os._exit(0)

print('Main process exiting.')