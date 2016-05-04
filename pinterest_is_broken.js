function fixPinterest() {
    console.log("Pinterest is broken");
    var nags = document.getElementsByClassName("InlineSignup");
    for (var i = 0; i < nags.length; i++) {
        console.log("Removing inline signup:" + nags[i]);
        nags[i].parentNode.removeChild(nags[i]);
    }
    var nags = document.getElementsByClassName("Nags");
    for (var i = 0; i < nags.length; i++) {
        console.log("Removing nags:" + nags[i]);
        nags[i].parentNode.removeChild(nags[i]);
    }
    var nags = document.getElementsByClassName("ModalManager");
    for (var i = 0; i < nags.length; i++) {
        console.log("Removing modal manager:" + nags[i]);
        nags[i].parentNode.removeChild(nags[i]);
    }
    console.log("body class:" + document.body.className);
    document.body.className =
        document.body.className.replace(/\bnoScroll\b/,'');
    console.log("after body class:" + document.body.className);
    console.log("Done");
}

setInterval(fixPinterest, 2000);
