class Solution:
    def dotProduct(self, A, B):
        if len(A) == 0 or len(B) == 0 or len(A) != len(B):
            return -1
        ans = 0
        for i in range(len(A)):
            ans += A[i] * B[i]
        return ans

if __name__ == '__main__':
    A = [1, 1, 1]
    B = [2, 2, 2]
    solution = Solution()
    print('A:', A)
    print('B:', B)
    print('dotProduct A,B:', solution.dotProduct(A, B))
    