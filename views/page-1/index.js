import { connect } from "../share/js/socket.js";

const demoSocket = connect("demo");
demoSocket.on("connect", async function () {
	console.log("emit demo/test");
	const a = await demoSocket.emitWithAck("test", "xxxxxxx");
	console.log(a);
});
