---
id: pointers
title: Pointers
description: Software Track
---


## Pointers  

Pointers store the memory address as their values by using the __*operator.__ Pointer variable points to a data type of the same kind either string or integer. The variable you are working with is assigned to the pointer.  

The method below shows us creating a pointer variable with the name __ptr__ and pointing it to our string variable using the __* operator__ as seen __(string* ptr).__ We store and assign to the pointer the memory address of the car variable using the __& operator.__  
This results in ptr holding the memory address of the car variable.  

    string car = "bmw";  // A car variable of type string
    string* ptr = &car;    // A pointer variable, with the name ptr, that stores the address of car

    // Output the value of car (Bmw)
    cout << car<< "\n";

    // Output the memory address of car (0x8dded2)
    cout << &food << "\n";

    // Output the memory address of car with the pointer (0x8dded2)
    cout << ptr << "\n";

__Result__  

    Bmw
    0x8dded2
    0x8dded2

## Dereferencing

You can also use the pointer to get the value of the variable, by using the * operator (the dereference operator). Keep in mind that the * operator can be used to create a pointer variable and it can also be used to dereference as seen.  


    int main() {
    
    string car = "bmw";  // Variable declaration
    
    string* ptr = &car;    // Pointer declaration
    // Reference: Output the memory address of car with the pointer
    
    cout << ptr << "\n";
    // Dereference: Output the value of car with the pointer
    
    cout << *ptr << "\n";
    
    return 0;
    }  

__Result__  

    0x8dded2
    Bmw

## Modify Pointer Value  


This is entirely possible as the example shows, however always keep in mind that this also changes the original variable's value;  


    int main() {
    
    string car = "Bmw";
    
    string* ptr = &car;

    
    // Output the value of car
    
    cout << car << "\n";

    
    // Output the memory address of car
    
    cout << &car << "\n";

    
    // Access the memory address of car and output its value
    
    cout << *ptr << "\n";
    
    
    // Change the value of the pointer
    
    *ptr = "benz";
    
    
    // Output the new value of the pointer
    
    cout << *ptr << "\n";
    
    
    // Output the new value of the car variable
    
    cout << car << "\n";
    
    return 0;
    }  

__Result__  

    Bmw
    0x8dded2
    Bmw
    Benz
    Benz