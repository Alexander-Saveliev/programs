"use strict";

var List = [],
    From = 2,
    To = 100,
    Candidate,
    Test;

if (From < 2)
    From = 2;

for (Candidate = From; Candidate <= To; Candidate++) {
    List.push(Candidate);

    for (Test = 2; Test < (Candidate / 2); Test++)
        if (Candidate % Test == 0) {
            List.pop();
            break;
        }
}

alert(List);
