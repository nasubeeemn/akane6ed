'use strict';

// second: 遅延時間を算出する
function second(){
  return Math.floor(Math.random() * 3000);
}

// 指定またはランダム時間待つ
function sleep(){
  return new Promise((resolve) => {
      setTimeout(resolve, second());
  });
}

// sleep()時間後に、メッセージを送信する
function promiseSend(msg, text){
  sleep()
  .then(()=>{
    msg.send(text);
  });
}

/*
// delaySend: ランダム時間後に送信する
// promiseSendに置き換え
function delaySend(msg,text){
  setTimeout(()=>{
    msg.send(text);
  }, second());
}
*/

module.exports = (robot) => {

robot.hear(/つかれた/i, (msg) => {
  sleep()
  .then(()=>{
    msg.send('がんばって');
    return sleep();
  }).then(()=>{
    msg.send('でも');
    return sleep();
  }).then(()=>{
    msg.send('この試験受かったら');
    return sleep();
  }).then(()=>{
    msg.send('社会人だよ');
  });
});

/* return new Promise を使った場合
robot.hear(/つかれた/i, (msg) => {
  new Promise((resolve) => {
    resolve(msg.send('がんばって'));
  }).then(()=>{
    return new Promise((resolve)=>{
      resolve(msg.send('でも'));
    });
  }).then(()=>{
    return new Promise((resolve)=>{
      resolve(msg.send('この試験受かったら'));
    });
  }).then(()=>{
    msg.send('社会人だよ');
  });
});
*/

/* return new Promise を使わない
robot.hear(/つかれた/i, (msg) => {
  new Promise((resolve) => {
    resolve(promiseSend(msg, 'がんばって'));
  }).then(()=>{
    new Promise((resolve)=>{
      resolve(promiseSend(msg, 'でも'));
    }).then(()=>{
      new Promise((resolve)=>{
        resolve(promiseSend(msg, 'この試験受かったら'));
      }).then(()=>{
        promiseSend(msg, '社会人だよ');
      });
    });
  });
});
*/
/* return new Promise を使わない&msg.sendで直接送信する
robot.hear(/つかれた/i, (msg) => {
  new Promise((resolve) => {
    resolve(msg.send('がんばって'));
  }).then(()=>{
    new Promise((resolve)=>{
      resolve(msg.send('でも'));
    }).then(()=>{
      new Promise((resolve)=>{
        resolve(msg.send('この試験受かったら'));
      }).then(()=>{
        msg.send('社会人だよ');
      });
    });
  });
});
*/


const gyu = `
ぎゅーーーーーーーーー
ーーーーーーーーーーー
ーーーーーーーーーーー
`;
    robot.hear(/ぎゅってして/i, (msg) => {
      promiseSend(msg, gyu);
    });

  robot.hear(/愛情たっぷり？/i, (msg) => {
    promiseSend(msg, '首絞めすぎた');
  });

  robot.hear(/殺す気か！？/i, (msg) => {
    promiseSend(msg, 'ウケるー');
  });

  var i = 0;
  robot.hear(/ウケるなよ/i, (msg) => {
    setTimeout(()=>{
      if(i==0){
        msg.send('ちゅ');
        i++;
      };
    }, second());
  });

  robot.hear(/おや/i, (msg) => {
    promiseSend(msg, 'たまにはね');
  });

  robot.hear(/会いたくなった。つらい/i, (msg) => {
    promiseSend(msg, 'ウケるー');
  });


  robot.hear(/こんばんわ/i, (msg) => {
    promiseSend(msg, '今日はありがとう');
  });

  robot.hear(/お疲れさま/i, (msg) => {
    promiseSend(msg, 'ハネテル君！');
  });

  robot.hear(/何それ？/i, (msg) => {
    promiseSend(msg, 'あだ名。とろぱぱ君の。');
  });

const neguse = `
だって寝ぐせ
すごいから
`;
  robot.hear(/変なあだ名笑/i, (msg) => {
    promiseSend(msg, neguse);
  });
};

