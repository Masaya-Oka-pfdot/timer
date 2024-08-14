'use strict'
//pempemのtimerをjavascriptで動的に管理するためのファイルです。
//各桁のIDを取得
const LL= document.getElementById("ll");
const LR= document.getElementById("lr");
const RL= document.getElementById("rl");
const RR = document.getElementById("rr");
//startボタンIDを取得
const START = document.getElementById("start");
//clearボタンIDを取得
const CLEAR = document.getElementById("clear");
//stopボタンIDを取得
const STOP = document.getElementById("stop");
// カウントを操作する全体の関数を定義
function operateCountDown(){
  //カウントダウン関数を定義
  function countDown(){
    var llText = LL.innerText;
    var lrText = LR.innerText;
    var rlText = RL.innerText;
    var rrText = RR.innerText;
    var lNumber = Number(llText)*10+Number(lrText);
    var rNumber = Number(rlText)*10+Number(rrText);
    if(lNumber === 0 && rNumber === 0){
      clearInterval(setIntervalOfCount);
      return;
    }
    else if(rNumber === 0){
      lNumber--;
      rNumber=59;
      LL.innerText = (lNumber-lNumber%10)/10;
      LR.innerText = lNumber%10;
      RL.innerText = (rNumber-rNumber%10)/10;
      RR.innerText = rNumber%10;
    }
    else{
      rNumber--;
      RL.innerText = (rNumber-rNumber%10)/10;
      RR.innerText = rNumber%10;
    }
  }
  // カウントダウン関数を一秒ごとに呼び出し、ボタンの切り替えをする
  const setIntervalOfCount = setInterval(countDown,1000);
  START.classList.add("hide");
  STOP.classList.remove("hide");
  // カウントを止める関数を定義
  function countStop(){
    clearInterval(setIntervalOfCount);
    START.classList.remove("hide");
    STOP.classList.add("hide");
  
  }
  //stopボタンにストップイベントを追加
  STOP.addEventListener('click',countStop,false);
}
//startボタンにカウントダウンスタートイベントを追加
START.addEventListener('click',operateCountDown,false);
//カウントクリア関数を定義
function countClear(){
  LL.innerText=0;
  LR.innerText=0;
  RL.innerText=0;
  RR.innerText=0;
}
//clearボタンにクリアイベントを追加
CLEAR.addEventListener('click',countClear,false);
//ストップ関数を定義

//数値操作ボタンのIDを取得
const LL_UP = document.getElementById("ll-up");
const LR_UP = document.getElementById("lr-up");
const RL_UP = document.getElementById("rl-up");
const RR_UP = document.getElementById("rr-up");
const LL_DOWN = document.getElementById("ll-down");
const LR_DOWN = document.getElementById("lr-down");
const RL_DOWN = document.getElementById("rl-down");
const RR_DOWN = document.getElementById("rr-down");
//ボタンと操作対象の数値の組み合わせ配列
const UP_BUTTON_LIST = [
  [LL_UP,LL],
  [LR_UP,LR],
  [RL_UP,RL],
  [RR_UP,RR]
];
const DOWN_BUTTON_LIST =[
  [LL_DOWN,LL],
  [LR_DOWN,LR],
  [RL_DOWN,RL],
  [RR_DOWN,RR],
];
//UPBUTTONに数字増加イベント付与
for(let i = 0;i<UP_BUTTON_LIST.length;i++){
  var x = UP_BUTTON_LIST[i][0];
  x.addEventListener('click',() => {
    var variable = Number(UP_BUTTON_LIST[i][1].innerHTML);
    if(variable===9){
      variable = 0;
    }else {variable += 1;}
    UP_BUTTON_LIST[i][1].innerHTML=variable;
  });
}
//DOWNBUTTONに数字減少イベント付与
for(let i = 0;i<DOWN_BUTTON_LIST.length;i++){
  var x = DOWN_BUTTON_LIST[i][0];
  x.addEventListener('click',() => {
  var variable = Number(DOWN_BUTTON_LIST[i][1].innerHTML);
  if(variable===0){
    variable = 9;
  }else {variable -= 1;}
  DOWN_BUTTON_LIST[i][1].innerHTML=variable;
  })
}
//終わり
