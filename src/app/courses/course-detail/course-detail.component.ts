import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { CourseDetail, CourseDetails } from 'src/app/shared/models/Course';
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
  // currentCourseDetails: CourseDetail;
  // courseDetails: CourseDetails;

  currentCourseDetails = 
    {

      courseDetails : 
        {
          courseMasterId: 8,
          courseName: 'BASIC ENGLISH SPEAKING',
          courseAmount: 500,
          description: 'This course will help you reach that goal. Speak English Professionally: In person, Online and On the Phone will boost your English speaking skills.',
          provideWhat: 'string',
          dicountAmount: 450,
          language: 'string',
          courseType: 'string',
          imageUrl: 'assets/img/online.jpg',
          videoUrl: 'https://player.vimeo.com/video/464457438',
          tutorId: 1,
          tutorName: '',
          userCount: 50
        },
      

      chapterCount: 23,

      chapters:  [
        {
          chapterName: '1. ENGLISH LANGUAGE SPEAKING CUM INTRODUCTION ',
          hours: ' 1 HR'
        },
        {
          chapterName: '2. INTRODUCING THE SELF   ',
          hours: ' 1 HR'
        },
        {
          chapterName: ' 3. GREETINGS AND WISHES  ',
          hours: ' 1 HR'
        },
        {
          chapterName: ' 4. BE VERBS WITH SENTENCE STRUCTURE  ',
          hours: ' 1 HR'
        },
        {
          chapterName: ' 5. QUESTION TAG ',
          hours: ' 1 HR'
        },
        {
          chapterName: '  6. STATEMENT FRAMING  ',
          hours: ' 1 HR'
        },
        {
          chapterName: '7. DOALOGUE ',
          hours: ' 1 HR'
        },
        {
          chapterName: '8. SUBJECT VERB OBJECT ',
          hours: ' 1 HR'
        },
        {
          chapterName: '9. NOUNS ',
          hours: ' 1 HR'
        },
        {
          chapterName: '10. W/H QUESTIONS ',
          hours: ' 1 HR'
        },
        {
          chapterName: '11. BE VERBIAL QUESTION ',
          hours: ' 1 HR'
        },
        {
          chapterName: '12. ARTICLES ',
          hours: ' 1 HR'
        },
        {
          chapterName: '13. VERBS ',
          hours: ' 3 HRS'
        },
        {
          chapterName: '14. PRESENT PAST FUTURE ',
          hours: ' 1 HR'
        },
        {
          chapterName: ' 15. ARTICLE ',
          hours: ' 1 HR'
        },
        {
          chapterName: '16. BASIC TENSE  ',
          hours: ' 3 HRS'
        },
        {
          chapterName: '17. PAST PARTICIPLE ',
          hours: ' 1 HR'
        },
        {
          chapterName: '18. ADVERB ',
          hours: ' 1 HR'
        },
        {
          chapterName: '19. INFINITIVES ',
          hours: ' 1 HR'
        },
        {
          chapterName: '20. ADJECTIVES ',
          hours: ' 1 HR'
        },
        {
          chapterName: '21. PREPOSITION  ',
          hours: ' 1 HR'
        },
        {
          chapterName: '22. PRONOUNS ',
          hours: ' 1 HR'
        },
        {
          chapterName: '23. CONJUNCTION ',
          hours: ' 2 HRS'
        },
      ],
      reviews: [
        {
          userName: 'string1',
          review: 'string',
          rating: 5
        }
      ]

    };
  
  ngOnInit(): void {
    this.currentCourseId = parseInt(this.route.snapshot.queryParamMap.get('CourseId'));
    // this.getCurrentCourseDetails(this.currentCourseId);

  }
  getCurrentCourseDetails(currentCourseId): void {
    this._courseService.getCourseDetails(currentCourseId).subscribe((data: any) => {
      // this.currentCourseDetails = data;
    });
  }
}


export class CourseDetail {
  courseDetails: CourseDetails;
  chapterCount: number;
  chapters: ChapterDetails[];
  reviews: Reviews[];
}
export class CourseDetails {
  courseMasterId: number;
  courseName: string;
  courseAmount: number;
  description: string;
  provideWhat: string;
  dicountAmount: number;
  language: string;
  courseType: string;
  imageUrl: string;
  videoUrl: string;
  userCount: number;
  tutorName: string;
  tutorId: number;
}
export class ChapterDetails {
  // chapterId: number;
  chapterName: string;
  // orderNo: number;
  hours: string;

}
export class Reviews {
  userName: string;
  review: string;
  rating: number;
}

