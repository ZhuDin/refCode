class Solution:
    def isInterval(self, intervalList, number):
        high = len(intervalList) - 1
        low = 0
        while high >= low:
            if 0 < (number - intervalList[(high + low) // 2][0]) <= 1000:
                return 'True'
            elif 1000 < number - intervalList[(high + low) // 2][0]:
                low = (high + low) // 2 + 1
            elif 0 > number - intervalList[(high + low) // 2][0]:
                high = (high + low) // 2 - 1
        return 'False'

if __name__ == '__main__':
    number = 6000
    intervalList = [[100, 1100], [1000, 2000], [5500, 6500]]
    solution = Solution()
    print('List: ', intervalList)            
    print('number: ', number)
    print('isInterval: ', solution.isInterval(intervalList, number))
    