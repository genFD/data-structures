/*

HASH MAPS: CONCEPTUAL

****What is hash maps ?
A key-value storage that uses an array and a hashing function to save and retrieve values.

****Benefits of using them?
when it comes to retrieving stored data they're one of the most efficient data structures 
	why?
  because the key associated with every value added allows for faster retrieval later on. 

Useful for what kind of scenario?
	come across a coding problem that requires you to store and retrieve data

****What's a map?

Mathematicians would call a “map”, for instance a table where for a State on the left corresponds to a specific State Flower given on the right

****Two requirements for a relationship to be call a map:
1 - relate two pieces of info in a table for example
2 - every key (input) that is used can only be the key to a single value (output), for example every musician (key) can only have one state that they were born in (value). There can’t be more than one output for a given input.
  
  
***How can we implement this kind of relationship?
- With, an array
	why?
  because Array uses indices to keep track of value in memory. so if we turn each key(input) to an 		index, we would be able to create a map.
  ex: map friends to their atrological sign. we would take name Joan turn it to a number X. At x index in a array we can associate the value Libra.
  
  ****How do we turn a name into a number?
 	- using a hash function. 
  	A function that takes some input and returns a number. 
    hash function returns an array index as output.
    
    *****What's the implementation detail of hash function?
    two things to know:
    - needs to know the size of array to avoid returning index bigger than array length
    - compute a value called hash value using some scoring metric,  then takes that hash value mod 			the size of the array
    this will guarantee index that fits into the underlying array

**** What are the three ingredients for hash maps?

Three ingredients for hash maps:
-  First, we need some sort of associated data that we’re hoping to preserve.

- Second, we need an array of a fixed size to insert our data into

- Lastly we need a hash function that translates the keys into indexes.
  
   - Albums ---> Year were produced in
   - array of size 4
   - hash function : # of lowercase a + # lowercase e % 4
   
    ------------------------------------------
    |	  0     |    1    |    2     |     3   |
    ------------------------------------------
    | album a | album b |  album c | album d |
    ------------------------------------------
*** what is hash collision?
		- when hash function returns the same hash for two different keys.
    	ex: 
      - garlic and onion hashes to 2 
      - 2%4 gives index 2
      - what would index 2 contains?

*** what are strategies to resolve hash collision?
Separate chaining, where each array index points to a different data structure.
Open addressing, where a collision triggers a probing sequence to find where 
to store the value for a given key

		1.. separate chaining
    		- idea is to update the underlying data structure. 
        ex: Instead of an array of values that are mapped to by hashes, 
        it could be an array of linked lists
    - the flow would be 
    		--- take the key and transform it into a hash code
        --- The hash code is then converted into an index using the modulus operation
        --- if collision, a new linked list is created with the value and the key as the first element of the linked list
        --- if a linked list already exists at the address, append the value and the key to the linked list given.
ex:
							    steve		 bill      marc
             |     |         |
			|0| --> Jobs -> Gates -> Zucker
      
               Musk    Ravi
              	|       |
      |1| --> Elon -> Naval

if two values return the same index, a linked list is created at that index and is appended anytime there's a collision

	- Read flow would be:
    ---find the appropriate index for that hash
    ---begin iterating through our linked list.
    ---For each element, if the saved key is the same as our key, return the value.
    ---Otherwise, continue iterating through the list comparing the keys 
    	saved in that list with our key
 
 
 2..Open Addressing: Linear probing
  - The idea is if there's a collision, we continue looking for new array indices in a fixed sequence until an empty index is found
  ex:
  ---- value a and value have same index
  ---- value a saved at index x
  ---- value b saved at index x + 1 if empty
  
  - Read flow would be
  ----read value b at index x
  --- if there's a value and value sitting at index x is different, continue to next index or jump five steps instead (depending on how it's implemented)

*** What is clustering?
- it's what happens when single hash collision causes additional hash collisions
ex:
--- because of hash collision you assign value a at index x + 1
--- now you have value b that hashes to x + 1 
--- value b will collide with value a that doesnt even belong to that index anyway


***Recipe for saving to a hash table:
- Take the key and plug it into the hash function, getting the hash code.
- Modulo that hash code by the length of the underlying array, getting an array index.
- Check if the array at that index is empty, if so, save the value (and the key) there.
- If the array is full at that index continue to the next possible position depending on your collision strategy.

***Recipe for retrieving from a hash table:
- Take the key and plug it into the hash function, getting the hash code.
- Modulo that hash code by the length of the underlying array, getting an array index.
- Check if the array at that index has contents, if so, check the key saved there.
- If the key matches the one you're looking for, return the value.
- If the keys don't match, continue to the next position depending on your collision strategy.



*/
