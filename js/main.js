//slider function
(function () {
    var boxObj = document.getElementById("slider_box");
    // 获取左侧按钮
    var btnLeft = document.getElementById("buttonLeft");
    // 获取右侧按钮
    var btnRight = document.getElementById("buttonRight");
    // 获取class为banner的ul
    var ulBanner = document.getElementById("ulObj1");
    // 获取轮播图下面小按钮
    var btnBottom = document.getElementById("ulObj2").getElementsByTagName("li");
    // 获取左右按钮的div
    var divObj = document.getElementById("button");
    //获取左按钮的list
    var leftList = document.querySelector(".content_list").getElementsByTagName("li");

    //获取做按钮的a里面的各个内容
    var leftBox = document.getElementById("buttonLeft").querySelector("div");
    var rightBox = document.getElementById("buttonRight").querySelector("div");
    var leftImg = document.getElementById("buttonLeft").querySelector("img");
    var leftS = document.getElementById("buttonLeft").querySelector("s");
    var leftSpan = document.getElementById("buttonLeft").querySelector(".text>span");
    var rightImg = document.getElementById("buttonRight").querySelector("img");
    var rightS = document.getElementById("buttonRight").querySelector("s");
    var rightSpan = document.getElementById("buttonRight").querySelector(".text>span");
    var leftI = document.getElementById("buttonLeft").querySelector("i");
    var rightI = document.getElementById("buttonRight").querySelector("i");
    // 2 实现下部按钮控制图片移动
    var indexNum = 0;
    for (var i = 0; i <= btnBottom.length - 1; i++) {
        btnBottom[i].setAttribute("index", i);
        btnBottom[i].onmouseover = function () {
            for (var j = 0; j <= btnBottom.length - 1; j++) {
                btnBottom[j].className = "";
            }
            this.className = "current";
            indexNum = this.getAttribute("index");
            ulBanner.style.left = -1920 * indexNum + "px";
            // return indexNum;
        }
    }
    // 注册右侧按钮点击事件 同时与底部按钮关联

    btnRight.onclick = function () {
        // 首先获取ul目前的left值
        var leftValue1 = ulBanner.offsetLeft;
        // 以下部分是右侧按钮与底部小按钮关联
        indexNum++;
        if (indexNum <= btnBottom.length - 1) {
            for (var j = 0; j <= btnBottom.length - 1; j++) {
                btnBottom[j].className = "";
            }
            btnBottom[indexNum].className = "current";
        } else {
            indexNum = 0;
            btnBottom[btnBottom.length - 1].className = "";
            btnBottom[0].className = "current";
        }
        // 实现无限点击
        if (leftValue1 <= -9600) {
            ulBanner.style.left = -1920 + "px";
        } else {
            ulBanner.style.left = leftValue1 - 1920 + "px";
        }

        if (indexNum == 4) {
            rightImg.src = "images/slider_01.jpg";
            rightS.innerHTML = "堡垒前线：破坏";
            rightSpan.innerHTML = "开今日全平台火爆公测";
        } else {
            rightImg.src = "images/slider_0" + (indexNum + 2) + ".jpg";
            rightS.innerHTML = leftList[indexNum + 1].children[1].children[0].innerHTML;
            rightSpan.innerHTML = leftList[indexNum + 1].children[1].children[1].innerHTML;
        }

    }
    // 注册左侧点击事件
    btnLeft.onclick = function leftClick() {
        var leftValue2 = ulBanner.offsetLeft;
        console.log(indexNum);

        indexNum--;
        // 左侧按钮与底部小按钮关联
        console.log(indexNum);
        if (indexNum >= 0) {
            for (var q = 0; q <= btnBottom.length - 1; q++) {
                btnBottom[q].className = "";
            }
            btnBottom[indexNum].className = "current";
        } else {
            indexNum = 4;
            btnBottom[0].className = "";
            btnBottom[4].className = "current";
        }

        // 实现无限点击
        if (leftValue2 > -1920) {
            ulBanner.style.left = -7680 + "px";
        } else {
            ulBanner.style.left = leftValue2 + 1920 + "px";
        }

        if (indexNum == 0) {
            leftImg.src = "images/slider_05.jpg";
            leftS.innerHTML = "神都夜行录";
            leftSpan.innerHTML = "开启妖灵妖大选";
        } else {
            leftImg.src = "images/slider_0" + indexNum + ".jpg";
            leftS.innerHTML = leftList[indexNum - 1].children[1].children[0].innerHTML;
            leftSpan.innerHTML = leftList[indexNum - 1].children[1].children[1].innerHTML;
        }


    }

    //注册左按钮移入显示照片事件
    leftI.onmouseenter = function () {
        leftBox.style.display = "block";
        if (indexNum == 0) {
            leftImg.src = "images/slider_05.jpg";
            leftS.innerHTML = "神都夜行录";
            leftSpan.innerHTML = "开启妖灵妖大选";
        } else {
            leftImg.src = "images/slider_0" + (indexNum) + ".jpg";
            leftS.innerHTML = leftList[indexNum - 1].children[1].children[0].innerHTML;
            leftSpan.innerHTML = leftList[indexNum - 1].children[1].children[1].innerHTML;
        }
    }
    btnLeft.onmouseleave = function () {
        leftBox.style.display = "none";
    }
    //注册右按钮移入显示照片事件
    rightI.onmouseenter = function () {
        rightBox.style.display = "block";
        if (indexNum == 4) {
            rightImg.src = "images/slider_01.jpg";
            rightS.innerHTML = "堡垒前线：破坏";
            rightSpan.innerHTML = "开今日全平台火爆公测";
        } else {
            rightImg.src = "images/slider_0" + (indexNum + 2) + ".jpg";
            rightS.innerHTML = leftList[indexNum + 1].children[1].children[0].innerHTML;
            rightSpan.innerHTML = leftList[indexNum + 1].children[1].children[1].innerHTML;
        }
    }
    btnRight.onmouseleave = function () {
        rightBox.style.display = "none";
    }
    // 3 左右按钮显示与隐藏  轮播图自动播放
    window.onload = function () {
        // clearInterval(timeId);
        // divObj.style.display = "none";
        timeId = setInterval(btnRight.onclick, 5000);
    }
    boxObj.onmouseover = function () {
        // divObj.style.display = "block";
        clearInterval(timeId);
    }
    boxObj.onmouseleave = function () {
        clearInterval(timeId);
        // divObj.style.display = "none";
        timeId = setInterval(btnRight.onclick, 5000);
    }




})();



//tab toggle in new_left sidebar
//---------------------------------------------------------------------
(function () {
    var aList = document.querySelector(".sidebar").querySelectorAll("a");
    var picList = document.querySelector(".game_pic").querySelectorAll("li");
    for (var i = 0; i < aList.length; i++) {
        aList[i].setAttribute("index", i);
        aList[i].onclick = function () {
            for (var j = 0; j < aList.length; j++) {
                aList[j].className = "";
                picList[j].className = "";
            }
            var index = this.getAttribute("index");
            console.log(index);
            this.className = "current_bar";
            picList[index].className = "current_pic";
        }
    }
})();

//button scroll up
// ------------------------------------------------------------
(function () {
    var gameList = document.getElementById("pc_mobi_game_list");
    var pcGame = document.getElementById("pc_mobi_game");
    console.log(pcGame);
    var btn = document.getElementById("scrollup_btn");
    btn.onclick = function () {
        if (this.innerHTML == "查看更多") {
            gameList.style.height = "810px";
            pcGame.style.height = "810px";
            this.innerHTML = "收起";
        } else {
            gameList.style.height = "480px";
            pcGame.style.height = "480px";
            this.innerHTML = "查看更多";
        }
    }
})();


//top hidden table 
(function () {
    var slideUpButton = document.getElementById("slideUp");
    var neteaseGameTable = document.getElementById("neteaseGameTable");
    var tableOpen = document.getElementById("tableOpen");
    var tableOpenI = document.getElementById("tableOpen").querySelector("i");
    var tableOpenP = document.getElementById("tableOpen").querySelector("p");
    slideUpButton.onclick = function () {
        neteaseGameTable.style.display = "none";
        tableOpenI.style.backgroundImage = "url('images/sprite.png')";
        tableOpenI.style.backgroundPosition = "0 0";
        tableOpenI.style.backgroundRepeat = "no-repeat";
        tableOpen.style.backgroundColor = "#cf1132";
        tableOpenP.style.display = "block";
    }
    tableOpen.onclick = function () {
        
        if (neteaseGameTable.style.display == "none") {
            neteaseGameTable.style.display = "block";
            tableOpenI.style.backgroundImage = "url('images/sprite.png')";
            tableOpenI.style.backgroundPosition = "-34px 0";
            tableOpenI.style.backgroundRepeat = "no-repeat";
            tableOpen.style.backgroundColor = "#282b2d";
            tableOpenP.style.display = "none";
        } else {
            neteaseGameTable.style.display = "none";
            tableOpenI.style.backgroundImage = "url('images/sprite.png')";
            tableOpenI.style.backgroundPosition = "0 0";
            tableOpenI.style.backgroundRepeat = "no-repeat";
            tableOpen.style.backgroundColor = "#cf1132";
            tableOpenP.style.display = "block";
        }

    }
})();