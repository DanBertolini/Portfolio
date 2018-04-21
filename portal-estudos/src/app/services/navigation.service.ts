import { UIRouter, Transition, TransitionService, ViewConfig } from '@uirouter/angular';
import { Injectable, transition } from "@angular/core";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NavigationService {

    private currentView: BehaviorSubject<any> = new BehaviorSubject({ view: 'main_page', callback: () => { } });

    constructor(private uiRouter: UIRouter, private transitionService: TransitionService) {
        transitionService.onSuccess({}, (transition) => {
            const navigateTo = transition.to().name;
            if (navigateTo.indexOf('content.') > -1) {
                this.contentPageHandler(transition);
            }
        });
    }

    initializeNavigation() {
        const view = this.uiRouter.stateService.params.type == 'all' ? 'main_page' : 'content_page';
        this.setCurrentView(view);
    }

    getCurrentView(): Observable<any> {
        return this.currentView.asObservable();
    }

    setCurrentView(view: string) {
        this.currentView.next(view);
    }

    newPage(): void {
        this.uiRouter.stateService.go('.new' );
    }

    isNewEnabled(): boolean {
        return this.uiRouter.stateService.current.name === 'content.my_pages';
    }

    contentPageHandler(transition: Transition) {
        if (transition.params().type) {
            const view = this.uiRouter.stateService.params.type == 'all' ? 'main_page' : 'content_page';
            this.setCurrentView(view);
        }
    }
}