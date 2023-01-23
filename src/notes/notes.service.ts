import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Notes } from './entities/note.entity';

@Injectable()
export class NotesService {

  constructor(@InjectRepository(Notes)
  private NoteRepo:Repository<Notes>){}

  create(createNoteDto: CreateNoteDto) {
    const createnote= this.NoteRepo.create(createNoteDto) 
    return this.NoteRepo.save(createnote);
  }

  findAll() {
    return this.NoteRepo.find({});
  }

  findOne(Id: number) {
    return this.NoteRepo.findOneBy({Id});
  }

  async update(Id: number, updateNoteDto: UpdateNoteDto) {
    const note = await this.findOne(Id)
    note.ActionAt=updateNoteDto.ActionAt
    note.ActionBy=updateNoteDto.ActionBy
    note.ActionFrom=updateNoteDto.ActionFrom
    note.Note= updateNoteDto.Note
    note.Reference =updateNoteDto.Reference

    const updatedNote= await this.NoteRepo.save(note)
    return updatedNote;
  }

  remove(Id: number) {
    return this.NoteRepo.delete(Id);
  }
}
