# https://www.geeksforgeeks.org/introduction-to-linked-list-data-structure-and-algorithm-tutorial/

# Node class
class Node:
  # Constructor
  def __init__(self, data):
    self.data = data # assign data
    self.next = None # initialize next as null
    
  def __repr__(self):
    return f'next: {self.next} | data: {self.data}'
    

# Linked List class

class LinkedList: 
  # Constructors
  def __init__(self):
    self.head = None
    
  def __repr__(self):
     return f'__repr__ from LinkedList: ${self.head}'
    
  # Insert new node at beginning
  def push(self, new_data):
    
    # Create new node and insert data
    new_node = Node(new_data)
    
    new_node.next = self.head

    self.head = new_node
    
  # Insert new node after given node
  def insertAfter(self, prev_node, new_data):
    if prev_node is None:
      print ("The given previous node must be in the list")
      return
    
    # Create new node and insert data
    new_node = Node(new_data)
    
    # Point the new node's next to the previous node
    new_node.next = prev_node.next
    
    # Make the previous_node point to new_node
    prev_node.next = new_node 
    
  # Insert new node at end of list
  def append(self, new_data):
    
    # Create new node and insert data:
    new_node = Node(new_data)
    
    # If the list is empty, make the new node the head
    if self.head is None:
      self.head = new_node
      return
    
    # else, traverse until the last node
    last = self.head
    while (last.next):
      last = last.next

    # Change the next of the last node
    last.next = new_node
    
  # Walk the list and return the data
  def traverse(self):
    index = self.head
    if index is None:
      print("Empty list!")
      return


    while(index.next):
      print(f"{self.data}")
      index = index.next

myList = LinkedList()
print(repr(myList))

  
