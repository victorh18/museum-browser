import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SearchModalComponent } from '../../components/search-modal/search-modal.component';

@Component({
    selector: 'test-view',
    templateUrl: 'test-view.component.html',
    styleUrls: [
        './test-view.component.css'
    ]
})

export class TestViewComponent implements OnInit {
    @ViewChild('thumbnailContainer') thumbnailContainer: ElementRef;

    constructor(private dialog: MatDialog) { 

        
    }
    ngOnInit(): void {
        //this.setHeightValue();
        window.onresize = () => {
            this.setHeightValue();
        }
        window.onload = () => {
            this.setHeightValue();

        }
      
    }

    openDialog(): void {
        const dialogOptions: MatDialogConfig = {
            width: '35%',
            data: {} ,
            enterAnimationDuration: '200ms'    
        };

        this.dialog.open(SearchModalComponent, dialogOptions);
    }

    setHeightValue(): void {
        const windowWidth = window.innerWidth;
        const childrenLength = this.thumbnailContainer.nativeElement.children.length;
        const columnCount = windowWidth > 550 ? 3 : 2;
        const columnClearance = columnCount * 10

        // const logValues = {
        //     thumbnailHeight: this.thumbnailContainer.nativeElement.children[1].offsetHeight,
        //     windowWidth,
        //     childrenLength: this.thumbnailContainer.nativeElement.children.length
        // }

        //console.table(logValues);

        const colWidth = (windowWidth - columnClearance) / columnCount;
        
        const positionArray = [...new Array(columnCount)].map(() => { return 20 });

        for (let index = 0; index < childrenLength; index++) {
            const element = this.thumbnailContainer.nativeElement.children[index].children[0];
            //console.log("affected element: ", element);

            const colPosition = index % columnCount;

            element.style.left = `${colWidth * colPosition}px`
            element.style.width = `${90 / columnCount}%`
            element.style.top = `${positionArray[colPosition] + 20}px`;

            positionArray[colPosition] += element.offsetHeight + 20;
            
        }
        
    }
}