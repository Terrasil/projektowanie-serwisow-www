var mouseover = document.getElementById("mouseover");
mouseover.addEventListener("mouseover", funkcjaMouseOver);
function funkcjaMouseOver() {
    mouseover.innerHTML += "Mouse Over ";
}
    var removemouseover = document.getElementById("removemouseover");
    removemouseover.addEventListener("click", funkcjaRemoveMouseOver);
    function funkcjaRemoveMouseOver() {
        mouseover.removeEventListener("mouseover", funkcjaMouseOver)
    }
    var addmouseover = document.getElementById("addmouseover");
    addmouseover.addEventListener("click", funkcjaAddMouseOver);
    function funkcjaAddMouseOver() {
        mouseover.addEventListener("mouseover", funkcjaMouseOver);
    }

var mouseout = document.getElementById("mouseout");
mouseout.addEventListener("mouseout", funkcjaMouseOut);
function funkcjaMouseOut() {
    mouseout.innerHTML += "Mouse Out ";
}
    var removemouseout = document.getElementById("removemouseout");
    removemouseout.addEventListener("click", funkcjaRemoveMouseOut);
    function funkcjaRemoveMouseOut() {
        mouseout.removeEventListener("mouseout", funkcjaMouseOut)
    }
    var addmouseout = document.getElementById("addmouseout");
    addmouseout.addEventListener("click", funkcjaAddMouseOut);
    function funkcjaAddMouseOut() {
        mouseout.addEventListener("mouseout", funkcjaMouseOut);
    }

var mousemove = document.getElementById("mousemove");
mousemove.addEventListener("mousemove", funkcjaMouseMove);
function funkcjaMouseMove() {
    mousemove.innerHTML += "Mouse Move ";
}
    var removemousemove= document.getElementById("removemousemove");
    removemousemove.addEventListener("click", funkcjaRemoveMouseMove);
    function funkcjaRemoveMouseMove() {
        mouseout.removeEventListener("mouseout", funkcjaMouseMove)
    }
    var addmousemove = document.getElementById("addmousemove");
    addmousemove.addEventListener("click", funkcjaAddMouseMove);
    function funkcjaAddMouseMove() {
        mouseout.addEventListener("mouseout", funkcjaMouseMove);
    }


var mouseup = document.getElementById("mouseup");
mouseup.addEventListener("mouseup", funkcjaMouseUp);
function funkcjaMouseUp() {
    mouseup.innerHTML += "Mouse Up ";
}
    var removemouseup= document.getElementById("removemouseup");
    removemouseup.addEventListener("click", funkcjaRemoveMouseUp);
    function funkcjaRemoveMouseUp() {
        mouseup.removeEventListener("mouseup", funkcjaMouseUp)
    }
    var addmouseup = document.getElementById("addmouseup");
    addmouseup.addEventListener("click", funkcjaAddMouseUp);
    function funkcjaAddMouseUp() {
        mouseup.addEventListener("mouseup", funkcjaMouseUp);
    }


var click = document.getElementById("click");
click.addEventListener("click", funkcjaClick);
function funkcjaClick() {
    click.innerHTML += "Click ";
}
    var removeclick= document.getElementById("removeclick");
    removeclick.addEventListener("click", funkcjaRemoveClick);
    function funkcjaRemoveClick() {
        click.removeEventListener("click", funkcjaClick)
    }
    var addclick = document.getElementById("addclick");
    addclick.addEventListener("click", funkcjaAddClick);
    function funkcjaAddClick() {
        click.addEventListener("click", funkcjaClick);
    }

var dblclick = document.getElementById("dblclick");
dblclick.addEventListener("dblclick", funkcjaDoubleClick);
function funkcjaDoubleClick() {
    dblclick.innerHTML += "Double Click ";
}
    var removedblclick= document.getElementById("removedblclick");
    removedblclick.addEventListener("click", funkcjaRemoveDoubleClick);
    function funkcjaRemoveDoubleClick() {
        dblclick.removeEventListener("dblclick", funkcjaDoubleClick)
    }
    var adddblclick = document.getElementById("adddblclick");
    adddblclick.addEventListener("click", funkcjaAddDoubleClick);
    function funkcjaAddDoubleClick() {
        dblclick.addEventListener("dblclick", funkcjaDoubleClick);
    }

var scroll = document.getElementById("scroll");
window.addEventListener("scroll", funkcjaScroll);
function funkcjaScroll() {
    scroll.innerHTML += "Scroll ";
}
    var removescroll= document.getElementById("removescroll");
    removescroll.addEventListener("click", funkcjaRemoveScroll);
    function funkcjaRemoveScroll() {
        window.removeEventListener("scroll", funkcjaScroll)
    }
    var addscroll = document.getElementById("addscroll");
    addscroll.addEventListener("click", funkcjaAddScroll);
    function funkcjaAddScroll() {
        window.addEventListener("scroll", funkcjaScroll);
    }

var keydown = document.getElementById("keydown");
window.addEventListener("keydown", funkcjaKeyDown);
function funkcjaKeyDown() {
    keydown.innerHTML += "Key Down ";
}
    var removekeydown= document.getElementById("removekeydown");
    removekeydown.addEventListener("click", funkcjaRemoveKeyDown);
    function funkcjaRemoveKeyDown() {
        window.removeEventListener("keydown", funkcjaKeyDown)
    }
    var addkeydown= document.getElementById("addkeydown");
    addkeydown.addEventListener("click", funkcjaAddKeyDown);
    function funkcjaAddKeyDown() {
        window.addEventListener("keydown", funkcjaKeyDown);
    }


var resize = document.getElementById("resize");
window.addEventListener("resize", funkcjaResize);
function funkcjaResize() {
    resize.innerHTML += "Resize ";
}
    var removeresize= document.getElementById("removeresize");
    removeresize.addEventListener("click", funkcjaRemoveResize);
    function funkcjaRemoveResize() {
        window.removeEventListener("resize", funkcjaResize)
    }
    var addresize = document.getElementById("addresize");
    addresize.addEventListener("click", funkcjaAddResize);
    function funkcjaAddResize() {
        window.addEventListener("resize", funkcjaResize);
    }



var load = document.getElementById("load");
window.addEventListener("load", funkcjaLoad);
function funkcjaLoad() {
    load.innerHTML += "Load ";
}
    var removeload= document.getElementById("removeload");
    removeload.addEventListener("click", funkcjaRemoveLoad);
    function funkcjaRemoveLoad() {
        window.removeEventListener("load", funkcjaLoad)
    }
    var addreload = document.getElementById("addreload");
    addreload.addEventListener("click", funkcjaAddLoad);
    function funkcjaAddLoad() {
        window.addEventListener("load", funkcjaLoad);
    }