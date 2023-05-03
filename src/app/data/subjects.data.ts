import { Semester } from './semesters.data';
import { Student } from './students.data';
import { Teacher } from './teachers.data';

export interface Subject {
  id: number;
  neptun: string;
  name: string;
  credit: number;
  department: string;
  studentId: number[];
  students: Student[];
  teacherId: number[];
  teachers: Teacher[];
  semesterId: number[];
  semesters: Semester[];
  deleted: boolean;
}

export class SubjectTable {
  public static _subjects: Subject[] = [
    {
      id: 1,
      neptun: 'DDD444',
      name: 'Matek',
      credit: 3,
      department: 'Mathematics',
      studentId: [1, 3],
      students: [],
      teacherId: [3],
      teachers: [],
      semesterId: [1],
      semesters: [],
      deleted: false,
    },
    {
      id: 2,
      neptun: 'EEE555',
      name: 'Info',
      credit: 5,
      department: 'RSZT',
      studentId: [2],
      students: [],
      teacherId: [1, 3],
      teachers: [],
      semesterId: [2],
      semesters: [],
      deleted: false,
    },
    {
      id: 3,
      neptun: 'FFF666',
      name: 'Angol',
      credit: 4,
      department: 'VIRT',
      studentId: [3],
      students: [],
      teacherId: [2],
      teachers: [],
      semesterId: [1, 3],
      semesters: [],
      deleted: false,
    },
  ];
}
