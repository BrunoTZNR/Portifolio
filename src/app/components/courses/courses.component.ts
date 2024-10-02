import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/types/course.interface';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  courses: Course[] = [
    { type: 'graduation', institution: 'Faculdade Estácio', dtEnd: '2026', desc: 'Ciência da Computação' },
    { type: 'graduation', institution: 'Faculdade Projeção', dtEnd: '2024', desc: 'Análise e Desenvolvimento de Sistemas' },
    { type: 'course', institution: 'Fundação Bradesco', dtEnd: '2023', desc: 'Lei Geral de Proteção de Dados' },
    { type: 'course', institution: 'Fundação Bradesco', dtEnd: '2023', desc: 'Segurança em Tecnologia da informação' },
    { type: 'course', institution: 'Senai - DF', dtEnd: '2021', desc: 'Lógica de programação' },
    { type: 'course', institution: 'Loiane Training', dtEnd: '2023', desc: 'Angular Framework' },
  ];
}
