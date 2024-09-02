---
title: Preferring public method isolation
description: 
date: 2024-09-02 19:13:01
tags:
- software
- rant
---

Things become complicated when public methods of a class call each other. This can be demonstrated fairly easily with some examples:

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

This can also be shown with the following dependency diagram. Which shows that `onBack` implicitly depends on `onSave`.

{% mermaid %}
flowchart TD;
    UserController-->onBack;
    UserController-->onSave;
    subgraph "  "
    onSave-->saveToApi;
    %% onBack-->onSave;
    end
    subgraph " "
    onBack-->onSave;
    onBack-->navigateBack;
    end
{% endmermaid %}

Which means if the `onSave` method is modified, then the behavior of the `onBack` method is also affected, which may be unintended

### Implicit interdependence

Like many anti-patterns, it's more damaging with larger classes. The example below shows how dependency relationships can become more intertwined...

{% mermaid %}
graph TD;
    UserController-->onSave
    UserController-->onBack
    UserController-->onDelete
    UserController-->onEdit
    UserController-->onViewDetails
    UserController-->onLogout
    UserController-->onResetPassword
    UserController-->onViewNotifications
    subgraph " "
    onSave-->saveToApi;
    end
    subgraph "  "
    onBack-->onSave;
    onBack-->navigateTo;
    end
    subgraph "   "
    onDelete-->saveToApi;
    onDelete-->confirmAction;
    onDelete-->deleteFromApi;
    end
    subgraph "    "
    onEdit-->editUser;
    end
    subgraph "     "
    onViewDetails-->viewUserDetails;
    end
    subgraph "      "
    onLogout-->checkHasSaved;
    onLogout-->logoutUser;
    onLogout-->onBack;
    end
    subgraph "       "
    onResetPassword-->resetUserPassword;
    onResetPassword-->navigateToReset;
    end
    subgraph "        "
    onViewNotifications-->viewUserNotifications;
    end
{% endmermaid %}

In this example, modifying the public method `onSave` will implicitly also change the behavior of `onBack`, `onLogout`... which can cause _unintended effects_.

#### How it appears:

{% mermaid %}
graph TD;
    UserController-->onSave
    UserController-->onBack
    UserController-->onDelete
    UserController-->onEdit
    UserController-->onViewDetails
    UserController-->onLogout
    UserController-->onResetPassword
    UserController-->onSearch
    UserController-->onViewNotifications
    subgraph " "
    onSave;
    end
    subgraph "  "
    onBack
    end
    subgraph "   "
    onDelete
    end
    subgraph "    "
    onEdit
    end
    subgraph "     "
    onViewDetails
    end
    subgraph "      "
    onLogout
    end
    subgraph "       "
    onResetPassword
    end
    subgraph "        "
    onSearch
    end
    subgraph "         "
    onViewNotifications
    end
{% endmermaid %}

#### How it is:

{% mermaid %}
graph TD;
    UserController-->onSave
    UserController-->onBack
    UserController-->onDelete
    UserController-->onEdit
    UserController-->onViewDetails
    UserController-->onLogout
    UserController-->onResetPassword
    UserController-->onViewNotifications
    subgraph " "
    onSave;
    end
    subgraph "  "
    onBack-->onSave;
    end
    subgraph "   "
    onDelete;
    end
    subgraph "    "
    onEdit;
    end
    subgraph "     "
    onViewDetails;
    end
    subgraph "      "
    onLogout-->onBack;
    end
    subgraph "       "
    onResetPassword
    end
    subgraph "        "
    onViewNotifications
    end
{% endmermaid %}

The root of the problem is that the "public api" is often thought of as a "layer" of the system, where each part of the api is an entry point. When these public methods call each other they break this abstraction, so instead of a layer, it's an iceberg.

### Solution

The easy rule that I have adopted is simply "Public methods of the same class shouldn't call each other". If both public methods need shared functionality, then just use private methods... it will save a lot of headaches...

This isn't a new idea, it's basically part of [Single Responsibility Principle](https://en.wikipedia.org/wiki/Single_responsibility_principle).