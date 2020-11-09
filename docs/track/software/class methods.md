---
id: classMethods
title: Class Methods
description: Software Track
---


## Class Methods
We have already covered several functions and methods; therefore, the rudiments of these topics have already been established. The same concept will apply in this topic; of course, this is a different language, so there are a few rule changes.
We have established, methods are functions that belong to the class. This can either be an outside class definition or an inside class definition.
In the following examples, we will cover how to define a function inside the class, outside the class as well as showing briefly where the parameters fit in our methods  

This is how to define a method Inside a Class  

    class MyClass {        // The class
            public:              // Access specifier
                void myMethod() {  // Method/function defined inside the class
                    cout << "Hello World!";
        }
    };
    int main() {
                MyClass myObj;     // Create an object of MyClass
                myObj.myMethod();  // Call the method
                return 0;
    }

This will return the following  

    Hello World!

Alternatively, we can also define a method Outside a Class by declaring it inside the class and defining it outside the class.  This is made possible by specifying the name of the class then adding the scope resolution:: then adding the function name as seen below  


    class MyClass {    // The class
        public:         // Access specifier
                void myMethod();   // Method/function declaration
    };

    // Method/function definition outside the class
    void MyClass::myMethod() {
            cout << "Hello World!";
    }

    int main() {
             MyClass myObj;     // Create an object of MyClass
             myObj.myMethod();  // Call the method
             return 0;
    }

This will return the following  

    Hello World!

By adding parameters, your code will look something like this;

    class Car {
                public:
                        int speed(int maxSpeed);
    };

    int Car::speed(int maxSpeed) {
                return maxSpeed;
    }

    int main() {
             Car myObj; // Create an object of Car
             cout << myObj.speed(200); // Call the method with an argument
             return 0;
    }

## Disclosure  
The bulk of this content was taken from W3 Schools, for the purpose of studying and group discussion. This is not for the purpose of monetary gain and for further details on each of this topic visit  [W3 schools](https://www.w3schools.com/)