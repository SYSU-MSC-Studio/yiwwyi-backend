import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Piece } from 'src/pieces/piece.entity';

export enum VideoType {
  VOD = 'vod',
  LIVE = 'live',
}

@Entity()
export class Video {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: VideoType,
  })
  type: VideoType;

  @Column()
  site: string; // drop enum

  @Column()
  videoID: string;

  @Column('text')
  name: string;

  @Column()
  url: string;

  @OneToMany(type => Piece, piece => piece.video)
  pieces: Piece;
}