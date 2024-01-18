class Node(object):
  def __init__ (self, data=None, next=None, prev=None):
    self.data = data
    self.next = next
    self.prev = prev
    
class DoublyLinkedList(object):
  def __init__(self):    
    self.head = None
    self.tail = None
    self.count = 0
    
  def append(self, data):
    # Append an item to the list.
    
    new_node = Node(data, None, None)
    if self.head is None: # add node to empty list, point and and tail to it
      self.head = new_node
      self.tail = self.head
    else: # list is not empty, insert node before tail
      new_node.prev = self.tail
      self.tail.next = new_node
      self.tail = new_node
    
    self.count += 1
      
  # Make it iterable!  
  def iter(self):
    current = self.head
    while current:
      val = current.data
      current = current.next
      yield val
      
  # Back it up
  def iter_back(self):
    current = self.tail
    while current:
      val = current.data
      current = current.prev
      yield val
  
  """ DELETE:  
  Delete has four scenarios for a given search item:
    * item is not found in list
    * item is at head of list
    * item is at tail of list
    * item is in middle of list
  """   
    
  def delete(self, data):
    current = self.head
    node_deleted = False
    if current is None: # Item not found!
      node_deleted = False
    
    elif current.data == data: # Item at start of list
      self.head = current.next
      self.head.prev = None
      node_deleted = True

    elif self.tail.data == data:
      self.tail = self.tail.prev
      self.tail.next = None
      node_deleted = True

    else:
      while current: # search for item
        if current.data == data:
          current.prev.next = current.next
          current.next.prev = current.prev
          node_deleted = True
        current = current.next

    if node_deleted:
      self.count -= 1

words = DoublyLinkedList()
words.append("planes")
words.append("trains")
words.append("automobiles")
