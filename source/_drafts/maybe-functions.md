---
title: Maybe Factories
description: A terrible design pattern
date: 2022-11-21 23:07:10
tags:
- development
- software
- ranting
---

The maybe function is a subtle monster that spreads it's tentacles across the code-base. It's alternating behaviour means your not sure what is being created and when.

``` typescript
function maybeAddsRelatedPosts() {
  if ( notEnabled ) {
    return;
  }
  // Create related posts
}
```

## Advantages
- Couples the validation logic with the creation logic
- Easy for the caller

## Disadvantages
- Less control to the caller
- Hides complexity but doesn't remove it
- Things that depend on the output also need that logic

When a `maybe...` factory is implemented it makes it far more likely that other `maybe...` functions will be implemented

``` typescript
function maybeAddFriends() {
  const user = maybeCreateUser();
  const friends = maybeGetFriends(user);
  const bestFriends = maybeGetBestFriends(friends);
  ...
}

function maybeCreateUser(): User | undefined {
  if (!loggedIn) {
    return undefined;
  }
  ...
}

function maybeGetFriends(user: User | undefined): User[] | undefined {
  if (!user) {
    return undefined;
  }
  ...
}

function maybeGetBestFriends(friends: User[] | undefined): User[] | undefined {
  if (!friends) {
    return undefined;
  }
  ...
}
```

You can see how this pattern *maybe* getting out of control...

The nice caller API that *maybe* allows, is actually creating a greater problem that is dealing with `undefined` values.

How can we improve this?

## Solution

There's a way to deal with this and encapsulate the messiness.

``` typescript
<!-- START MONAD -->
type Maybe<T> = { value: T };

function runSafely<T, V>(value: Maybe<T>, run: (val: T) => V) {
  if (value !== undefined) {
    return;
  }
  run(value)
}

<!-- END MONAD -->

function maybeAddFriends() {
  const user = CreateUser();
  const friends = runSafely(user, GetFriends);
  const bestFriends = runSafely(friends, GetBestFriends);
  ...
}

function CreateUser(): Maybe<User> {
  if (!loggedIn) {
    return undefined;
  }
  ...
}

function GetFriends(user: User): User[] {
  // user is known here
  ...
}

function GetBestFriends(friends: User[]): User[] {
  // friends is known here
  ...
}

```


