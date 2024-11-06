import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'sample-widgets',
    templateUrl: './sample-fields.component.html',
    styleUrls: ['./sample-fields.component.scss']
})
export class SampleFieldsComponent implements OnInit {
    @Input() message?: string;

    exampleTextField: any = '';

    title = 'fluent-UI Updated Changes';

    dialogElement: any;

    dialogCloser: any | null = null;

    dialogOpener: any = null;

    constructor() {}

    ngOnInit(): void {
   
    }

}
