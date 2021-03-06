# Week 6 Reading: Even Permutations

# In Python arrays are indexed from 0, so a permutation p of n objects is
# represented by a sequence:
# p[0],...,p[n,1]
# ...that contains numbers 0, 1, 2,...,n-1 with each number appearing exactly once.


def is_permutation(p):
    return (set(p) == set(range(len(p))))


def is_even_permutation(p):
    print(len(p))
    if (is_permutation(p) and (len(p) % 2) == 0):
        return True
    else:
        return False


# print(is_permutation([0]))  # true
# print(is_permutation([0, 2, 1]))  # true
# print(is_permutation([1, 2, 3]))  # false
# print(is_permutation([0, 1, 2, 3]))  # true
# print(is_permutation([1, 2, 3, 4]))  # false
# print(is_permutation([0, 1, 2, 3, 4]))  # true
# print(is_permutation([0, 0, 0]))  # false
# print(is_permutation([0, 1]))  # true
# print(is_permutation([-1, 2, 4, 5, 6]))  # false

# now write is_even_permutation(p)
# which assumes that p is a permutation of some positive length.
# The function should return True for even permutations and False for odd ones.

print(is_even_permutation([0]))
print(is_even_permutation([0, 1, 2]))
print(is_even_permutation([0, 1, 2, 3]))
print(is_even_permutation([0, 3, 2, 4, 5, 6, 7, 1, 9, 8])
