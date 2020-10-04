import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseDetail, CourseDetails } from 'src/app/shared/models/Course';
import { CourseService } from 'src/app/shared/services/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {
  constructor(private readonly _courseService: CourseService,
    private route: ActivatedRoute) { }
  currentCourseId: number;
  currentCourseDetails: CourseDetail;
  chaptersList: CourseTitleList[] = [
    {
      paragraphText: '1. ENGLISH LANGUAGE SPEAKING CUM INTRODUCTION ',
       hours:' 1 HR'
    },
    {
      paragraphText: '2. INTRODUCING THE SELF   ',
       hours:' 1 HR'
    },
    {
      paragraphText: ' 3. GREETINGS AND WISHES  ',
       hours:' 1 HR'
    },
    {
      paragraphText: ' 4. BE VERBS WITH SENTENCE STRUCTURE  ',
       hours:' 1 HR'
    },
    {
      paragraphText: ' 5. QUESTION TAG ',
       hours:' 1 HR'
    },
    {
      paragraphText: '  6. STATEMENT FRAMING  ',
       hours:' 1 HR'
    },
    {
      paragraphText: '7. DOALOGUE ',
       hours:' 1 HR'
    },
    {
      paragraphText: '8. SUBJECT VERB OBJECT ',
       hours:' 1 HR'
    },
    {
      paragraphText: '9. NOUNS ',
       hours:' 1 HR'
    },
    {
      paragraphText: '10. W/H QUESTIONS ',
       hours:' 1 HR'
    },
    {
      paragraphText: '11. BE VERBIAL QUESTION ',
       hours:' 1 HR'
    },
    {
      paragraphText: '12. ARTICLES ',
       hours:' 1 HR'
    },
    {
      paragraphText: '13. VERBS ',
       hours:' 3 HRS'
    },
    {
      paragraphText: '14. PRESENT PAST FUTURE ',
       hours:' 1 HR'
    },
    {
      paragraphText: ' 15. ARTICLE ',
       hours:' 1 HR'
    },
    {
      paragraphText: '16. BASIC TENSE  ',
       hours:' 3 HRS'
    },
    {
      paragraphText: '17. PAST PARTICIPLE ',
       hours:' 1 HR'
    },
    {
      paragraphText: '18. ADVERB ',
       hours:' 1 HR'
    },
    {
      paragraphText: '19. INFINITIVES ',
       hours:' 1 HR'
    },
    {
      paragraphText: '20. ADJECTIVES ',
       hours:' 1 HR'
    },
    {
      paragraphText: '21. PREPOSITION  ',
       hours:' 1 HR'
    },
    {
      paragraphText: '22. PRONOUNS ',
       hours:' 1 HR'
    },
    {
      paragraphText: '23. CONJUNCTION ',
       hours:' 2 HRS'
    },
  ]

  ngOnInit(): void {
    this.currentCourseId = parseInt(this.route.snapshot.queryParamMap.get('CourseId'));
    this.getCurrentCourseDetails(this.currentCourseId);

  }
  getCurrentCourseDetails(currentCourseId): void {
    this._courseService.getCourseDetails(currentCourseId).subscribe((data: any) => {
      this.currentCourseDetails = data;
    });
  }
}
class CourseTitleList {
  paragraphText: string;
  hours:string;
}
