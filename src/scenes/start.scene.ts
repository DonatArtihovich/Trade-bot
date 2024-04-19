import { Ctx, Scene, SceneEnter } from "nestjs-telegraf";
import { Context } from "telegraf";


@Scene('start')
export class StartScene {
    @SceneEnter()
    enterScene(@Ctx() ctx: Context)
    {
        ctx.reply('scene')
    }
}