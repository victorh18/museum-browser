import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Artwork } from 'src/app/core/entities/artwork';
import { SearchModalComponent } from '../../components/search-modal/search-modal.component';

@Component({
    selector: 'test-view',
    templateUrl: 'test-view.component.html',
    styleUrls: [
        './test-view.component.css'
    ]
})

export class TestViewComponent implements OnInit {
    @ViewChild('thumbnailListContainer') thumbnailListContainer: ElementRef;

    testData: Artwork[] = [
        {
            id: 1,
            internalId: '1',
            title: 'Sexy Cupid',
            description: "Weird representation of a Saint",
            elaborationDate: new Date('2020-04-20'),
            presentingDate: '2011',
            imageUrl: 'https://lh3.ggpht.com/96neJi_Hm4RqBwlFpYlnRUnVm1Qmp6cE25QH4ouQ-a3-Mxm1Pot27J8oTkDijoeg9c1DX6rZYSF2u0nVkzZarhZ1s4dC=s0',
            author: 'Guess some Italian gui',
            materials: ['Paint'],
            techniques: [ 'chromatic' ],
            originLocation: 'a county'
        },
        {
            id: 2,
            internalId: '2',
            title: 'American Terrorism',
            description: "What America does to itself",
            elaborationDate: new Date('2020-04-20'),
            presentingDate: '2011',
            imageUrl: 'https://i.kym-cdn.com/photos/images/original/001/382/062/819.jpg',
            author: 'anon',
            materials: ['Microsoft Paint'],
            techniques: [ 'Dankness' ],
            originLocation: 'Reddit'
        },
        {
            id: 3,
            internalId: '3',
            title: 'Happy Shiba',
            description: "good boi",
            elaborationDate: new Date('2020-04-20'),
            presentingDate: '2011',
            imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
            author: 'Some Japanese chick',
            materials: ['A Sony Camera'],
            techniques: [ 'flufiness' ],
            originLocation: 'the japanese mountains'
        }
    ]

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
        const childrenLength = this.thumbnailListContainer.nativeElement.children.length;
        const columnCount = windowWidth > 550 ? 3 : 2;
        const columnClearance = columnCount * 10

        const colWidth = (windowWidth - columnClearance) / columnCount;
        
        const positionArray = [...new Array(columnCount)].map(() => { return 20 });

        for (let index = 0; index < childrenLength; index++) {
            const element = this.thumbnailListContainer.nativeElement.children[index].children[0];
            //console.log("affected element: ", element);

            const colPosition = index % columnCount;

            element.style.left = `${colWidth * colPosition}px`
            element.style.width = `${90 / columnCount}%`
            element.style.top = `${positionArray[colPosition] + 20}px`;

            positionArray[colPosition] += element.offsetHeight + 20;
            
        }
        
    }
}