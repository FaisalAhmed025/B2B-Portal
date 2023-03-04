import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesController } from './notes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Notes } from './entities/note.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Notes])],
  controllers: [NotesController],
  providers: [NotesService]
})
export class NotesModule {}
