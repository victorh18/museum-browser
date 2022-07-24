import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SearchModalComponent } from '../../components/search-modal/search-modal.component';

@Component({
    selector: 'test-view',
    templateUrl: 'test-view.component.html'
})

export class TestViewComponent {
    constructor(private dialog: MatDialog) { 
        console.log('TestView');
        
    }

    openDialog(): void {
        const dialogOptions: MatDialogConfig = {
            width: '35%',
            data: {} ,
            enterAnimationDuration: '200ms'    
        };

        this.dialog.open(SearchModalComponent, dialogOptions);
    }
}