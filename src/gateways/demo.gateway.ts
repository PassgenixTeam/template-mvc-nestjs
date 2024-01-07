import { MessageBody, OnGatewayInit, SubscribeMessage, WebSocketGateway } from "@nestjs/websockets";
import { SOCKET_GATEWAY_PORT } from "src/app.config";
import { Server } from "socket.io";

@WebSocketGateway(SOCKET_GATEWAY_PORT, { namespace: "demo", cors: true })
export class DemoGateway implements OnGatewayInit {
	afterInit(server: Server) {
		setInterval(() => {
			console.log("Emitting server-test event");
			server.emit("server-test", Math.random());
		}, 1000);
	}

	@SubscribeMessage("test")
	handleMessage(@MessageBody() data: string): string {
		return data;
	}
}
