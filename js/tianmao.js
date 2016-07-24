$(function(){
	// 未解决：点击滑到下一个，button边框
	var sp_rights=$(".sp_right")[0];
	var splis=$("li",sp_rights);
	var imgs=$(".imgmt");
	var banner_box=$(".banner_box")[0];
	var bimgs=$("img",banner_box);
	var b_btnL=$(".b_btnL")[0];
	var b_btnR=$(".b_btnR")[0];
	var nav3_mid=$(".nav3_mid")[0];
	var blis=$("li",nav3_mid);
	var nav3_out=$(".nav3_out")[0];
	console.log(nav3_out)

	
	var num=0;
	var flag=true;
	// console.log(blis);

	// 猫头选项卡
	for(var i=0;i<splis.length;i++){
		splis[i].index=i;
		splis[i].onmouseover=function(){
			imgs[this.index].style.display="block";
			animate(imgs[this.index],{top:-10});
		}
		splis[i].onmouseout=function(){
			imgs[this.index].style.display="none";
			animate(imgs[this.index],{top:0});
		}
	}

	// banner底部选项卡
	for(var i=0;i<blis.length;i++){
		blis[i].index=i;
		blis[i].onclick=function(){
			// alert(1);
			for(var j=0;j<blis.length;j++){
				animate(bimgs[j],{opacity:0});
				blis[j].style.background="#A3A1A3"
			}
			animate(bimgs[this.index],{opacity:1});
			blis[this.index].style.background="white";
			num=this.index;
		}
	}


	// banner轮播
	blis[0].style.background="white";

	// animate(bimgs[0],{opacity:1});
	// console.log(bimgs[0]);
	bimgs[0].style.zIndex=1;
	t=setInterval(moveR,2000);
	// 移入移出
	// 移入移出事件写完底部选项卡才可以完全实现，因为事件函数未停止
	// btnL,btnR,ul,li,banner需在一个大盒子里
	nav3_mid.onmouseover=function(){
		clearInterval(t);
	}
	nav3_mid.onmouseout=function(){
		t=setInterval(moveR,2000);
	}

	function moveR(){
		num++;
		if(num==bimgs.length){
			num=0;
		}
		for(var i=0;i<bimgs.length;i++){
			blis[i].style.background="#A3A1A3";
			animate(bimgs[i],{opacity:0},function(){
				flag=true;
			})
		}
		blis[num].style.background="white";
		animate(bimgs[num],{opacity:1},function(){
			flag=true;
		})
	}
	function moveL(){
		num--;
		if(num<0){
			num=bimgs.length-1;
		}
		for(var i=0;i<bimgs.length;i++){
			blis[i].style.background="#A3A1A3";
			animate(bimgs[i],{opacity:0},function(){
				flag=true;
			})
		}
		blis[num].style.background="white";
		animate(bimgs[num],{opacity:1},function(){
			flag=true;
		})
	}

	// 左右箭头
	b_btnR.onclick=function(){
		if(flag){
			flag=false;
			moveR();
		}
	}
	b_btnL.onclick=function(){
		if(flag){
			flag=false;
			moveL();
		}
	}

	// 左滑块
	var floor0=$(".floor0");
	var flag=true;
	var floor0Arr=[];
	for(var i=0;i<floor0.length;i++){
		floor0Arr.push(floor0[i].offsetTop);
	}
	var louceng=$(".louceng")[0];
	
	var lclis=$("li",louceng);
	
	for(var i=0;i<lclis.length;i++){
		//console.log(lclis.length);
		lclis[i].index=i;
		lclis[i].onclick=function(){
			flag=false;
			for(var j=0;j<lclis.length;j++){
				lclis[j].style.background="#626262";
			}
			
			lclis[this.index].style.background="red";
			animate(document.body,{scrollTop:floor0Arr[this.index]},function(){
				flag=true;
			})
			animate(document.documentElement,{scrollTop:floor0Arr[this.index]},function(){
				flag=true;
			});
		}
	}

	// 返回顶部
	var backtop=$(".backtop")[0];
	
	backtop.onclick=function(){
		animate(document.body,{scrollTop:0});
		animate(document.documentElement,{scrollTop:0});
	}

	// 搜索框
	var sflag=true;
	var search=$(".search")[0];
	// console.log(scrolltop);
	var ch=document.documentElement.clientHeight;
	window.onscroll=function(){
		var louceng=$(".louceng")[0];
		var obj=document.body.scrollTop?document.body:document.documentElement;
		var scrolltop=obj.scrollTop;
		
		if(ch+scrolltop>=floor0Arr[0]){
			if(sflag){
				sflag=false;				
				animate(search,{top:0});
				animate(louceng,{left:5});
			}

		}else{
			if(!sflag){
			sflag=true;
			animate(search,{top:-50});
			animate(louceng,{left:-41});
			}
		}
	
	// 左边滑块变色
	  var louceng=$(".louceng")[0];
	
	   var lclis=$("li",louceng);
	   if(!flag){
	   	return;
	   }
	   for(var i=0;i<lclis.length;i++){
		  if(ch+scrolltop>floor0Arr[i]+200){
				for(var j=0;j<lclis.length;j++){
					lclis[j].style.background="#626262";
				}
				lclis[i].style.background="red";
			}
	    }
	}

	// 头部选项卡
	var mr_shour=$(".mr_shour")[0];
	var mr_shoua=$(".mr_shoua")[0];
	mr_shour.onmouseover=function(){
		mr_shoua.style.display="block";
	}
	mr_shour.onmouseout=function(){
		mr_shoua.style.display="none";
	}

	var mr_wor=$(".mr_wor")[0];

	var mr_woa=$(".mr_woa")[0];
	console.log(mr_woa);
	mr_wor.onmouseover=function(){
		mr_woa.style.display="block";
	}
	mr_wor.onmouseout=function(){
		mr_woa.style.display="none";
	}

	var mr_imgr=$(".mr_imgr")[0];

	var mr_imga=$(".mr_imga")[0];
	console.log(mr_woa);
	mr_imgr.onmouseover=function(){
		mr_imga.style.display="block";
	}
	mr_imgr.onmouseout=function(){
		mr_imga.style.display="none";
	}

	var mr_sjr=$(".mr_sjr")[0];

	var mr_sjb=$(".mr_sjb")[0];
	mr_sjr.onmouseover=function(){
		mr_sjb.style.display="block";
	}
	mr_sjr.onmouseout=function(){
		mr_sjb.style.display="none";
	}

	var mr_wzr=$(".mr_wzr")[0];
	var mr_wzb=$(".mr_wzb")[0];
	mr_wzr.onmouseover=function(){
		mr_wzb.style.display="block";
	}
	mr_wzr.onmouseout=function(){
		mr_wzb.style.display="none";
	}

	var nav3_he0=$(".nav3_he0");
	var nav3_he1=$(".nav3_he1")[0];
	var nav3_he2=$(".nav3_he2")[0];
	// nav3_he0.onmouseover=function(){
	// 	nav3_he1.style.display="block";
	// 	nav3_he2.style.display="block";
	// }
	// nav3_he0.onmouseout=function(){
	// 	nav3_he1.style.display="none";
	// 	nav3_he2.style.display="none";
	// }

	// var nav3_he01=$(".nav3_he01")[0];
	// var nav3_he1=$(".nav3_he1")[0];
	// var nav3_he2=$(".nav3_he2")[0];
	// nav3_he01.onmouseover=function(){
	// 	nav3_he1.style.display="block";
	// 	nav3_he2.style.display="block";
	// }
	// nav3_he01.onmouseout=function(){
	// 	nav3_he1.style.display="none";
	// 	nav3_he2.style.display="none";
	// }

	for(var i=0;i<nav3_he0.length;i++){
		nav3_he0[i].onmouseover=function(){
			nav3_he1.style.display="block";
			nav3_he2.style.display="block";
		}
		nav3_he0[i].onmouseout=function(){
			nav3_he1.style.display="none";
			nav3_he2.style.display="none";
		}

	}

})