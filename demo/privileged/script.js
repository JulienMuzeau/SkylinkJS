window.onload = function() {
  room = document.getElementById('room') || '';
  isPrivileged = document.getElementById('isPrivileged') || '';
  broadcast = document.getElementById('broadcast') || '';
}

function addStatus(stt) {
  var status = document.getElementById('status');
  div = document.createElement('div');
  div.innerHTML = stt;
  status.appendChild(div);
}

function addMessage(msg) {
  var message = document.getElementById('message');
  div = document.createElement('div');
  div.innerHTML = msg;
  message.appendChild(div);
}

function join(){
  SkylinkDemo.joinRoom(room.value,{
    audio: false,
    video: false,
    privileged: isPrivileged.checked
  });
}

function send(){
  SkylinkDemo.sendP2PMessage(broadcast.value);
}

SkylinkDemo.on('incomingMessage', function(message, peerId, peerInfo, isSelf){
  addMessage(peerId+': '+message.content);
  console.log(message);
});

SkylinkDemo.on('peerJoined',function(peerId, peerInfo, isSelf){
  addStatus(peerId+' has joined');
});