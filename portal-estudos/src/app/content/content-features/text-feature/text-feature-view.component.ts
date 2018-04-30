import { Component, Input } from '@angular/core';
@Component({
    selector: 'text-feature-view',
    templateUrl: 'text-feature-view.component.html',
    styleUrls: ['text-feature-view.component.scss']
})
export class TextFeatureViewComponent {
    @Input() content: string;
    
}