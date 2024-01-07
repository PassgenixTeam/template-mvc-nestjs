import { connect } from "./share/js/socket.js";

const demoSocket = connect("demo");
demoSocket.on("connect", async function () {
	console.log("emit demo/test");
	const a = await demoSocket.emitWithAck("test", "xxxxxxx");
	console.log(a);
});

demoSocket.on("server-test", function (data) {
	document.getElementById("progressbar").style.width = `${data * 100}%`;
});
