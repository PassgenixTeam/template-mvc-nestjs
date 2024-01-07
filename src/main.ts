import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { join } from "path";
import { NestExpressApplication } from "@nestjs/platform-express";

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule);

	app.enableCors({
		origin: "*",
	});

	app.useStaticAssets(join(__dirname, "..", "views"), {
		prefix: "/views/",
	});
	app.setBaseViewsDir(join(__dirname, "..", "views"));
	app.setViewEngine("ejs");

	await app.listen(3000);
	console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
