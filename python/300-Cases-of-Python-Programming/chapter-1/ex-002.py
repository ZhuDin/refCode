class Solution:

    def mergeSortedArray(self, A, B):
        # 参数A, B都是有序数组
        i, j = 0, 0
        C = []
        while i < len(A) and j < len(B):
            if A[i] < B[j]:
                C.append(A[i])
                i += 1
            else:
                C.append(B[j])
                j += 1
        while i < len(A):
            C.append(A[i])
            i += 1
        while j < len(B):
            C.append(B[j])
            j += 1
        return C


if __name__ == '__main__':
    A = [1, 4]
    B = [1, 2, 3]
    D = [1, 2, 3, 4]
    E = [2, 4, 5, 6]
    solution = Solution()
    print('array: ', A, ' ', B)
    print('output: ', solution.mergeSortedArray(A, B))
    print('array: ', D, ' ', E)
    print('output: ', solution.mergeSortedArray(D, E))
