---
title: The Age Of Promoted Content
date: 2018-08-1 14:30:28
tags:
- promoted
- content
- rant
- web
---
<!-- title: The Content Gold Rush -->

The internet has changed dramatically since I was a kid. It seemed to once be a place for adventure and excitement, now it's a place for bussiness, yet people aren't aware of how far it goes!

# Early Days
Before everyone called it *content*, it was more commonly know as online media. There were a lot of websites providing this online media, but the problem was supply and demmand. Websites had to pay authors wages to create articles and videos for people to watch. It was also slower and harder to scale. 

    more articles == more paid authors.

# Web 2.0 - User Annotation
This changed after the social media sites exploded onto the scene. These types of sites allowed users of the platform to create *media* for other users to see. And so began the rise of *Web 2.0*.

It took a few years but businesses eventually saw the benefits of such systems. If the users were allowed to contribute to the communities media, then there was also more content for others to consume and attract more users.

    more users == more content

The problem was, most content was bad. For example, think about MySpace in it's prime, to me the only memorable thing was:

- Looking up bands I knew 
- Adding things to my own personal page. 

There was no way to judge each other's creations... which led to everyone encountering bad pages.

# Web 3.0 - Social Media
The solution to this was implemented nicely in Facebook where content is constantly judged... by users. This *Like* button allowed users to rank each post which gave Facebook useful information on what to show the next people using the site.

Now *social-media* websites were not delivering any media at all. They were simply providing the platform for the users to generate them content for other users.

# The Age of Promoted Content
The idea of promoted content is best seen on the South Park episode "Sponsored Content" shown below. The plot is that Advertising is becoming increasingly more difficult online, so they're changing tactics to promote products and services from *within* articles and entertainment.

This act of blurring the lines between

![South Park - "Sponsored Content" (E08-S19)](https://mumbrella.com.au/wp-content/uploads/2015/11/south-park-pop-up-ads-hed-2015.png)

Convergence!

- User Content
- Entertainment
- Advertising

These sites turn into Catagougues (JunkMail) in my letterbox (Phone)

<div id="venn1" />
<script src='//cdnjs.cloudflare.com/ajax/libs/d3/3.5.5/d3.min.js'></script>
<script >
function deg2Rad(degs) { return degs * (Math.PI/180)}

function addVenn(idString, width, height) {
  let radius = height / 5;
  let dataPoints = [
    { "color" : "green", "text": "User Moderation" },
    { "color" : "blue", "text": "Advertising"},
    { "color" : "red", "text": "Entertainment"},
  ];
  
  function getX(total, i) {
    const cx = width / 2;
    const offset = Math.sin(deg2Rad(i * 360 / total));
    return cx + offset*radius;
  }

  function getY(total, i) {
    const cx = width / 2;
    const offset = Math.cos(deg2Rad(i * 360 / total));
    return cx + offset*radius;
  }

  var length = dataPoints.length;

  for (let i=0; i<length; i++) {
    dataPoints[i].xc = getX(length, i);
    dataPoints[i].yc = getY(length, i);
  }

  var svgContainer = d3.select(idString).append("svg")
  .attr("width", width)
  .attr("height", height);

// Circles
  var circles = svgContainer.selectAll("circle")
  .data(dataPoints)
  .enter()
  .append("circle");


// TEXT
  var text = svgContainer.selectAll("text")
  .data(dataPoints)
  .enter()
  .append("text")

  function delay(ms) {
    return new Promise((resolve, rej) => {
      setTimeout(() => {
        resolve();
      }, ms)
    })
  }

  let timePause = 2000;
  let timeMove = 5000;

  function circleTransitionsLoop() {
    function setInitial(circles, dur) {
      circles
      .transition()
      .duration(dur)
      .attr("cx", function (d) { return d.xc; })
      .attr("cy", function (d) { return d.yc; })
      .attr("r", function (d) { return radius; })
      .style("fill", function(d) { return d.color; })
      .style("opacity", "0.2")
      return delay(dur)
    }

    function setFinal(circles, dur) {
      circles
      .transition()
      .duration(dur)
      .attr("cx", function(d) { return width / 2; })
      .attr("cy", function(d) { return height / 2; })
      .style("fill", function(d) { return 'brown'; })
      return delay(dur)
    }

    // Initial values
    delay(0)
    .then(() => setInitial(circles, 0))
    .then(() => delay(timePause))
    .then(() => setFinal(circles, timeMove))
    .then(() => delay(timePause))
    .then(() => setInitial(circles, timeMove))
    .then(() => circleTransitionsLoop())
  }

  function textTransitionsLoop() {
    function setInitial(text, dur) {
      text
      .transition()
      .duration(dur)
      .attr("font-family", "sans-serif")
      .attr("font-size", "1em")
      .attr("text-anchor", "middle")
      .attr("fill", "black")
      .attr("x", function(d) { return d.xc; })
      .attr("y", function(d) { return d.yc; })
      .text( function (d) { return d.text; })
      return delay(dur)
    }

    function setIntermediate(text, dur) {      
      text
      .attr("transform-origin", "(90)")
      .transition()
      .duration(dur)
      .attr("x", function(d) { return width / 2; })
      .attr("y", function(d) { return height / 2; })
      .attr("fill", "black")
      return delay(dur)
    }

    function setFinal(text, dur) {
      text
      .transition()
      .duration(dur)
      .attr("font-size", "2em")
      .attr("x", function(d) { return width / 2; })
      .attr("y", function(d) { return height / 2; })
      .text( function (d) { return "CONTENT"; })
      return delay(dur)
    }

    delay(0)
    .then(() => setInitial(text, 0))
    .then(() => delay(timePause))
    .then(() => setIntermediate(text, timeMove))
    .then(() => setFinal(text, timePause*0.2))
    .then(() => delay(timePause*0.8))
    .then(() => setIntermediate(text, timeMove*0.1))
    .then(() => setInitial(text, timeMove*0.9))
    .then(() => textTransitionsLoop())
  }
  circleTransitionsLoop();
  textTransitionsLoop();
}

function removeVenn(idString) {
  d3.select(idString).html(null)
}

function rebuildVenn(idString) {
  removeVenn("div#venn1");
  addVenn("div#venn1", 400,400);
}

rebuildVenn();
// setInterval(rebuildVenn, 4000);
</script>

- It seems the current internet is fostering a huge dependance on personal image and gratification.

- When did you first hear the word 'content', in the context of internet media? 

- It doesn't matter what you make, as long as you update frequently and tick the boxes

-  