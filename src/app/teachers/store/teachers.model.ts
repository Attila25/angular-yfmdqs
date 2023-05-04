import { Subject } from 'src/app/data/subjects.data';
import { Teacher, Position } from 'src/app/data/teachers.data';

export class TeacherModel implements Teacher {
  id!: number;
  neptun!: string;
  name!: string;
  email!: string;
  position!: Position;
  subjectId!: number[];
  subjects!: Subject[];
  deleted!: boolean;
}
