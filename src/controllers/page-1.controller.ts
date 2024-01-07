import { Controller, Get, Render } from "@nestjs/common";

@Controller("page-1")
export class Page1Controller {
	@Get()
	@Render("page-1/index.ejs")
	index() {
		return {
			message: "Page 1",
		};
	}
}
