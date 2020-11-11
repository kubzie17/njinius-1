---
id: array
title: Arrays
description: Software Track
---


## Arrays
Arrays are used to store several values in one variable. If you are familiar with python, you may be aware that python does not have in-built support for Arrays but instead makes use of Lists. Therefore in this instance, we will be using Lists as Arrays.  

This is an example of an array containing different foods  

    Foods = [‘pasta’, ‘corn’, ‘potato’]  
    
And if you were to run print(foods) the result would be the following;  

    [‘pasta’, ‘corn’, ‘potato’]  

This is especially useful because you can assign all these values to one variable, meaning you do have to define a variable for each item or value in the list for instance if you had 100 foods.
Also, if you would like to access the different values in the Array (Array Element), you can use index numbers, for instance.

    Foods = [‘pasta’, ‘corn’, ‘potato’]
    X=Foods[2]
    print[x]

Keep in mind that zero is always the first item in your list  

    Result 
    potato

Alternatively, you can also modify the values in your array using this method but in reverse, for instance.

    Foods = [‘pasta’, ‘corn’, ‘potato’]
    Foods[1]= ‘chicken’
    print[Foods]  

    Result
    [‘pasta’, ‘chicken’, ‘potato’]

There are several ways of using an array, for instance, you can check its length or number of variables in you array by __x = len(Foods)__, and you also check the what items are in you array using a loop  as seen below;  

    Foods = [‘pasta’, ‘corn’, ‘potato’]
    for x in Foods: 
        print(x)  

    Result 
    pasta  
    chicken  
    potato

Finally, you can also add and remove values from an array. You can do this using the following functions e.g

To add __Foods.append (‘Curry’)__  

To remove __Foods.pop(‘chicken’)__

## Array Methods
Python has a set of built-in methods that you can use on lists/arrays.

|Method   |Description
|:-------:|:----------------------------------------------------------------------------:| 
|	       |                                                                             |
| append() | Adds an element at the end of the list                                      |
|	       |                                                                             |
| clear()  |Removes all the elements from the list                                       |
|          | 	                                                                         |
|  copy()  | Returns a copy of the list                                                  |
|          |	                                                                         |
|  count() |  Returns the number of elements with the specified value                    |
|	       |                                                                              |
|  extend()|  Add the elements of a list (or any iterable), to the end of the current list|
|	       |                                                                              |
|  index() |  Returns the index of the first element with the specified value             |
|	       |                                                                              |
|  insert()|  Adds an element at the specified position                                   |
|	       |                                                                              |
|  pop()   |  Removes the element at the specified position                               |
|	       |                                                                              |
|  remove()|  Removes the first item with the specified value                             |
|	       |                                                                              |
| reverse()| Reverses the order of the list                                               |
|	       |                                                                              |
|  sort()  | Sorts the list                                                               |
	 
 