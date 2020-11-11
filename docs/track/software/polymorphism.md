---
id: polymorphism
title: Polymorphism
description: Software Track
---


## Polymorphism  

When many classes are related to each other by inheritance, it is Polymorphism, and this is particularly useful for code reusability.  

Inheritance allows the inheritance of attributes and methods from one class to another. Polymorphism uses those methods to perform tasks enabling us to perform a single action in different ways.  

For instance, if we have a base class called car, which has a method called carColor. Derived classes of cars could be BMW, Benz, Range, Jaguar etc. These also have their implementations of car color, for instance, BMW is green, Benz is white as shown below;  

    // Base class
    class Car {
    
    public:
    
    void carColor() {
        cout << "The car is a colour \n" ;
    
    }
    };

    // Derived class
    class bmw : public Car {
    
    public:
    
    void carColor() {
    
    cout << "The bmw is: green\n" ;
    
    }
    };

    // Derived class
    class benz : public Car {
    
    public:
    
    void carColor() {
    
    cout << "The benz is: white \n" ;
    
    }
    };  


We can then create benz and bmw objects and override the carColor() method as seen;  


    // Base class
    class Car {
    
    public:
    
    void carColor() {
    
    cout << "The car is a colour \n" ;
    
    }
    };

    // Derived class
    class bmw : public Car {
    
    public:
    
    void carColor() {
    
    cout << "The bmw is: green\n" ;
    
    }
    };

    // Derived class
    class benz : public Car {
    
    public:
    
    void carColor() {
    
    cout << "The benz is: white \n" ;
    
    }
    };

    int main() {
    
    Car myCar;
    
    Bmw myBmw;
    
    Benz myBenz;

    
    myCar.carColor();
    
    myBmw.carColor();
    
    myBenz.carColor();
    
    return 0;
    }

__Result__  

    The car has a color
    The bmw is: green
    The benz is: white


    