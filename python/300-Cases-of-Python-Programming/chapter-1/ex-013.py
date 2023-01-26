class Solution:
    def getRuntime(self, a):
        map = {}
        for i in a:
            count = 0
            while not i[count] == ' ':
                count = count + 1
            fun = i[0 : count]
            if i[count + 2] == 'n':
                count = count + 7
                v = int(i[count : len(i)])
                if fun in map.keys():
                    map[fun] = v - map[fun]
                else:
                    map[fun] = v
            else:
                count = count + 6
                v = int(i[count : len(i)])
                map[fun] = v - map[fun]
        res = []
        for i in map:
            res.append(i)
        res.sort()
        for i in range(0, len(res)):
            res[i] = res[i] + '|' + str(map[res[i]])
        return res

if __name__ == '__main__':
    s = ["F1 Enter 10", "F2 Enter 18", "F2 Exit 19", "F1 Exit 20"]
    solution = Solution()
    print('enter runtime:', s)
    print('getRuntme:', solution.getRuntime(s))