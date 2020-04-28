def change(amount):

    if (amount % 5 == 0):
        arr = []

    if (amount % 5 == 1):
        arr = [7, 7, 7]

    if (amount % 5 == 2):
        arr = [7]

    if (amount % 5 == 3):
        arr = [7, 7, 7, 7]

    if (amount % 5 == 4):
        arr = [7, 7]

    while (sum(arr) < amount):
        arr.append(5)

    # print("hello", arr)
    return(arr)


change(99)
# refactoring:
# better way to set initial array (tile)
# better, non-repetitive way to do while (function)
# better way to print the output (unnecessary)
