# From Hands on Data Structures on O'Reilly.com
# Generic Node:
class Node: 
  def __init__ (self, data=None):
    self.data = data
    self.next = None # endpoint
    
  def __str__ (self):
    return (self.data)
    
# LINKED LISTS    
# first idea


class SinglyLinkedList:
  def __init__(self):
    self.head = None
    self.tail = None
    self.size = 0
    
  def append(self, data):
    # Encapsulate the data in a Node
    node = Node(data)
    # make the current head next
    # and the new head current
    if self.head:
      self.head.next = node
      self.head = node
    else:
      self.tail = node
      self.head = node
    # capturing it on append changes running time
    # from O(n) to O(1)
    self.size += 1
    
  # Instead of exposing the node class to the user
  # Lets create a method that returns a generator.
  # Usage: for word in words.iter():
  #            print(word)
  def iter(self):
    current = self.tail
    while current:
      val = current.data
      current = current.next
      yield val
      
  # O(n) run time
  def delete(self, data):
    current = self.tail
    prev = self.tail
    while current:
      if current.data == data:
        if current == self.tail:
          self.tail = current.next
        else:
          prev.next = current.next
        self.count -= 1
        return
      prev = current
      current = current.next

  def search(self, data):
    for node in self.iter():
      if data == node:
        return True
    return False
  
  def clear(self):
    # Clear the entire list
    self.tail = None
    self.head = None
    self.size = 0
  
  
# implementation
words = SinglyLinkedList()
words.append('milk')
words.append('ham')
words.append('eggs')

    
    # 1st approach
    # traverse the entire list to find where
    # to append.  Not desirable!  
    # Modification goes from O(n) to O(1)
    # if self.tail == None:
    #   self.tail = node
    # else:
    #   current = self.tail

    #   while current.next:
    #     current = current.next
    #   current.next = node
  
  # initial attempt at returning list size
  # but much like SLL before adding append()
  # this runs in O(n)  If we add a running count
  # then it runs in O(1)
  # def size(self):
  #   count = 0
  #   current = self.tail
  #   while current:
  #     count += 1
  #     current = current.next
  #   return count
  
    
  

    
# n1 = Node('eggs')
# n2 = Node('bacon')
# n3 = Node('milk')
# n1.next = n2
# n2.next = n3
# current = n1
# while current:
#   print(current.data)
#   current = current.next