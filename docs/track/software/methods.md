---
id: methods
title: Methods
description: Software Track
---


## Methods 

Similarly to functions in Python a method in C# is a block of code which only runs when it is called. You can also pass data into the method known as parameters. Methods can be very hand it is a sure way to assure that you have a piece of code ready to do a specific thing when you call it. No need to rewrite the code again. 
Whilst C# provides some pre-defined method which you may be already familiar with you can also create your own in a programming class as seen below. In the example below mymethod is the name of your method and static means that the method belongs to the program class and it is not an object of the program class  

    class Program
    {
    static void MyMethod()  
    {
        // code to be executed
    }
    }  
    
To call the method state the name of the method as you have defined it and parenthesis and a semicolon as seen, __Mymethod()__; additionally, your method can be executed multiple times  

## Method Parameters  

The information that gets passed into the method is parameters and these are placed after the variable name inside parenthesis. Just like in python, you can put as many as you want. These act as variables inside the method for instance;  

    static void MyMethod(string fname) 
    {
    Console.WriteLine(fname + " Refsnes");
    }
    static void Main(string[] args)
    {
    MyMethod("Liam");
    MyMethod("Jenny");
    MyMethod("Anja");
    }
    // Liam Refsnes
    // Jenny Refsnes
    // Anja Refsnes  


However, unlike python in C# you must define what type of parameter you are using as seen in the method below making use of multiple parameters; 
__static void MyMethod(string fname, int age)__  


In similar fashion to python you can make use of the Default Parameter Value as seen;
__static void MyMethod(string country = "Norway")__  
To which the default will be returned as a result of calling your method without adding an argument as seen; __MyMethod();__  


Typically the void keyword found in static void indicates that the method should not return a value, however, if you want a value returned you can replace with a data type, for example, int or double and then use the __return__ keyword in your method. For example,  


    static int MyMethod(int x, int y) 
    {
        return x+y;
    }

## Method Overloading 

In Method Overloading several methods can have the same name but different parameters as seen;  

__int MyMethod(int x)__  

__float MyMethod(float x)__  

__double MyMethod(double x, double y)__  


A good example would be doing a little math. We can have two methods to add numbers of a different type as seen; 

    static int PlusMethodInt(int x, int y)  

    {
        return x + y;
    }
    static double PlusMethodDouble(double x, double y)
    {
        return x + y;
    }

    static void Main(string[] args)
    {
        int myNum1 = PlusMethodInt(8, 5);
        double myNum2 = PlusMethodDouble(4.3, 6.26);
        Console.WriteLine("Int: " + myNum1);
        Console.WriteLine("Double: " + myNum2);
    }

This will return;  

    Int: 13
    Double: 10.559999999999999

As you can see we have defined two methods which should do the same thing.   
In this case, it is better to overload one, for instance, we overload the Plus Method to work for both int and double.  


    static int PlusMethod(int x, int y)
    {
        return x + y;
    }

    static double PlusMethod(double x, double y)
    {
        return x + y;
    }

    static void Main(string[] args)
    {
        int myNum1 = PlusMethod(8, 5);
        double myNum2 = PlusMethod(4.3, 6.26);
        Console.WriteLine("Int: " + myNum1);
        Console.WriteLine("Double: " + myNum2);
    } 
    
To return the result of;  

    Int: 13
    Double: 10.559999999999999 

## Disclosure  
The bulk of this content was taken from W3 Schools, for the purpose of studying and group discussion. This is not for the purpose of monetary gain and for further details on each of this topic visit  [W3 schools](https://www.w3schools.com/)