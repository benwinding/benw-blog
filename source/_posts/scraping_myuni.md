---
title: Scraping MyUni (Canvas LMS)
date: 2018-06-16 11:03:23
tags:
- development
- script
- scraping
- uni
photos: 
 - /images/imgur/WEzxyHh.jpg
---

So it was time to study for uni exams, this meant that I needed to revise the content in all of the lectures. But wait! the lecture slides are only accessible through a convoluted website system called _Canvas LMS_. 

## Problem

- System only allows one **pdf** to downloaded at a time
- Each **pdf** requires 2 link clicks to download
- Too many mouse clicks:

`
40 pdf's * 2 links * 4 courses = 320 clicks!
`

## Solution: Scrape it

<!-- more --> 

I read somewhere that automatically browsing and extracting information from webpages (web scraping) is a legally debateable subject. However, my reasoning is that the information I'm scraping is intended to be downloaded by me anyway, so I'm not breaking any rules. 

So, I thought this would be a perfect opportunity to use scraping to solve the problem.

### Pseudo Code

``` c
Begin;
Authenticate(user, pass); // To Adelaide Uni;
FetchHTML(course); // Read HTML for Canvas LMS course page;
FindAllLinks(); // Find all links to other module pages;

for (current_link; isMoreLinks; next_link) {
  if(current_link is pdf) {
    download(current_link);
  }
} 
Exit;
```

<img src="/images/code2flow_8d6de.svg" alt="Scraping MyUni - Program Flow" style="max-width: 700px;"/>

### Implementation
So the implementation used a Python script which read the _userId, password, course_ as arguments then executed the program. The stack used was:

- Python3
- [robobrowser](https://github.com/jmcarp/robobrowser)

### Example
A typical example for scraping using robobrowser looks like the following:

``` python
# Get lecture module links
moduleLinks = browser.find_all("a", { "class" : "lecture-link" })
```

## Conclusion
Was fun to learn the basics of web scraping and this little script saved me countless hours of mindlessly downloading course content, and has saved others from the trouble too.

Full Source Code: [https://github.com/benwinding/myuni-dl](https://github.com/benwinding/myuni-dl)