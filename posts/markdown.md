---
title: Node.js fs-extra
date: '2021-03-23'
---
Replacement for `fs`
============

`fs` is no longer funtional. 

`fs-extra` is the replacement.

`fs-extra` adds file system methods that aren't included in the native `fs` module and adds promise support to the `fs` methods. It also uses `graceful-fs` to prevent `EMFILE` errors. It should be a drop in replacement for `fs`.

Installation
============

<span style="background-color: lightgray">`npm install fs-extra`</span>


Usage
============

`fs-extra` is a drop in replacement for native `fs`. All methods in `fs` are attached to `fs-extra`. All `fs` methods return promises if the callback isn't passed.

You don't ever need to include the original `fs` module again:

<span style="background-color: lightgray">`const fs = require('fs') // this is no longer necessary`</span>

You can now do this:


<span style="background-color: lightgray">`const fs = require('fs-extra')`</span>


If you prefer to make it clear that you're using `fs-extra` and not `fs`, you may want to name your `fs` variable `fse` like so:

<span style="background-color: lightgray">`const fse = require('fs-extra')`</span>

You can also keep both, but it's redundant:

<span style="background-color: lightgray">`const fs = require('fs')`</span>

<span style="background-color: lightgray">`const fse = require('fs-extra')`</span>



