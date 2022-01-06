# ∃ a six-digit number that starts with 100 and is divisible by 9,127

# x = 0
for y in range(0, 999):
    if (y < 10): candidate = '10000' + str(y)
    elif(y < 100): candidate = '1000' + str(y)
    else: candidate = '100' + str(y)

    # print(candidate)
    if (int(candidate) % 9127 == 0): print(candidate)

