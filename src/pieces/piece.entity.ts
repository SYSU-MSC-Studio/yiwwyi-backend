import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Video } from 'src/videos/video.entity';

@Entity()
export class Piece {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  pieceID: number;

  @ManyToOne(type => Video, video => video.pieces)
  video: Video;
}