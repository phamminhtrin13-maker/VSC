let i = 0;


if (i == 0) {
     i = i+1;
}

else {
    i = i-1;
}


while (i < 10) {
    i = i + 1;
}


function CheckValue (i) {
    if (i > 0) {
        return "i > 0";
    }

    else if (i < 0) {
        return "i < 0";
    }

    else  {
        return "i = 0";
    }
}