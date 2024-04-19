import { Ctx, Start, Update } from "nestjs-telegraf";
import { StartScene } from "./scenes/start.scene";
import { SceneContext } from "telegraf/typings/scenes";

@Update()
export class AppUpdate
{
    constructor(
        private readonly startScene: StartScene
    ) { }

    @Start()
    async handleStart(@Ctx() ctx: SceneContext) {
        ctx.reply('Hello!')
        ctx.scene.enter('start');
    }
}