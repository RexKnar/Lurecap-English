export class CourseList {
  courseMasterId: number;
  courseName: string;
  courseAmount: number;
  description: string;
  provideWhat: string;
  dicountAmount: number;
  language: string;
  courseType: string;
  imageUrl: string;
  count: number;
  tutorName: string;
  tutorId: number;
  rating: number;
  statusFlag: number;
  learnersNumber: number;
}
export class CourseDetail {
  courseDetails: CourseDetails;
  chapterCount: number;
  chapters: ChapterDetails[];
  reviews: Reviews[];
}

export class AddReview {
  courseMasterId: number;
  review: string;
  rating: number;
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
  userCount: number;
  tutorName: string;
  tutorId: number;
}
export class ChapterDetails {
  chapterId: number;
  chapterName: string;
  orderNo: number;
}
export class Reviews {
  userName: string;
  review: string;
  rating: number;
}
