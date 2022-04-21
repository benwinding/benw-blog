---
title: Bug Driven Development - Sometimes it's the best choice
description: BDD or Bug Driven Development is controversial, but sometimes it's appropriate
date: 2022-04-21 18:18:20
photos: 
tags:
- development
- software
- rant
---

Tests are great, they catch errors before release and verify that the code does what it says it does. However the TDD (Test Driven Development) way of doing things is to write the tests ***before*** the implementation of the feature. Which has several drawbacks:

- You're writing tests for a feature, before even validating that the feature is useful for your users
- It requires a detailed specification of the feature and it's behavior in order to design the tests against, meaning more planning
- In creating tests before releasing, you're intrinsically slowing down the iteration cycle

And look at this graph, and how it resembles a waterfall, doesn't look very agile, right?

![Test Driven Development - Development Cycles](https://static.swimlanes.io/541e4b296d6f0f349b8fb37c26e4e430.png)
<!-- https://swimlanes.io/u/408ujM0Oc -->

## Bug Driven Development

In this paradigm you develop the feature in the most MVP way possible, release it to some portion of users and simply await bugs!

![Bug Driven Development - Development Cycles](https://static.swimlanes.io/b2411d4ef53e7ac26fa1eb9a4bbc7d36.png)
<!-- https://swimlanes.io/u/m499GMjd5 -->

- Bugs can be reported internally by testers or externally by annoyed users.
- Bugs should be fixed when reported, meaning tight iteration cycles, more agile
- Tests are developed around the emerging bugs, rather than trying to preemptively design tests for a feature.

This is a fairly facetious defense of *Bug Driven Development*, but it shows the advantages of quickly iterating and resolving discovered issues, rather than trying to predict them.

It's also important to remember that you're essentially leaning on your users to test your software, which in some cases (*see Theranos*) is not appropriate. But for many software companies, it's okay to move fast and break things.

Also, bugs in software is an inevitability (except in provably correct programs which apparently exist somewhere). You will receive bug reports and need to fix them, so we're all doing *Bug Driven Development* in some sense anyway!

*Note: TTD has many benefits which weren't mentioned here, take this with a wheel barrow of salt.*
