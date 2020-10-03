import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactUsService } from '../../../shared/services/contact-us.service';
@Component({
    selector: 'app-contact-page',
    templateUrl: './contact-page.component.html',
    styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
    queriesForm: FormGroup;
    refund = false;
    submitted = false;

    constructor(private readonly _contactUsService: ContactUsService,
                private formBuilder: FormBuilder,
    ) { }
    get f() {
        return this.queriesForm.controls;
    }
    pageTitleArea: pageTitle[] = [
        {
            title: 'Contact Us'
        }
    ];
    contactInfoBox2: InfoBox2[] = [
        {
            icon: 'bx bx-phone-call',
            title: 'Contact',
            number: '+91-94874 27429',
            email: 'academy@speakrefine.com'
        }
    ];

    sectionTitle: sectionTitleContent[] = [
        {

            title: 'Need to Share Your Views?',
            paragraphText: 'We would Love to Hear from you !'
        }
    ];
    contactImage: Image[] = [
        {
            img: 'assets/img/contact.png'
        }
    ];

    ngOnInit(): void {
        this.queriesForm = this.formBuilder.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.required]],
            phoneNumber: ['', [Validators.required]],
            description: ['', [Validators.required]],
        });
    }
    onSubmitQueriesForm() {
        this.submitted = true;
        if (this.queriesForm.invalid) {
            return false;
        }
    }
    sendUserQueries() {
        if (this.queriesForm.invalid) {
            return;
        }
        this.queriesForm.value.contactusId = 0;
        this.queriesForm.value.refund = this.refund;
        this.queriesForm.value.mailDate = '2020-10-02T21:19:47.437Z';
        this._contactUsService.sendQueries(this.queriesForm.value).subscribe((data: any) => {
            this.queriesForm.reset();
            this.submitted = false;
        });

    }
}
class pageTitle {
    title: string;
}
class InfoBox1 {
    icon: string;
    title: string;
    location: string;
}
class InfoBox2 {
    icon: string;
    title: string;
    number: string;
    email: string;
}
class InfoBox3 {
    icon: string;
    title: string;
    text1: string;
    text2: string;
}

class sectionTitleContent {

    title: string;
    paragraphText: string;
}
class Image {
    img: string;
}
