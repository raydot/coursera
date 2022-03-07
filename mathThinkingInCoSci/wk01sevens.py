# Find a two-digit number that becomes 7 times smaller when the first digit is deleted
# This is an existence proof.  "There exists..."

 # ∃ a two digit number ∈ that the removal of the first digit makes the number seven times smaller

x = 10
# print("testing", 5.0 == 5)
while (len(str(x)) <= 2):
    # print(x, x*7)
    # print(x, str(x)[-1])
    # print("go:", x, x / 7, int(str(x)[-1]))
    
    # There must be a cleaner / more idiomatic way to write this
    # if x = tens and y = ones then 7y = 10x + y
    if (x / 7) == int((str(x)[-1])):
        print(x)
    x += 1

# Book gives this answer:
for n in range(10, 100):
    if n == 7 * int(str(n)[1:]):
        print(n)

# mine encapsulates the idea of a "2 digit number" better, but 
# I'm not sure that's a vast improvement.

# ∃ a positive integer ∈ that the removal of the first digit makes the number fifty-seven times smaller
# a * 10^k + X = 57 + X
x = 10
end = True
while (end):

    if (x / 57) == int((str(x)[1:])):
        print(x)
        end = False
    x += 1