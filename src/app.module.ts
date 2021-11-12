import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoutesModule } from './routes/routes.module';
import { OmarModule } from './omar/omar.module';
import { VitorModule } from './vitor/vitor.module';
import { VitorModule } from './vitor/vitor.module';

@Module({
  imports: [RoutesModule, OmarModule, VitorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
