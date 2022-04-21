---
title: Bug Driven Development - Sometimes it's the best choice
description: BDD or Bug Driven Development is controversial, but sometimes it's appropriate
date: 2022-04-21 18:18:20
photos: 
- https://i.imgur.com/W6FBoWC.jpg
tags:
- development
- software
- rant
---

Tests are great, they catch errors before release and verify that the code does what it says it does. However the TDD (Test Driven Development) way of doing things is to write the tests ***before*** the implementation of the feature. Which has several drawbacks:

<!-- more -->

- You're writing tests for a feature, before even validating that the feature is useful for your users
- It requires a detailed specification of the feature and it's behavior in order to design the tests against, meaning more planning
- In creating tests before releasing, you're intrinsically slowing down the iteration cycle

And look at this graph, and how it resembles a waterfall, doesn't look very agile, right?

![Test Driven Development - Development Cycles](https://static.swimlanes.io/541e4b296d6f0f349b8fb37c26e4e430.png)
<!-- https://swimlanes.io/u/408ujM0Oc -->

## Bug Driven Development

In this paradigm you develop the feature in the most MVP way possible, release it to some portion of users and simply await bugs!

Notice how the initial *Feature Development Cycle* is much tighter... and agile! 

![Bug Driven Development - Development Cycles](https://static.swimlanes.io/b2411d4ef53e7ac26fa1eb9a4bbc7d36.png)
<!-- https://swimlanes.io/u/m499GMjd5 -->

- Bugs can be reported internally by testers or externally by annoyed users.
- Bugs should be fixed when reported, meaning tight iteration cycles, more agile
- Tests are developed around the emerging bugs, rather than trying to preemptively design tests for a feature.

The main advantage of this approach is that it puts more emphasis on solving problems (bugs) when they arise, rather than trying to predict bugs by writing tests in the design phases. Maybe *Just In-Time Test-Driven Development (JIT TDD)* would also be a suitable name...

To be clear, this is a facetious exploration of the idea. It's important to remember that using this paradigm is essentially making your users *testers*. This is fine for most applications, however some companies should not let their users be on the *bleeding* edge of software (*see Theranos*).

Finally, bugs in software is an inevitability, if there's no bugs it's probably not being developed fast enough. You *will* receive bug reports and need to fix them, so we're all doing *Bug Driven Development* in some sense anyway!

*Note: I love TTD, it has many benefits which weren't mentioned here.*
