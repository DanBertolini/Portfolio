import { Component, Output, EventEmitter, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
@Component({
    selector: 'text-feature-edit',
    templateUrl: 'text-feature-edit.component.html',
    styleUrls: ['text-feature-edit.component.scss']
})
export class TextFeatureEditComponent implements AfterViewInit {

    @ViewChild('text') textElement: ElementRef;

    @Output() onSave: EventEmitter<any> = new EventEmitter();

    private active: boolean;

    ngAfterViewInit() {
        this.active = true;
        this.textElement.nativeElement.focus();
    }

    onInputDone(textValue: string) {
        if (this.active) {
            this.onSave.emit(textValue);
        }
        this.active = false;
    }

}