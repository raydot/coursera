sum = 0.00000

for i in range(1, 20000000):
    sum += 1 / (i * (i + 1))
    # print(sum)

print("total", sum)
