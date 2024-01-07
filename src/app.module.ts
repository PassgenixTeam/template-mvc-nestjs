import { HomeController } from "@controllers/home.controller";
import { Page1Controller } from "@controllers/page-1.controller";
import { DemoGateway } from "@gateways/demo.gateway";
import { Module } from "@nestjs/common";

@Module({
	imports: [],
	controllers: [HomeController, Page1Controller],
	providers: [DemoGateway],
})
export class AppModule {}
