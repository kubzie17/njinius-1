---
id: reference
title: References
description: Software Track
---


##  References  

In C++ a reference is in the literal sense a reference to an already existing variable. This is created using the & operator as shown;  

    string car = "Benz";  // car variable
    string &transport = car;    // reference to car  


By doing this, we can refer to the car variable by either using the car variable name or the reference name transport as seen;  

    using namespace std;

    int main() {
    
    string car = "Benz";
    
    string &transport = car;

    
    cout << car << "\n";
    
    cout << transport << "\n";
    
    return 0;
    }  

__Result__  

    Benz
    Benz


## Memory address  


When we create a variable in C++, a memory address is automatically assigned to that variable. When we assign a value to it, the memory address is where it is stored. If you would like to get the memory address of a variable you can also use the & operator as seen;  


    string car = "Bmw";
    cout << &car;  

__Result__  
 
    0x9kldjj3
    //Usually the output is in hexadecimal form.  
    

Such tools are quite useful when manipulating the data in the computer memory, and these practices increase efficiency for those who are proficient.  