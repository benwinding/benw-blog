---
title: Easiest Git Deploy Ever!
date: 2017-11-25 10:43:58
tags: git, ssh, deploy, node
---

The following tutorial shows the easiest way I've found to deploy pretty much any application to another machine!

## Server Prerequisites:
☑ ``$ git pull`` the app from the server
☑ ``$ ssh user@server`` get into the server
☑ pm2 or apache2 or nginx .... some kind of server is running

<!-- more --> 

## Server Side
Create the following file in the home directory of the server... it's just 3 lines.

``` bash $nano ~/update_server.sh 
cd ~/nodeApp;
git pull;
pm2 restart app;
```

*This assumes the node app is already running using pm2 and is named app in the pm2 process, but any other server can be restarted too*

## Local Side
Once you've committed and pushed some changes to the git repository, you can can call this script using a command sent through ssh.

``$ ssh -T root@yourserver ./update_server.sh``

*ssh -T lets you run a single command through the ssh tunnel, in this case we're executing the script update_server.sh*

That's it! Your server pulls the latest changes and restarts!!

If you know of an easier solution please let me know in the comments.