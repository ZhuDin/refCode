class Solution:

    def binarySearch(self, nums, target):
        return self.search(nums, 0, len(nums) - 1, target)

    def search(self, nums, start, end, target):
        if start > end:
            return -1
        mid = (start + end) // 2
        if nums[mid] > target:
            return self.search(nums, start, mid, target)
        if nums[mid] == target:
            return mid
        if nums[mid] < target:
            return self.search(nums, mid, end, target)


if __name__ == '__main__':
    my_solution = Solution()
    nums = [1, 2, 3, 4, 5, 6]
    target = 3
    targetIndex = my_solution.binarySearch(nums, target)
    print('input: ', nums, ' ', 'target = ', target)
    print('output: ', targetIndex)
    