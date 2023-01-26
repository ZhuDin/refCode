class Solution:

    def findRelativeRanks(self, nums):
        score = {}
        for i in range(len(nums)):
            score[nums[i]] = i
        sortedScore = sorted(nums, reverse=True)
        answer = [0] * len(nums)
        for i in range(len(sortedScore)):
            res = str(i + 1)
            if i == 0:
                res = 'Gold Medal'
            if i == 1:
                res = 'Silver Medal'
            if i == 2:
                res = 'Bronze Medal'
            answer[score[sortedScore[i]]] = res
        return answer


if __name__ == '__main__':
    nums = [5, 4, 3, 2, 1]
    s = Solution()
    print('input: ', nums)
    print('output: ', s.findRelativeRanks(nums))