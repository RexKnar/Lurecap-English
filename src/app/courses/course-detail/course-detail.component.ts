import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddReview } from 'src/app/shared/models/Course';
// import { CourseDetail, CourseDetails } from 'src/app/shared/models/Course';
import { CourseService } from 'src/app/shared/services/course.service';
import { LocalStorageService } from 'src/app/shared/services/LocalStorageService';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {
  constructor(private readonly _courseService: CourseService,
    private _localStorageService: LocalStorageService,
    private route: ActivatedRoute) { }
  currentCourseId: number;
  currentCourseDetails: CourseDetail;
  currentReviewDetails:any;
  courseDetails: CourseDetails;
  addReview:AddReview = new AddReview;
  currentUser:any;
  
  doTextareaValueChange(ev) {
    try {
      this.addReview.review = ev.target.value;
    } catch(e) {
      console.info('could not set textarea-value');
    }
  }
  currentCourseDetails2 = 
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
          tutorName: 'Amal J Eronimus ',
          userCount: 50
        },
      

      chapterCount: 23,

      chapters:  [
        {
          chapterName: '1. English Language Speaking Cum Introduction ',
          hours: ' 1 Hour'
        },
        {
          chapterName: '2. Introducing The Self   ',
          hours: ' 1 Hour'
        },
        {
          chapterName: ' 3. Greetings And Wishes  ',
          hours: ' 1 Hour'
        },
        {
          chapterName: ' 4. Be Verbs With Sentence Structure  ',
          hours: ' 1 Hour'
        },
        {
          chapterName: ' 5. Question Tag ',
          hours: ' 1 Hour'
        },
        {
          chapterName: '  6. Statement Framing  ',
          hours: ' 1 Hour'
        },
        {
          chapterName: '7. Dialouge ',
          hours: ' 1 Hour'
        },
        {
          chapterName: '8. Subject Verb Object ',
          hours: ' 1 Hour'
        },
        {
          chapterName: '9. Nouns ',
          hours: ' 1 Hour'
        },
        {
          chapterName: '10. W/H Questions ',
          hours: ' 1 Hour'
        },
        {
          chapterName: '11. Be Verbal Question ',
          hours: ' 1 Hour'
        },
        {
          chapterName: '12. Articles ',
          hours: ' 1 Hour'
        },
        {
          chapterName: '13. Verbs ',
          hours: ' 3 Hours'
        },
        {
          chapterName: '14. Present Past Future ',
          hours: ' 1 Hour'
        },
        {
          chapterName: ' 15. Article ',
          hours: ' 1 Hour'
        },
        {
          chapterName: '16. Basic Tense  ',
          hours: ' 3 Hours'
        },
        {
          chapterName: '17. Past Participle ',
          hours: ' 1 Hour'
        },
        {
          chapterName: '18. Adverb ',
          hours: ' 1 Hour'
        },
        {
          chapterName: '19. Infintives ',
          hours: ' 1 Hour'
        },
        {
          chapterName: '20. Adjectives ',
          hours: ' 1 Hour'
        },
        {
          chapterName: '21. Preposition  ',
          hours: ' 1 Hour'
        },
        {
          chapterName: '22. Pronouns ',
          hours: ' 1 Hour'
        },
        {
          chapterName: '23. Conjunction',
          hours: ' 2 Hour'
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
    this.getCurrentCourseDetails(this.currentCourseId);
    this.getReviewDetails(this.currentCourseId);
    this.addReview.courseMasterId=this.currentCourseId;

    this.currentUser=this._localStorageService.getAuthorizationData();

  }
  getCurrentCourseDetails(currentCourseId): void {
    this._courseService.getCourseDetails(currentCourseId).subscribe((data: any) => {
      this.currentCourseDetails = data;
    });
  }

  getReviewDetails(currentCourseId) : void{
    this._courseService.getReviewDetails(currentCourseId).subscribe((data: any) => {
      console.log(data.reviewData)
      this.currentReviewDetails = data.reviewData[0];
    });
  }

  insertReview() : void {
    if(this.addReview.rating>0)
    {
      this._courseService.insertReview(this.addReview).subscribe((data:any)=>{
        this.addReview.rating=0;
        this.addReview.review='';
      });
    }

    
  }

  
  loginAlert(){
      alert('Please Login To Add Review');
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
  chapterId: number;
  chapterName: string;
  orderNo: number;
  hours: string;

}
export class Reviews {
  userName: string;
  review: string;
  rating: number;
}

