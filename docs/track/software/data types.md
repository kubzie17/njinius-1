---
id: dataTypes
title: Data Types
description: Software Track
---


Data Types
In programming, two concepts that are entirely impossible to avoid are Variables and Data Types. Variables are containers used to store data values, and in Python, a variable is created when you first assign a value to it.  
When assigning these values, you must follow a set of rules, for instance when declaring a string variable you must use __'quotes'__ or __"double quotes"__ as seen __x = ‘variable’__ or __x = “variable”__. This is not the case with integers as seen __y = 4__ (no need for quotes).  If you are not sure what type of data you are looking at, you can get this using the type() function  

For example  

    x = ‘top’
    print(type(x))
    This will return the following;
    <class 'str'>  

In Python, there are several built-in data types, and we must follow the rules when making use of these data types. These are the different data types according to their categories  

  |Text Type   |str                        |
  |:----------:|:-------------------------:|
  |             |	                      |
 | Numeric Types| int, float, complex        |
|	            |                           |
 | Sequence Types| list, tuple, range       |
|	            |                          |
  | Mapping Type| dict                       |
  |          |	                           |
 | Set Types| set, frozenset                 |
|	        |                               |
 | Boolean Type| bool                       |
|	           |                            |
  | Binary Types |bytes, bytearray, memoryview |
	 
 
In Python, you do not need to specify what type of data you are using as this is naturally assigned when you assign a value to a variable. However, you can declare how you want your data to be treated, for instance, you could want your float data __x = 20.5__ to be treated as an integer __x = 20__



This very easy to do and you can do this as shown;  

    x = int(20.5)
    print(x)
    print(type(x))  

    This will produce the following;
    20.5
    <class 'int'>

Data Type Conversion
If you need to perform conversions between types, you simply use the type-names as a function.
There are several built-in functions to perform a conversion from one data type to another in Python 3. These functions return a new object representing the converted value  

|  Sr.No.   |Function & Description                                                           |
|:--------:|:--------------------------------------------------------------------------------:|
| 1        |                                                                                  |
|	       |     int(x [,base])|
 |         |       Converts x to an integer. The base specifies the base if x is a string.|
|	       |               |
 | 2       |       |
|	       |           float(x)|
 |         |           Converts x to a floating-point number.|
|	       |             |
 | 3       ||
|	       |         complex(real [,imag])|
 |         |         Creates a complex number.|
|	       ||
 | 4       ||
|	       |   str(x)|
 |         | Converts object x to a string representation.|
|	       |    |
 | 5       |   |
|	       |    repr(x) |
 |         |     Converts object x to an expression string.|
|	       |      |
 | 6       |       |
|	       |        eval(str)|
 |         |         Evaluates a string and returns an object.|
|	       |               |
 | 7       ||
|	       |         tuple(s)|
 |         |         Converts s to a tuple.|
|	       ||
 | 8       |        |
|	       |    list(s)|
 |         |      Converts s to a list.|
|	       |        
 | 9       |           |
|	       |            set(s)|
 |         |        Converts s to a set.|
|	       ||
 | 10      |         |
|	       |           dict(d)|
 |         |         Creates a dictionary. d must be a sequence of (key, value) tuples.|
|	       ||
 | 11      ||
|	       |         frozenset(s)|
 |         |        Converts s to a frozen set.|
|	       |           |
 | 12      ||
|	       |            hr(x)|
 |         |            Converts an integer to a character.|
|	       ||
 | 13      |              |
|	       |                 unichr(x)|
|          |               Converts an integer to a Unicode character.|
|	       ||
 | 14      ||
|	       |               ord(x)|
 |         |       Converts a single character to its integer value.|
|	       |
 | 15      |                                                                               | 
|	       |        hex(x)                                                                |
 |         |          Converts an integer to a hexadecimal string.                        |
|	       |                                                                              |
 | 16      |                                                                              |
|	       |               oct(x)                                                         |
 |         |            Converts an integer to an octal string.                           |	 
 