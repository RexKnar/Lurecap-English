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
      paragraphText: '1. ENGLISH LANGUAGE SPEAKING CUM INTRODUCTION 1 HR'
    },
    {
      paragraphText: '2. INTRODUCING THE SELF   1 HR'
    },
    {
      paragraphText: ' 3. GREETINGS AND WISHES 1 HR '
    },
    {
      paragraphText: ' 4. BE VERBS WITH SENTENCE STRUCTURE 1 HR '
    },
    {
      paragraphText: ' 5. QUESTION TAG 1 HR '
    },
    {
      paragraphText: '  6. STATEMENT FRAMING 1 HR '
    },
    {
      paragraphText: '7. DOALOGUE I HR'
    },
    {
      paragraphText: '8. SUBJECT VERB OBJECT 1HR'
    },
    {
      paragraphText: '9. NOUNS 1HR'
    },
    {
      paragraphText: '10. W/H QUESTIONS 1HR'
    },
    {
      paragraphText: '11. BE VERBIAL QUESTION 1HR'
    },
    {
      paragraphText: '12. ARTICLES 1HR'
    },
    {
      paragraphText: '13. VERBS 3HRS'
    },
    {
      paragraphText: '14. PRESENT PAST FUTURE 1HR'
    },
    {
      paragraphText: ' 15. ARTICLE 1HR'
    },
    {
      paragraphText: '16. BASIC TENSE 3 HRS'
    },
    {
      paragraphText: '17. PAST PARTICIPLE 1HR'
    },
    {
      paragraphText: '18. ADVERB 1HR'
    },
    {
      paragraphText: '19. INFINITIVES 1HR'
    },
    {
      paragraphText: '20. ADJECTIVES 1HR'
    },
    {
      paragraphText: '21. PREPOSITION 3 1HR'
    },
    {
      paragraphText: '22. PRONOUNS 1HR'
    },
    {
      paragraphText: '23. CONJUNCTION 2HR'
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
}
