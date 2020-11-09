---
id: abstraction
title: Abstraction
description: Software Track
---


## Abstraction
One can hide details and only show certain information to users through Data Abstraction. This is typically done through Abstract Classes or Interfaces 
Abstract class: is a restricted class that cannot be used to create objects (to access it, it must be inherited from another class).
Abstract method: can only be used in an abstract class, and it does not have a body. The body is provided by the derived class (inherited from)  

You can use regular or abstract methods in abstract classes as shown; 
    abstract class Animal 
    {
    public abstract void animalSound();
    public void sleep() 
    {
        Console.WriteLine("Zzz");
    }
    }

By looking at the example provided we can see that we cannot create an object of the class provided (animal class) 

    Animal myObj = new Animal(); // Will generate an error (Cannot create an instance of the abstract class or interface 'Animal')


To access the abstract class, it must be inherited from another class. Let's convert the Animal class we used in the Polymorphism chapter to an abstract class.

    // Abstract class
    abstract class Animal
    {
    // Abstract method (does not have a body)
    public abstract void animalSound();
    // Regular method
    public void sleep()
    {
        Console.WriteLine("Zzz");
    }
    }

    // Derived class (inherit from Animal)
    class Pig : Animal
    {
    public override void animalSound()
    {
        // The body of animalSound() is provided here
        Console.WriteLine("The pig says: wee wee");
    }
    }

    class Program
    {
    static void Main(string[] args)
    {
        Pig myPig = new Pig(); // Create a Pig object
        myPig.animalSound();  // Call the abstract method
        myPig.sleep();  // Call the regular method
    }
    }

This will produce the following result,
    The pig says: wee wee


## Disclosure  
The bulk of this content was taken from W3 Schools, for the purpose of studying and group discussion. This is not for the purpose of monetary gain and for further details on each of this topic visit  [W3 schools](https://www.w3schools.com/)
