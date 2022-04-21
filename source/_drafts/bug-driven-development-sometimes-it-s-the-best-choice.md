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

Tests are great, they catch things and verify that the code does what it says it does. However the TDD (Test Driven Development) way of doing things is to write the tests ***before*** the implementation of the feature. This has several drawbacks:

- You're writing tests for a feature, before even validating that the feature is useful for your users
- It requires a detailed specification of the feature and it's behavior in order to design the tests against, meaning more planning
- In creating tests before releasing, you're intrinsically slowing down the iteration cycle

Now that doesn't sound very agile, does it?

Introducing; **Bug Driven Development!** in this paradigm you develop the feature in the most MVP way possible, release it and await bugs!

- Bugs can be reported internally by testers or externally by annoyed users.
- Bugs are fixed when reported, happier users
- Fast iteration, more agile!
- Tests are developed around the emerging bugs, rather than trying to preemptively design test for a feature.

This is a fairly facetious defense of *Bug Driven Development*, but it shows the advantages of quickly iterating and resolving discovered issues.

It's also important to remember that you're essentially leaning on your users to test your software, which in some cases (*see Theranos*) is not appropriate. But for many software companies, it's okay to move fast and break things.

Also, bugs in software is an inevitability (except in provably correct programs which apparently exist somewhere). You will receive bug reports and need to fix them, so we're all doing *Bug Driven Development* in some sense anyway!

*Disclaimer: TTD has many benefits which weren't mentioned here, take this with a grain of salt.*
