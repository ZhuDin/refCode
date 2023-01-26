class Solution:
    
    def rotateString(self, s, offset):
        if len(s) > 0:
            offset = offset % len(s)
        temp = (s + s)[len(s) - offset : 2 * len(s) - offset]
        for i in range(len(temp)):
            s[i] = temp[i]

        
if __name__ == '__main__':
    s = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
    temp = s[:]
    offset = 3
    solution = Solution()
    solution.rotateString(s, offset)
    print('input: s = ', temp, ' ', 'offset = ', offset)
    print('output: ', s)
