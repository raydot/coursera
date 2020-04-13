def change(number):
    options[number % 10](number)


def zero(number):
    arr = []
    while (sum(arr) < number):
        arr.append(5)
    return(arr)


def one(number):
    arr = [7, 7, 7]
    while (sum(arr) < number):
        arr.append(5)
    return(arr)


def two(number):
    arr = [7]
    while (sum(arr) < number):
        arr.append(5)
    return(arr)


def three(number):
    arr = [7, 7, 7, 7]
    while (sum(arr) < number):
        arr.append(5)
    return(arr)


def four(number):
    arr = [7, 7]
    while (sum(arr) < number):
        arr.append(5)
    return(arr)


# map the mods to the function blocks
options = {
    0: zero,
    1: one,
    2: two,
    3: three,
    4: four,
    5: zero,
    6: one,
    7: two,
    8: three,
    9: four
}

# refactoring:
# better way to set initial array (tile)
# better, non-repetitive way to do while (function)
# better way to print the output (unnecessary)
