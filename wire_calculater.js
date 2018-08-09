//基準点のサイズ一辺
var length = 860;

//座標点
var point_s = [3];
var point_e = [3];

//各座標点と基準三点との距離
var dis_s_x, dis_s_y, dis_s_z;
var dis_e_x, dis_e_y, dis_e_z;

//二点における距離の差
var dis_x, dis_y, dis_z;

function OF(){
  get();
  calcurater();
  result();
}

function get(){
  point_s[0] = Number(document.getElementById('X1').value);
  point_s[1] = Number(document.getElementById('Y1').value);
  point_s[2] = Number(document.getElementById('Z1').value);

  point_e[0] = Number(document.getElementById('X2').value);
  point_e[1] = Number(document.getElementById('Y2').value);
  point_e[2] = Number(document.getElementById('Z2').value);
}

function calcurater(){
//X
  dis_s_x = Math.sqrt((point_s[0]-0)**2 + (point_s[1]-0)**2 + (point_s[2]-0)**2);
  dis_e_x = Math.sqrt((point_e[0]-0)**2 + (point_e[1]-0)**2 + (point_e[2]-0)**2);
  dis_x = dis_e_x - dis_s_x;

//Y
  dis_s_y = Math.sqrt((point_s[0]-length*1)**2 + (point_s[1]-0)**2 + (point_s[2]-0)**2);
  dis_e_y = Math.sqrt((point_e[0]-length*1)**2 + (point_e[1]-0)**2 + (point_e[2]-0)**2);
  dis_y = dis_e_y - dis_s_y;

//Z
  dis_s_z = Math.sqrt((point_s[0]-length*0.5)**2 + (point_s[1]-length*Math.sqrt(3))**2 + (point_s[2]-0)**2);
  dis_e_z = Math.sqrt((point_e[0]-length*0.5)**2 + (point_e[1]-length*Math.sqrt(3))**2 + (point_e[2]-0)**2);
  dis_z = dis_e_z - dis_s_z;
}

function result(){
  document.getElementById("result").innerHTML = "G1 X" + dis_x + " Y" + dis_y + " Z" + dis_z + "<br>G29";
}


function next(){
  document.getElementById("X1").value = document.getElementById("X2").value;
  document.getElementById("Y1").value = document.getElementById("Y2").value;
  document.getElementById("Z1").value = document.getElementById("Z2").value;

  document.getElementById("X2").value = "";
  document.getElementById("Y2").value = "";
  document.getElementById("Z2").value = "";
}
