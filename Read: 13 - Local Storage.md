# HTML5 STORAGE

From your JavaScript code, you’ll access HTML5 Storage through the localStorage object on the global window object.

```
function supports_html5_storage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
}



```

```
if (Modernizr.localstorage) {
  // window.localStorage is available!
} else {
  // no native support for HTML5 storage :(
  // maybe try dojox.storage or a third-party solution
}




```

you will need to use functions like parseInt() or parseFloat() to coerce your retrieved data into the expected JavaScript datatype.

```
interface Storage {
  getter any getItem(in DOMString key);
  setter creator void setItem(in DOMString key, in any data);
};

```
…could be rewritten to use square bracket syntax instead:
```
var foo = localStorage["bar"];
// ...
localStorage["bar"] = foo;


```


If you prefer to use jQuery or some other JavaScript library to register your event handlers, you can do that with the storage event, too.)
```
if (window.addEventListener) {
  window.addEventListener("storage", handle_storage, false);
} else {
  window.attachEvent("onstorage", handle_storage);
};
```
STORAGEEVENT OBJECT

![](https://github.com/MURADALSHORMAN/reading-notes/blob/main/storege.JPG)

How does it work? Every time a change occurs within the game, we call this function:
```
function saveGameState() {
    if (!supportsLocalStorage()) { return false; }
    localStorage["halma.game.in.progress"] = gGameInProgress;
    for (var i = 0; i < kNumPieces; i++) {
	localStorage["halma.piece." + i + ".row"] = gPieces[i].row;
	localStorage["halma.piece." + i + ".column"] = gPieces[i].column;
    }
    localStorage["halma.selectedpiece"] = gSelectedPieceIndex;
    localStorage["halma.selectedpiecehasmoved"] = gSelectedPieceHasMoved;
    localStorage["halma.movecount"] = gMoveCount;
    return true;
}

```

