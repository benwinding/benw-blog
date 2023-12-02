---
title: Preferring public method isolation
description: 
date: 2023-12-05 15:47:01
tags:
- software
- rant
---

# Preferring public method isolation

Something I've learnt over time is that things become complicated when public methods of a class call each other. This can be demonstrated fairly easily with some examples:

``` typescript
class UserController {
    public onSave() {
        this.saveToApi(this.userState);
    }
    public onBack() {
        this.onSave();
        this.navigateBack();
    }
}
```

This can also be shown with the following dependency diagram. Which shows that `onBack` is implicitly dependent on `onSave`.

{% mermaid %}
graph TD;
    onSave-->saveToApi;
    onBack-->onSave;
    onBack-->navigateBack;
{% endmermaid %}

### What's so bad about this?

When you change the "public" `onSave` method, you wouldn't expect the "public" `onBack` method to be affected, but since they are interdependent you need to account for both cases.

And with larger classes these dependency relationships can be much harder to spot.

{% mermaid %}
graph TD;
    onSave-->saveToApi;
    onBack-->onSave;
    onBack-->navigateTo;
    onDelete-->saveToApi;
    onDelete-->confirmAction;
    onDelete-->deleteFromApi;
    onEdit-->editUser;
    onViewDetails-->viewUserDetails;
    onLogout-->checkHasSaved;
    onLogout-->logoutUser;
    onLogout-->navigateTo;
    onResetPassword-->resetUserPassword;
    onResetPassword-->navigateToReset;
    onSearch-->searchUsers;
    onViewNotifications-->viewUserNotifications;
{% endmermaid %}

### Solution

Public methods of the same class shouldn't call each other. Instead use shared private methods, if both public methods need shared functionality.

This isn't a new idea, it's basically part of [Single Responsibility Principle](https://en.wikipedia.org/wiki/Single_responsibility_principle).