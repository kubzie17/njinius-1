---
id: exceptions
title: Exceptions
description: Software Track
---



## Python Try Except

We will start with some key terms, 
__Except__ allows error handling 
__Try__ allows you to test a block of code for errors  
__Finally__ allows code execution despite the result of the try and except blocks 
 
In python, the __try__ and __except__ block is used to catch and handle exceptions. Code is executed normally following the try statement. If any exceptions are preceding the __try__ clause the program's response follows the __except__ statement  

The errors or exceptions that occur cause python to generate an error message. 
These exceptions are handled using the __try statement__ 

For instance; 

    try:
    print(x)
    except:
    print("An exception occurred")

    __Result__
    An exception occurred
    #Because an error was raised by the __try block__ the except block is executed 



Also if you would like to execute a special block of code for a special kind of error, you can define multiple exception blocks, for example;
try:  

    print(x)
    except NameError:
    print("Variable x is not defined")
    except:
    print("Something else went wrong")

    __Result__
    Variable x is not defined
    #The exception raised depends on the error raised by the try block  


However, if nothing goes wrong you can use the __else__ statement to define a block of code to be executed, for example; 

    try:
    print("Hello")
    except:
    print("Something went wrong")
    else:
    print("Nothing went wrong")

    __Result__
    Hello 
    Nothing went wrong 

Alternatively, the __finally__ statement can be used to define a block of code that can be executed regardless of an error, for example;  


    try:
    print(x)
    except:
    print("Something went wrong")
    finally:
    print("The 'try except' is finished")

    __Result__
    Something went wrong
    The 'try except' is finished

You may want to raise an exception when the right condition occurs, and you can do this by using the __raise__ keyword, for example;  


    x = -1

    if x < 0:
    raise Exception("Sorry, no numbers below zero")

    __Result__
    Traceback (most recent call last):
    File "demo_ref_keyword_raise.py", line 4, in <module>
        raise Exception("Sorry, no numbers below zero")
    Exception: Sorry, no numbers below zero  


Built-in Exceptions
The table below shows built-in exceptions that are usually raised in Python:

|Exception	        |Description                                                                               |
|:-----------------:|:----------------------------------------------------------------------------------------:|
|ArithmeticError   	|Raised when an error occurs in numeric calculations                                       |
|AssertionError	    |Raised when an assert statement fails                                                     |
|AttributeError	    |Raised when attribute reference or assignment fails                                       |
|Exception	        |Base class for all exceptions                                                             |
|EOFError	        |Raised when the input() method hits an "end of file" condition (EOF)                      |
|FloatingPointError	|Raised when a floating point calculation fails                                            |
|GeneratorExit	    |Raised when a generator is closed (with the close() method)                               |
|ImportError	    |    Raised when an imported module does not exist                                         |
|IndentationError	|Raised when indendation is not correct                                                    |
|IndexError	        |Raised when an index of a sequence does not exist                                         |
|KeyError	        |Raised when a key does not exist in a dictionary                                          |
|KeyboardInterrupt	|Raised when the user presses Ctrl+c, Ctrl+z or Delete                                     |
|LookupError	    |    Raised when errors raised cant be found                                               |
|MemoryError	    |    Raised when a program runs out of memory                                              |
|NameError	        |Raised when a variable does not exist                                                     |
|NotImplementedError|	Raised when an abstract method requires an inherited class to override the method     |
|OSError	        |    Raised when a system related operation causes an error                                |
|OverflowError	    |Raised when the result of a numeric calculation is too large                              |
|ReferenceError	    |Raised when a weak reference object does not exist                                        |
|RuntimeError	    |Raised when an error occurs that do not belong to any specific expections                 |
|StopIteration	    |Raised when the next() method of an iterator has no further values                        |
|SyntaxError	    |    Raised when a syntax error occurs                                                     |
|TabError	        |Raised when indentation consists of tabs or spaces                                        |
|SystemError	    |    Raised when a system error occurs                                                     |
|SystemExit	        |Raised when the sys.exit() function is called                                             |
|TypeError	        |Raised when two different types are combined                                              |
|UnboundLocalError	|Raised when a local variable is referenced before assignment                              |
|UnicodeError	    |Raised when a unicode problem occurs                                                      |
|UnicodeEncodeError	|Raised when a unicode encoding problem occurs                                             |
|UnicodeDecodeError	|Raised when a unicode decoding problem occurs                                             |
|UnicodeTranslateError|	Raised when a unicode translation problem occurs                                      |
|ValueError	        |Raised when there is a wrong value in a specified data type                               |
|ZeroDivisionError	|Raised when the second operator in a division is zero                                     |







































## Disclosure  
The bulk of this content was taken from W3 Schools, for the purpose of studying and group discussion. This is not for the purpose of monetary gain and for further details on each of this topic visit  [W3 schools](https://www.w3schools.com/)
=======
## I am thinking...

