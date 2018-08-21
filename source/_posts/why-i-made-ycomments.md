---
title: Why I Made YComments
description: After seeing the impact that discussion systems have had on the internet, I decided to bring the dicussion to the source!
date: 2018-08-21 14:03:27
photos: 
 - https://i.imgur.com/5wKAHHP.png
tags:
- development
- javascript
- product
- discussions
---

After becoming fascinated (and addicted) to online discussions such as; Reddit and Hacker News, I saw there was a missing connection between the article and the discussion around the article.

<!-- more -->

## Current Commenting Systems
Since web 2.0 began, we've seen the following implementations of discussion systems, or *commenting systems* bridging the gap between the discussions and the site itself.

- Disqus
- Facebook comments
- Custom site registered comments

But these systems are very personal, people are less likely to leave comments with their personal profile. And if they do, they are less likely to be honest, in fear of being ostracised.

## Effective Comment Systems
People are much more honest when they're using an annonymous system such as Reddit or Hacker News. This gives a much more accurate representation of the opinions of the majority. Additionally, point incentives give an incentive for comments to be meaningful and not comment needless spam.

Examples of these systems are:

- Reddit
- Hacker News

### Where are they?
But why aren't they shown below webpages, like Disqus and Facebook systems are? ... I don't know... Maybe sites fear the honest annonymous discussion could be detremental to the webpage. Or maybe most webpages are just unaware that these long inciteful discussions are taking place around the webpages they've created.

## My Solution: YComments
To tackle a part of the problem, I created a tiny script which checks the current webpage and injects the comments into it, similar to Disqus. This can be done in 2 lines of extra HTML


``` html Auto discussion lookup
<script src="https://cdn.rawgit.com/benwinding/ycomments/b7310c55/dist/ycomments.min.js" ></script>
<div comments="auto"></div>
```

Or

``` html Manual discussion lookup
<script src="https://cdn.rawgit.com/benwinding/ycomments/b7310c55/dist/ycomments.min.js" ></script>
<div comments="16582136"></div>
```

### How it works
To accomplish this, the script has the following program flow.

``` c Top secret psuedo code https://code2flow.com code2flow
Begin;
if(!Does Page Have Div?) {
  goto End;
}
if(Is Auto Mode?) {
  // Hacker News 
  // API Request
  post = GetTopPostMatching(pageUrl); 
}
// Hacker News 
// API Request
GetAllCommentsFrom(post);
if(!Does Discussion Exist?) {
  Insert
  No Discussion Found;
  goto End;
}
Order Comments;
Insert 
Comments Into Div;
End:
Exit;
```

<img src="/images/code2flow_b8262.svg" alt="YComments Program Flow" style="max-width: 700px;"/>

# Challenges
To dynamically request comments on a webpage, I discovered you needed to enable COR's (Cross Origin Requests) on the server end of the function. Luckily Hacker News has this enabled, however Reddit did not have this enabled, which meant you needed to use the limited API with authentication. So Reddit comments were not implemented.

When dynamically generating html on an unknown page, there is a high likely hood that existing CSS, would overide the comment CSS styling. To overcome this, I used an `<iframe>` element to contain and protect the comment structure and CSS from the parent page modifications.

# Summary
This system provides an excellent way to showcase how much of an impact your article has on the Hacker News community. It's an honest way to get feedback and link back to the discussions that car about that particular webpage.

## Links
- [Checkout the YComments Landing Page here](https://ycomments.benwinding.com)
- [Checkout the Github source code here](https://github.com/benwinding/ycomments)