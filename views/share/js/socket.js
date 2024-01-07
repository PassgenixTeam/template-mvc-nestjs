import "../../lib/socket.io-4.3.2/socket.io.min.js";
import { APP_DOMAIN, SOCKET_GATEWAY_PORT } from "../../share/js/config.js";

export function connect(namespace = "") {
	return io.connect(`${APP_DOMAIN}:${SOCKET_GATEWAY_PORT}/${namespace}`);
}
