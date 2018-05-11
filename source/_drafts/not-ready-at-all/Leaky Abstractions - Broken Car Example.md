---
title: Leaky Abstractions - Broken Car Example
date: 2017-11-01 20:55:34
tags:
---

Joel Spolsky, a prominent software enthusiast, made a statement based on his experience with building and maintaining software.

> [All non-trivial abstractions, to some degree, are leaky.](https://en.wikipedia.org/wiki/Leaky_abstraction#The_Law_of_Leaky_Abstractions)

This statement was taken. meaning of the law is that all software abstractions to a degree, hide complexity by providing a simplified layer. However, this only solves majority of use cases. The remaining cases, can usually only be handled by _leaking _complexity through the abstraction layer.

# My Analogy

Initially, as an inexperienced programmer, it was hard for me to appreciate the importance of this Law. But a more relate-able example came to me today, which illustrates the lesson a a bit clearer.

### The Broken Car

As cars become more advanced an easy to use, the way they work is abstracted away from the driver. For majority of use cases, a normal car is fine with stock standard. But there are use cases where cars must be enhanced or changed to fit the needs of the user. These cases include:

*   Cars in colder climates; different oils, coolants even tyres must be used.