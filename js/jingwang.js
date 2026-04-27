//alert("这是一个弹窗警告");
window.onload=function(){
    //获取imglist
    var imglist = document.getElementById("imglist");
    //获取页面中imglist下所有的img标签
    var imgArr = imglist.getElementsByTagName("img");
    //设置imglist的宽度
    imglist.style.width = 1920*imgArr.length+"px";

    //切换按钮居中
	var indicator = document.getElementById("indicator");
	var bannercontainer = document.getElementById("bannercontainer");
	indicator.style.left = (bannercontainer.offsetWidth - indicator.offsetWidth)/2 + "px";

    //切换图片
    var index = 0;
    var allA = indicator.getElementsByTagName("a");
    allA[index].style.backgroundColor = "white";
    for(var i=0; i<allA.length ; i++){
        allA[i].num = i;
        allA[i].onclick = function(){
            index = this.num;
            imglist.style.left = -1920*index + "px";
            setA();
        };
    }
    function setA(){
        for(var i=0 ; i<allA.length ; i++){
            allA[i].style.backgroundColor = "#7f8487";
        }

        allA[index].style.backgroundColor = "white";
    };

    //定时切换
    autoChange();
    function autoChange(){
        setInterval(function(){
            index++;
            move(imglist , "left" , -1920*index , 20 , function(){

            });

        },3000);
    }

};