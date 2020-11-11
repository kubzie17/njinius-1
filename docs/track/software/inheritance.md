---
id: inheritance
title: Inheritance
description: Software Track
---


## Python Inheritance

We can define a class that inherits methods and properties from another class using __Inheritance__ 
This makes use of the __Parent class__ or base class being inherited from and the __Child class__ the class that is inheriting.  


Creating a parent class is the same as creating any other class for example;  


    class Person:
        def __init__(self, fname, lname):
        self.firstname = fname
        self.lastname = lname

    def printname(self):
        print(self.firstname, self.lastname)

    #Use the Person class to create an object, and then execute the printname method:

    x = Person("Henry", "Stone")
    x.printname()

    __Result__
    Henry Stone 

When creating the __Child class__ use the parent class as a parameter to inherit functionality and add __pass__ because you are not adding any other properties or methods.  


For example;  

  
    class Student(Person):
    pass 

    If you have done this correctly the Student Class should have inherited the properties and methods of the Person Class as seen below;

    class Person:
    def __init__(self, fname, lname):
        self.firstname = fname
        self.lastname = lname

    def printname(self):
        print(self.firstname, self.lastname)

    class Student(Person):
    pass

    x = Student("Jack", "Lantern")
    x.printname()


For more functionality we can add the ___init_() function__
We can do this by replacing the __pass__ keyword with  ___init_() function__
This means that the child class will no longer inherit the parent's ___init_() function__ but instead the child's ___init_() function__ will override it  


    class Student(Person):
    def __init__(self, fname, lname):
        #add properties etc.

However, if you would like to keep the inheritance of the parent's ___init_() function__ you must add a call to the parent's ___init_() function__ as seen below;  


    class Person:
    def __init__(self, fname, lname):
        self.firstname = fname
        self.lastname = lname

    def printname(self):
        print(self.firstname, self.lastname)

    class Student(Person):
    def __init__(self, fname, lname):
        Person.__init__(self, fname, lname)

    x = Student("Jack", "Lantern")
    x.printname()

    __Result__
    Jack Lantern 




Alternatively, you can use the __super() function__ which will make the child class inherit all the methods and properties from its parent automatically without mentioning the parent element, for example;  


    class Person:
    def __init__(self, fname, lname):
        self.firstname = fname
        self.lastname = lname

    def printname(self):
        print(self.firstname, self.lastname)

    class Student(Person):
    def __init__(self, fname, lname):
        super().__init__(fname, lname)

    x = Student("Jack", "Lantern")
    x.printname()

    __Result__
    Jack Lantern  


To add even more functionality, we can also add properties, as the following example shows;  


    class Person:
    def __init__(self, fname, lname):
        self.firstname = fname
        self.lastname = lname

    def printname(self):
        print(self.firstname, self.lastname)

    class Student(Person):
    def __init__(self, fname, lname):
        super().__init__(fname, lname)
        self.graduationyear = 2030

    x = Student("Jack", "Lantern")
    print(x.graduationyear)

    __Result__
    2030  

Alternatively, we can make the year variable which can be passed into the student variable  when creating student objects  as seen below;  


    class Person:
    def __init__(self, fname, lname):
        self.firstname = fname
        self.lastname = lname

    def printname(self):
        print(self.firstname, self.lastname)

    class Student(Person):
    def __init__(self, fname, lname, year):
        super().__init__(fname, lname)
        self.graduationyear = year

    x = Student("Jack", "Lantern", 2030)
    print(x.graduationyear)

    __Result__
    2030  


We can then also use methods, and it is essential to note that whilst naming as your method using the same name as a function in the parent class will override the inheritance  


    class Person:
    def __init__(self, fname, lname):
        self.firstname = fname
        self.lastname = lname

    def printname(self):
        print(self.firstname, self.lastname)

    class Student(Person):
    def __init__(self, fname, lname, year):
        super().__init__(fname, lname)
        self.graduationyear = year

    def welcome(self):
        print("Welcome", self.firstname, self.lastname, "to the class of", self.graduationyear)

    x = Student("Jack", "Lantern", 2030)
    x.welcome()

    __Result__
    Welcome Jack Lantern to the class of 2030  

 
## Disclosure   

The bulk of this content was taken from W3 Schools, for the purpose of studying and group discussion. This is not for the purpose of monetary gain and for further details on each of this topic visit [W3 schools](https://www.w3schools.com/)

=======
## I am thinking...

