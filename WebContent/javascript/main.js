var userClick_circle = [5]; 
var X = [5];
var O = [];
var buttonbox= [
		["","",""],
		["","X",""],
		["","",""]
]
//上方 buttonbox 沒有 ;
//關閉按鈕不讓使用者在按
function close() {
	for(var k=1; k<=9; k++)
	document.getElementById("bt"+k).disabled=true;
	alert("gameover");
}
//檢查XX使否贏了
function checkwin() {
	for(var k=0; k<=2; k++)
	{
		//行
		if(buttonbox[k][0]=="X" && buttonbox[k][1]=="X" && buttonbox[k][2]=="X")
		close();  // 遊戲結束關掉所有按鈕避免再次按下
		//列
		if(buttonbox[0][k]=="X" && buttonbox[1][k]=="X" && buttonbox[2][k]=="X")
		close();
	}
	
	//左斜
	if(buttonbox[0][0]=="X" && buttonbox[1][1]=="X" && buttonbox[2][2]=="X")
	close();
	//右斜
	if(buttonbox[0][2]=="X" && buttonbox[1][1]=="X" && buttonbox[2][0]=="X")
	close();
}

function call(number) {
	if(number==1) buttonbox[0][0]="O";
	if(number==2) buttonbox[0][1]="O";
	if(number==3) buttonbox[0][2]="O";
	if(number==4) buttonbox[1][0]="O";
	if(number==6) buttonbox[1][2]="O";
	if(number==7) buttonbox[2][0]="O";
	if(number==8) buttonbox[2][1]="O";
	if(number==9) buttonbox[2][2]="O";
	
	document.getElementById("bt"+5).disabled=true;
	var mybutton_O = document.getElementById("bt"+number);
	document.getElementById("bt"+number).disabled=true;
	var mybutton_X ;
	mybutton_O.style = "background-image: url('image/circle.png')";	
	userClick_circle.push(number);
	O.push(number);
	
//-----------AI-------------
// XX可以贏的路
var check=5;
	
// 159  
if(buttonbox[0][0]!="O" && buttonbox[1][1]!="O" && buttonbox[2][2]!="O")
{
	if(buttonbox[0][0]=="")
	{
		check=1;
	}
	else if(buttonbox[2][2]=="")
	{
		check=9;
	}
}
// 357  
else if(buttonbox[0][2]!="O" && buttonbox[1][1]!="O" && buttonbox[2][0]!="O")
{
	if(buttonbox[0][2]=="")
	{
		check=3;
	}
	else if(buttonbox[2][0]=="")
	{
		check=7;
	}
}
// 456  
else if(buttonbox[1][0]!="O" && buttonbox[1][1]!="O" && buttonbox[1][2]!="O")
{
	if(buttonbox[1][0]=="")
	{
		check=4;
	}
	else if(buttonbox[1][2]=="")
	{
		check=6;
	}
}
// 258
else if(buttonbox[0][1]!="O" && buttonbox[1][1]!="O" && buttonbox[2][1]!="O")
{
	if(buttonbox[0][1]=="")
	{
		check=2;
	}
	else if(buttonbox[2][1]=="")
	{
		check=8;
	}
}
else
{
	//最後沒有人贏需要補上最後一個XX
	     if(buttonbox[0][0]=="") check=1;
	else if(buttonbox[0][1]=="") check=2;
	else if(buttonbox[0][2]=="") check=3;
	else if(buttonbox[1][0]=="") check=4;
	else if(buttonbox[1][2]=="") check=6;
	else if(buttonbox[2][0]=="") check=7;
	else if(buttonbox[2][1]=="") check=8;
	else if(buttonbox[2][2]=="") check=9;
	alert("平局");
	close();
}
			if(check==1) buttonbox[0][0]="X";
			if(check==2) buttonbox[0][1]="X";
			if(check==3) buttonbox[0][2]="X";
			if(check==4) buttonbox[1][0]="X";
			if(check==6) buttonbox[1][2]="X";
			if(check==7) buttonbox[2][0]="X";
			if(check==8) buttonbox[2][1]="X";
			if(check==9) buttonbox[2][2]="X";

			checkwin(); //判斷陣列XX贏			
			X.push(check);
			userClick_circle.push(check);
			mybutton_X=document.getElementById("bt"+check);
			document.getElementById("bt"+check).disabled=true;
			mybutton_X.style = "background-image: url('image/fork.png')";	
  }
