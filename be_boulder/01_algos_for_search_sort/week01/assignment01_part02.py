# assignment01_part02.py

# PART 1
def integerCubeRootHelper(n, left, right):
    def cube(x): return x * x * x  # anonymous function to cube a number
    print("n:", n, "left:", left, "right:", right)
    print("n:", n, "cube(left):", cube(left), "cube(right):", cube(right))
    assert(n >= 1)
    assert(left < right)
    assert(left >= 0)
    assert(right < n)
    assert(cube(left) < n), f'{left}, {right}'
    assert(cube(right) > n), f'{left}, {right}'
    # your code here
    # going to have to move left & right while maintaining the invariant until the answer is found
    # left and right are initially set to 0 and n-1 respectively
    if cube(left) <= n and cube(left+1) > n:
        print('returning', left)
        return left
    else:
        return integerCubeRootHelper(n, left + 1, left + 2)

# PART 2
# Write down the main function


def integerCubeRoot(n):
    assert(n > 0)
    if (n == 1):
        return 1
    if (n == 2):
        return 1
    foo = integerCubeRootHelper(n, 0, n-1)
    return foo


# PART 3
assert(integerCubeRoot(1) == 1)
assert(integerCubeRoot(2) == 1)
assert(integerCubeRoot(4) == 1)
assert(integerCubeRoot(7) == 1)
assert(integerCubeRoot(8) == 2)
assert(integerCubeRoot(20) == 2)
assert(integerCubeRoot(26) == 2)
for j in range(27, 64):
    assert(integerCubeRoot(j) == 3)
for j in range(64, 125):
    assert(integerCubeRoot(j) == 4)
for j in range(125, 216):
    assert(integerCubeRoot(j) == 5)
for j in range(216, 343):
    assert(integerCubeRoot(j) == 6)
for j in range(343, 512):
    assert(integerCubeRoot(j) == 7)
print('Congrats: All tests passed! (10 points)')
