console.log('i-am-custom-script')
const ws = new WebSocket('ws://localhost:8888');
setInterval(()=>ws.send("from-client-"+Date.now()),3000);