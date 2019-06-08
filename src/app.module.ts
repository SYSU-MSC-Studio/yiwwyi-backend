import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MySQLConfigLocal } from 'env/mysql.config';
import { Connection } from 'typeorm';
import { VideosModule } from './videos/videos.module';
import { PiecesModule } from './pieces/pieces.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      ...MySQLConfigLocal,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    VideosModule,
    PiecesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
