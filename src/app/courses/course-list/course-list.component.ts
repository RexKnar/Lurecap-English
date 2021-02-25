import { Component, OnInit } from '@angular/core';
import { InstituteInput } from 'src/app/shared/models/contact-us';
import { ContactUsService } from 'src/app/shared/services/contact-us.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  public instituteDetails:InstituteInput = new InstituteInput();
  //ddd:any='dummy';

  constructor(private _contactService: ContactUsService ) {
    
    this.instituteDetails.instituteName='dummy';
   }

  ngOnInit(): void {
    
  }

  public contactInstitute(){
    console.log(this.instituteDetails.instituteName)
    this._contactService.instituteRegister(this.instituteDetails).subscribe((data:any)=>{

      console.log(data);
    });
  }


}


