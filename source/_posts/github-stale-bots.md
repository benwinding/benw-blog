---
title: "Github Stale Bots: A False Ecconomy"
date: 2021-01-17 10:15:11
photos: 
- https://i.imgur.com/OOBT9Ta.png
tags:
- rant
- github
- stale bot
---

Stale Bot's are a type of automated bot on Github, which locks issues which are "stale" (as in have no recent activity). This seems like a helpful tool at first, but in reality it's terrible for all parties involved.

<!-- more -->

# Example: The Angular Repo

[Angular has a popular repository](https://github.com/angular/angular/issues) on github which recieves hundreds of issues every day. They use the stale bot to lock old issues, which have no activity in order to reduce the amount of issues in the repository. On the surface the Stale Bot is doing great work, reducing the number of active issues in the repo, but in reality it's a bit insane.

## Maintainer's perspective

Issues are being automatically locked, new users can't add to issue so they create a duplicate issue, or even worse, just don't report that the issue still exists!

## User's perspective

A user searches for the bug they have. They find the bug but the issue has been locked, so they either create another issue, effectively duplicating the bug and often not link it to the original. Now there are 2 issues duplicating the same bug, so what did "Stale Bot" achieve?

The only benefit to the repo maintainer is that they are reducing the number of *Open* issues. But this also has the effect of making users recreate issues that already exist but are locked, making duplicate bugs in the repo...

# Conclusion

The best repo's in my opinion, don't prevent users from adding to older issues. This gives a much better experience and prevents duplicates and reduce friction of adding information to bugs.
