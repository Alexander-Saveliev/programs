"use strict";


var from = 2,
    to   = 10,
    i;

if (from < 2)
    from = 2;
else if (from % 2 != 0)
    from++;


for (i = from; i <= to; i += 2)
    console.log(i);
