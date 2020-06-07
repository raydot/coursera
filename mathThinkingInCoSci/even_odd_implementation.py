def sorting(someArray):
    # sorting a[1]...a[n]
    a = someArray
    n = len(someArray)
    sign = 0  # sign = # of transpositions % 2
    s = 0  # first s elements are in the right place
    while(s < n):  # while number of elements in the right place is less than total elements
        u = s + 1
        t = u  # a[t] is minimal along a[s+1]...a[u]
        while (u < n):
            u = u + 1
            if (a[u] < a[t]):  # exchange!
                t = u
        # a[t] is minimal among a[s+1]...a[n] (it's kept at the minimum (left) end)
        # u == n at this point, go again
        tmp = a[s+1]
        a[s+1] = a[t]
        a[t] = tmp
        # flips the sign back and forth between 0 and 1 to keep track of even or odd
        sign = 1 - sign
    # s < n list is not sorted, go again

    return a


print("sorting array [10, 1, 2, 3, 4, 5, 6, 7, 8, 9]")
print("sorted:", sorting([10, 1, 2, 3, 4, 5, 6, 7, 8, 9]))

"""
Notes:
Implementation of basic sorting algorithm
s counts number of elements that are in the correct place.  
At the end of the sort, we want n elements to be in the right place.
sign just flips between 0 and 1 so we can keep track of the permutation being odd or even



"""
