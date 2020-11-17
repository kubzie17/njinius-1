---
id: functionsAndParameters
title: Functions and Parameters
description: Software Track
---


Functions and Parameters
In python, a function is a block of code which runs when it is called. This tends to be the case in most programming languages. We define the function utilizing __def__; besides, parameters/arguments go into a function to return a result when the function is executed.  
For example;  

    def function_name(parameters):
        """docstring"""
        statement(s)  

To call your function after you have defined it, state your function_name and add parenthesis as shown __my_function()__ Side note: it is good practice to document your code, explain in a few words what your function does.  

Additionally, arguments or parameters can be specified after the function name to change the behaviours of the function. One can add as many arguments as they want as long as it makes sense and the function still works for instance  

    def my_function(fname):
            print(fname + " Blue")
    my_function("Red")  

Returning the following result  

    Red Blue  

Please do not get too confused by the terms Argument or Parameters because they can be used for the same thing. A parameter is the variable listed inside the parentheses in the function definition. An argument is a value that is sent to the function when it is called. You will only get errors if you do not adhere to the rules you have set for your function,  

For instance; if your function expects 1 parameter, then you must make sure to call your function with 1 parameter.  

    def my_function(oneparameter):
    print(oneparameter )
    my_function("one", "two")  

You may ask what if I do not know how many arguments I require for this function. In this case, you can use *args (arbitrary Arguments) this is done by inserting a * before your parameter as shown __*oneparameter__

You can also make use of the default parameter value in many different ways, for instance;  

    def my_function(city = "Cambridge"):
        print("I was born in " + city)

    my_function("Ely")
    my_function("Kent")
    my_function()
    my_function("London")  

This function will produce the following result;  

    I was born in Ely 
    I was born in Kent 
    I was born in Cambridge 
    I was born in London  

Additionally, you can also pass a list as an argument; for instance, the data type can be a dictionary, list, sting etc. The data type you use will remain the same when it is passed through your function, see below;  

    def my_function(animal):
        for x in animals:
            print(x)

    birds = ["eagle", "flamingo", "hawk"]
    my_function(birds)  

This function will return;  

    eagle 
    flamingo
    hawk  

They are many ways to use a function; one of these ways would be to return a value. You can return a value by using the return statement; let’s try some math for example,  

    def my_function(x):
        return 3 * x
    print(my_function(4))
    print(my_function(10))
    print(my_function(20))  

This function will return;  

    12 
    30 
    60

Finally, although Functions do not tend to be empty if some mysterious coding reason your function is empty, or if you have written an empty function to avoid errors when running you can add a __pass__ statement as seen below  

    def myfunction():
        pass