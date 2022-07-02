import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { AppFooterComponent } from "src/app/presentation/components/app-footer/app-footer.component"

describe('Footer component...', () => {
    let fixture: ComponentFixture<AppFooterComponent>;
    let component: AppFooterComponent;
    let element: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppFooterComponent
            ],
            schemas: [
                NO_ERRORS_SCHEMA
            ]
        })

        fixture = TestBed.createComponent(AppFooterComponent);
        component = fixture.componentInstance;
        element = fixture.nativeElement;
    });

    it('...should display the version number', () => {
        const versionNumber = "1.2.3";

        component.version = versionNumber;
        fixture.detectChanges();

        expect(element.querySelector("p")?.textContent).toContain(versionNumber);
    });

    
})