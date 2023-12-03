---
title: Don't ALWAYS quick-return from functions
published: true
description: A brief look at the history behind the opposing styles of quick-return and single-return in functions.
date: 2018-04-19 20:27:28
photos: 
- /images/imgur/IV0f3CX.jpg
tags:
- development
- ssh
- deploy
- refactoring
- cleancode
- quick-return
---
 
There are two main styles of returning from a function in a program. Both styles are almost diametrically-opposed, but have their uses.

<!-- more --> 
 
### Single Return
An example of nested single-returning. This is hard to read and keep track of the levels of scope.

``` c
int GetCost(request) {
    int cost = 0;
    if (request.Important) {
        if (request.HasDiscount) {
            if (request.IsMember) {
                cost = 10;
            }
            else {
                cost = 12;
            }
        }
        else {
            cost = 14;
        }
    }
    else {
        cost = 20;
    }
    return cost;
}
```

### Quick Return
Now arguably the code can be made simpler by using the prophetic "Quick Return!" method. This has the effect of returning out of the function as soon as possible, making the code easier to reason about. Also, by unravelling the if-statements into a neat stack, the code becomes much easier to read.
 
``` c
int GetCost(request) {
    if (!request.Important) 
        return 20;
    else if (!request.HasDiscount) 
        return 14;
    else if (!request.IsMember) 
        return 12;
    else
        return 10;
}
```

# However ... Memory Leaks
The reason quick returns were not encouraged in earlier days of programming is a lack of garbage collection. During the execution of a function, memory may be allocated. So a simplify this, the function is given only one exit point, to ensure all memory in the function is deallocated before the function returns. 

The following is another version of the single return function (with an added checking object). Cleaner and easier to read with still one return statement (and a little clean up).

``` c
int GetCost(request) {
    Checker checker = new Checker(request);
    int cost = 0;
    if (!checker.Important) 
        cost = 20;
    else if (!checker.HasDiscount) 
        cost = 14;
    else if (!checker.IsMember) 
        cost = 12;
    else 
        cost = 10;
    delete checker;
    return cost;
}
```

But memory might not be the only thing that needs to be cleaned up at the end of a function's execution. There are other things that might need to be 'freed up' like:

- Hardware resources
- Object mutation locks
- Network connections

By returning only once within a function, the chance of leaving one of these resources open/locked is greatly reduced.

So, the older method of single return is not completely useless! And depending on the language and environment, quick-returns may not always be the best solution.