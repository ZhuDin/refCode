class Solution:

    def nextGreaterElement(self, nums1, nums2):
        answer = {}
        stack = []
        for x in nums2:
            while stack and stack[-1] < x:
                answer[stack[-1]] = x
                del stack[-1]
            stack.append(x)
        for x in stack:
            answer[x] = -1
        return [answer[x] for x in nums1]

if __name__ == '__main__':
    s = Solution()
    nums1 = [4, 1, 2]
    nums2 = [1, 3, 4, 2]
    print('enter 1: ', nums1)
    print('enter 2: ', nums2)
    print('enter: ', s.nextGreaterElement(nums1, nums2))
    