# Hashtables
<!-- Short summary or background information -->
A simple implementation of a hashtable in JavaScript.

## Challenge
<!-- Description of the challenge -->
The challenge was to implement a working hashtable that can be dynamic in size and be able to handle collisions when adding to the hashtable. Collisions are when two different keys hash to the same index of the hashtable.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
For this hashtable implementation, I created a class for the hashtable that is used to creat the data structure iteself. Being a class, I was easily able to add methods onto the class for easy manipulation of each instance of the hashtable. The horizontal storage structure of the hashtable is a flat array. Each index of the array, or bucket, uses a linked list as the vertical storage. I chose a linked list so that I could more easily handle collisions instead of an approach like linear probing, which I don't fully understand. So a linked list for each bucket of the hashtable was a simple and consistent way to store data at each index.

Both the efficiency and the benefit of a hashtable for storing data is that it's typically an O(1) time complexity. The only execption would be in buckets that do have a collision, in which case retrieving a value from the hashtable would then be a worst case of O(n). Ideally the hashtable was given a large enough capacity that these collisions would be few and far between, so the linked list that would need to be traversed in the case of a collision would be relatively short. That being said...

Big O Notation:
- Time: 
  - O(1) for adding a key/value pair to the hashtable.
  - O(n) for retrieving a value, though in most cases (n) should be very minimal.
- Space:
  - O(size) where size is the preset size of the hashtable. This only applies to number of buckets.
  - O(n) for adding to a bucket since the bucket is a linked list with no limit to size. Again, (n) should be very minimal. 

## API
<!-- Description of each method publicly available in each of your hashtable -->

Methods used in this hashtable implementation:

- `_hash(key)`: This method takes in a key and runs it though a hashing algorithm and returns an index number that is within the range of the hashtable's size. This should always return the same hash given the same key. 

- `_set(key, value)`: This method is used to add data to the hashtable. The key is ran through the hash function which gives the index positon to add to. Then, it checks to see if that index is empty or not. If it is, it creates a new linked list and adds the key value pair to the head node of the linked list. If there is already a linked list in place, this method will traverse the linked list until it finds the end and then append the key value pair as a node to the end of the linked list.

- `_get(key)`: This methof uses the key to find an index position, and then traverse the linked list at that index to search for the key and then return the value associated with the key.

- `_contains(key)`: Similar to the `_get` method, it uses the key to find the index and then check to see if the key exists. If it does, returns true. Otherwise, returns false. 

DISCLAIMER: There is currently no validation in place to handle duplicate keys, so if two values existed with the same key, both `_get` and `_contains` might not work as intended. Future implementations will have validation to either prevent duplicate keys or somehow handle having different values sharing the same key.