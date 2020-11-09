---
id: forLoop
title: Loops
description: Software Track
---


## For loop
Often people refer this as a shorthand way to write a While Loop. However, a for loop is used to iterate over a sequence, for instance, a list, a dictionary etc. Therefore for each item in the list, dictionary or tuple we can execute a set of statements  

For example;  

    Cars = [“bmw”, “toyota”, “jeep”]
    For x  in fruits: 
        print[x]  

This allows you to print each car in the list  

Additionally, a break statement can be added by adding an __if__ for example,  

For example;  

    Cars = [“bmw”, “toyota”, “jeep”]
    For x  in fruits: 
    print[x]
        if x == “bmw”: 
            break  

This means if X = bmw the loop will print X  

This statement can also be manipulated, for example, by placing the if before print the statement will stop before it prints bmw. If you want to evolve this further place, __continue__ just under you if, above your print. This means the function will break at bmw. However, it will continue for all the other values, which means it will print everything but bmw  

You can also place the __range function ()__ into the statement. To loop through a set of code a specified number of times in this case always keep in mind that 0 is always the start value. Therefore is you have a list of four items the first item will be assigned to the value of 0. It is also possible to specify the starting value by adding a parameter: __range(2, 6)__, which means values from 2 to 6 (but not including 6). We can also add an additional number after 6, and this is called the increment  

For instance;  

    for x in range (2,6,2)
        print(x)  

This simply means print from 2 to 6, not including 6 in increments of 2
There are many other ways you can edit this loop by adding further key words to change its behaviour. For instance, an __else__ which specifies a code to be executed when the loop is finished, this is typically added at the end of the loop  

The loop can develop further, for instance, by implementing the nested loop. This is a loop within a loop; for example for each time the outer loop is executed, the inner loop is executed once.  This is how this would look;  

    description = ["small", "big", "medium"]
    cars = ["bmw", "toyota", "jeep"]
    for x in description:
    for y in cars:
            print(x, y)  

The output for this is a perfect explanation of what is happening  

    small bmw 
    small toyota
    small jeep
    big bmw 
    big toyota
    big jeep 
    medium bmw
    medium toyota
    medium jeep  

The for loop is a handy tool
We can avoid a significant amount of repetition by implementing loops. This means we do not have to repetitively call the same function, and our loop can run and recall the function until it iterates through everything we have given in, list, tuple, string etc.  


## While loops  

Python consist of two-loop commands, these are the (while loop) and the (for loop).
The first the while loop, is s command that can execute several statements as long as the conditions are true, for instance as seen;

x = 1
while x < 4:
    print(x)
    x += 1

Returning the following;  

    1
    2
    3  

In the example above we increment x to make sure that the loop does not go on forever  


We can add a little more to this by adding a break statement; this will stop the loop regardless of the condition being true as seen below  

    x = 1
    while x < 4:
            print(x)
            if x == 2:
                    break
            x += 1  

Returning the following result;  

    1
    2  

As you can see the loop stopped as soon as __x == 2__

Alternatively, you can also use a continue statement, and this will skip the 2 or continue to the next iteration, for example;  

    x = 0
    while x < 4:
            x += 1
            if x == 2:
                    continue
            print(x)  

This will return the following result, skipping the 2  

    1
    3
    4  

Lastly, you can add an else statement, and this will run a different block of code or return a certain result when the condition is no longer true for example;  

    x = 1
    while x < 4:
            print(x)
            x += 1
    else:
            print("operation complete")  

if you have done this right this should return the following result;  

    1
    2
    3
    operation complete