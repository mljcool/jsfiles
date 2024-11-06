import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-widgets',
    templateUrl: './widgets.component.html',
    styleUrls: ['./widgets.component.scss']
})
export class WidgetsComponent implements OnInit {
    @Input() message?: string;

    exampleTextField: any = '';

    title = 'fluent-UI - (Power portal)';

    dialogElement: any;

    dialogCloser: any | null = null;

    dialogOpener: any = null;

    constructor() {}

    ngOnInit(): void {
        this.dialogElement = document.getElementById('defaultDialog');
        this.dialogOpener = document.getElementById('dialogOpener');
        this.dialogCloser = document.getElementById('dialogCloser');
        this.setUp();
    }

    onClick() {
        console.log(this.exampleTextField);
    }

    setUp() {
        this.dialogOpener?.addEventListener('click', (e: any) => {
            this.dialogElement.hidden = false;
        });
        this.dialogCloser?.addEventListener('click', (e: any) => {
            this.closeDialog();
        });
    }

    closeDialog() {
        this.dialogElement.hidden = true;
    }
}
