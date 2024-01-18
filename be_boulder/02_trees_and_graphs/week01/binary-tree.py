# Hands on Data Structures in a Nutshell

# Node is a little more involved than with lists:
class Node:
  def __init__(self, data):
    self.data = data
    self.right_child = None
    self.left_child = None

  
''' sample use
>>> n1 = Node("root")
>>> n2 = Node("left child")
>>> n3 = Node("right child")
>>> n4 = Node("left grandchild")
>>> n1.left_child = n2
>>> n1.right_child = n3
>>> n2.left_child = n4
>>> current = n1
>>> while current:
...     print(current.data)
...     current = current.left_child
... 
root
left child
left grandchild
'''