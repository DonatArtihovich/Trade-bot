import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import { AppUpdate } from './app.update';
import { StartScene } from './scenes/start.scene';
import * as LocalSession from 'telegraf-session-local'

const session = new LocalSession();
@Module({
  imports: [
      TelegrafModule.forRoot({
      middlewares: [session.middleware()],
      token: '6561361271:AAHJRuIA_q_IXzqZSv1r75oMSC68Vuq2ixQ'
    })
  ],
  controllers: [],
  providers: [AppUpdate, StartScene],
})
export class AppModule {}
