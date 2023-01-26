'''mutexes'''

import _thread


stdoutmutex = _thread.allocate_lock()
exitmutexes = [_thread.allocate_lock() for i in range(10)]

def counter(myId, count):
    for i in range(count):
        stdoutmutex.acquire()
        print('[%x] => %s' % (myId, i))
        stdoutmutex.release()
    exitmutexes[myId].acquire()

for i in range(10):
    _thread.start_new_thread(counter, (i, 100))