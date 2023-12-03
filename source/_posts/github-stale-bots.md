---
title: "Github Stale Bots: A False Economy"
date: 2021-01-17 10:15:11
photos: 
- /images/imgur/OOBT9Ta.png
tags:
- rant
- github
- stale bot
---

*Stale Bot's* are a type of automated bot on Github, which locks issues which are "stale" (as in have no recent activity). This seems like a helpful tool at first, but in reality it's terrible for all parties involved.

<!-- more -->

# Example: The Angular Repo

[Angular has a popular repository](https://github.com/angular/angular/issues) on github which receives hundreds of issues every day. They use the stale bot to lock old issues, which have no activity in order to reduce the amount of issues in the repository. On the surface the Stale Bot is doing great work, reducing the number of active issues in the repo, but in reality it's a bit insane.

## Maintainer's perspective

Issues are being automatically locked, new users can't add to issue so they create a duplicate issue, or even worse, just don't report that the issue still exists!

## User's perspective

A user of Angular will *Google* the error text and will usually find the corresponding github issue. But more often than not, the issue is locked, by the heroic *lock bot*. So they have a few options, continue searching for another more recent (less SEO'd issue) OR either create another issue, effectively duplicating the bug.

If they decide to create a duplicate issue, it will often not be linked it to the original issue... Now there are 2 issues duplicating the same bug in the Angular repo, so what did "Stale Bot" achieve?

Well the stale bot has had the following effects on the repository:

1. Reduce the metric of *Open Issues* in github
2. Made duplicate issues far more likely
3. Increased friction of users reporting that the issue still exists
4. Ultimately decreased the quality of the software, as the issues don't accurately reflect reality

# Devil's Advocate

For a moment, imagine that Stack Overflow did this. If there's no interaction on a question, then the question should be locked... Well questions that don't get consistent interaction are inevitably duplicated, or not updated with correct information, or people get frustrated and don't ask the question again.

# Conclusion

The best repo's in my opinion, don't prevent users from contributing to older issues. This gives a much better user experience, as friction to contribute to issues is much lower. It also lets the maintainers ensure that old issues aren't needlessly duplicated. Finally, the community feels like the maintainers actually care about their input, which doesn't feel that way when an automated *stale bot* locks and closes your inactive issue without any input from a human...
