function headerchange(check)
{
	if(check==1)
	{
		var text=document.getElementById('p1').style.color="white";
		var img=document.getElementById('home').src="../images/login/home-hover.png";
	}
	else if(check==2)
	{
		var text=document.getElementById('p2').style.color="white";
		var img=document.getElementById('home-profile').src="../images/login/profile-hover.png";
	}
	else if(check==3)
	{
		var text=document.getElementById('p3').style.color="white";
		var img=document.getElementById('home-society').src="../images/login/society-hover.png";
	}
	else if(check==5)
	{
		var text=document.getElementById('p5').style.color="white";
		var img=document.getElementById('home-notification').src="../images/login/notification-hover.png";
	}
}


function headerorigin(check)
{
	if(check==1)
	{
		var text=document.getElementById('p1').style.color="black";
		var img=document.getElementById('home').src="../images/login/home.png";
	}
	else if(check==2)
	{
		var text=document.getElementById('p2').style.color="black";
		var img=document.getElementById('home-profile').src="../images/login/profile.png";
	}
	else if(check==3)
	{
		var text=document.getElementById('p3').style.color="black";
		var img=document.getElementById('home-society').src="../images/login/society.png";
	}
	else if(check==5)
	{
		var text=document.getElementById('p5').style.color="black";
		var img=document.getElementById('home-notification').src="../images/login/notification.png";
	}
}


var check=0; 

function showhide()
{
	var msg1=document.getElementById("msg1");
	var msg2=document.getElementById("msg2");
	if(check==0)
	{
		msg1.style.height="400px";
		msg2.style.borderBottom="2px solid #BBBBBB"
		check=1;
	}
	else
	{
		msg1.style.height="30px";
		check=0;
	}

}

var society=0;
function changelogo(connectID)
{
	var connect=document.getElementById(connectID);
     connect.innerHTML="";    

  connect.style.pointerEvents="none";
  connect.style.border= "8px solid #f3f3f3";
  connect.style.borderRadius="50%";
  connect.style.borderTop= "8px solid #009688";
  connect.style.borderBottom= "8px solid #009688";
  connect.style.width= "12px";
  connect.style.height= "12px";
  connect.style.margin="0px";
  connect.style.animation= "spin 2s linear 2";
  connect.style.marginRight="18px";
  setTimeout(function(){
  	  connect.style.animationPlayState= "paused";
	  connect.style.border= "0px";
	  connect.style.borderRadius="0px";
	  connect.style.borderTop= "0px";
	  connect.style.borderBottom= "0px";
	  connect.style.animation= "";
	  connect.style.margin="0px";
	  connect.style.padding="0px";
	  connect.style.marginRight="30px";
	  connect.innerHTML="&#x2714";
	  connect.style.color="#009688";
	  connect.style.fontSize="28px"; 
	  connect.style.pointerEvents="none";
	  
	  society=society+1;

	  var noofsociety=document.getElementById("nosociety");
	  var place=parseInt(noofsociety.innerHTML)+1;
	  noofsociety.innerHTML=place;}, 3000);
	
}