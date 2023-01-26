class Solution:

    def canConstruct(self, ransomNote, magazine):
        arr = [0] * 26
        for c in magazine:
            arr[ord(c) - ord('a')] += 1
        for c in ransomNote:
            arr[ord(c) - ord('a')] -= 1
            if arr[ord(c) - ord('a')] < 0:
                return False
        return True

if __name__ == '__main__':
    s = Solution()
    ransomNote = 'aa'
    magazine = 'aab'
    print('please enter ransomNote:', ransomNote)
    print('please enter magazine:', magazine)
    print('output: ', s.canConstruct(ransomNote, magazine))
    