class Node:
  def __init__(self, data=None):
    self.data = data
    self.next = None
    
class Stack:
  def __init__(self):
    self.top = None
    self.size = 0
    
  def push(self, data):
    node = Node(data)
    if self.top:
      node.next = self.top
      self.top = node
    else:
      self.top = node
    self.size += 1
  
  def pop(self):
    if self.top:
      data = self.top.data
      self.size -= 1
      if self.top.next:
        self.top = self.top.next
      else:
        self.top = None
      return data
    else:
      return None
    
  def peek(self):
    if self.top:
      return self.top.data
    else:
      return None
    
def check_brackets(statement):
  stack = Stack()
  for ch in statement:
    # this code is a hot mess
    print(ch)
    if ch in ('{', '[', '('):
      stack.push(ch)
    elif ch in ('}', ']', ')'):
      last = stack.pop()
      # print(f"last: {last}")

      if last == '{' and ch == '}':
        continue
      elif last == '[' and ch == ']':
        continue
      elif last == '(' and ch == ')':
        continue
    # else:
    #   return False
    
  if stack.size > 0:
    return False
  else:
    return True

    
# This doesn't work but I get the idea.  
    
sl = ( 
  "[hello]",
  "{(foo)(bar)}[hello](((this)is)a)test", 
  "{(foo)(bar)}[hello](((this)is)a test", 
  "{(foo)(bar)}[hello](((this)is)a)test))" 
) 

print(sl)

for s in sl: 
   m = check_brackets(s) 
   print("{}: {}".format(s, m))
   
'''
[hello]: True
{
{(foo)(bar)}[hello](((this)is)a)test: True
{
{(foo)(bar)}[hello](((this)is)a test: False
{
{(foo)(bar)}[hello](((this)is)a)test)): False
'''
  