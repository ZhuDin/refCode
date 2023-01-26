class Solution:

    def reverseInteger(self, number):
        h = int(number / 100)
        t = int(number % 100 / 10)
        z = int(number % 10)
        return (100 * z + 10 * t + h)

if __name__ == '__main__':
    solution = Solution()
    number = 123
    ans = solution.reverseInteger(number)
    print('the number is: ', number)
    print('the reverseInterger number is: ', ans)
