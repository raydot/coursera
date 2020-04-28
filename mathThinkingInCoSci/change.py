# Develop a Python method change(amount) that for any integer amount in the range from 24 to 1000 returns a list consisting of numbers 5 and 7 only, such that their sum is equal to amount. For example, change(28) may return [7, 7, 7, 7], while change(49) may return [7, 7, 7, 7, 7, 7, 7] or [5, 5, 5, 5, 5, 5, 5, 7, 7] or [7, 5, 5, 5, 5, 5, 5, 5, 7].

# Working idea. One 5 and then 7's until >= target.  Two 5's and then 7's until >= target, etc.

import numpy as np


def change(amount):
    amount = int(amount)
    print(amount)
    candidateArray = []
    answerFound = False
    while (answerFound == False):
        candidateArray.append(5)
        if (np.sum(candidateArray) == amount):
            return candidateArray
        while (np.sum < amount):
            candidateArray.append(7)
            if (np.sum(candidateArray) == amount):
                return candidateArray


response = change(44)
print(response)
