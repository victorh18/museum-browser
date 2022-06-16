import { Artwork } from "src/app/core/entities/artwork";
import { Museum } from "src/app/core/entities/museum";
import { SearchParams } from "src/app/core/entities/search-params";
import { IMuseumProvider } from "src/app/core/providers/museum-provider";

export class RijksProvider implements IMuseumProvider {
    museum: Museum;

    constructor() {
        this.museum = {
            id: 1,
            name: 'Rijks Museum',
            location: 'The Netherlands',
            description: 'A cool museum'
        }
        
    }

    getArtworks(params: SearchParams): Artwork[] {
        const artworks: Artwork[] = [
            {
                id: 1,
                internalId: '1',
                title: 'Sexy Cupid',
                description: "Weird representation of a Saint",
                elaborationDate: new Date('2020-04-20'),
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
                imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
                author: 'Some Japanese chick',
                materials: ['A Sony Camera'],
                techniques: [ 'flufiness' ],
                originLocation: 'the japanese mountains'
            },
            {
                id: 4,
                internalId: '4',
                title: 'DooDoo Fart',
                description: "A certified hood classic",
                elaborationDate: new Date('2020-04-20'),
                imageUrl: 'https://i1.sndcdn.com/artworks-HKllA5msppyd4zjl-gypPYA-t500x500.jpg',
                author: "Ma' Dog",
                materials: ['A Nokia'],
                techniques: [ 'Watermelon' ],
                originLocation: 'Reddit'
            },
            {
                id: 5,
                internalId: '5',
                title: 'Me and the Bois',
                description: "drippin",
                elaborationDate: new Date('2020-04-20'),
                imageUrl: 'https://lh3.googleusercontent.com/J-mxAE7CPu-DXIOx4QKBtb0GC4ud37da1QK7CzbTIDswmvZHXhLm4Tv2-1H3iBXJWAW_bHm7dMl3j5wv_XiWAg55VOM=s0',
                author: "Some guy whose name probably contains characters not present in my keyboard",
                materials: ['canvas'],
                techniques: [ "God's hand" ],
                originLocation: 'Holland'
            }
        ];
        
        return artworks;
    }
    getMuseumInfo(museumId: number): Museum {
        return this.museum;
    }
    getArtwork(id: string): Artwork {
        return this.getArtworks(<SearchParams>{}).filter(a => a.id === +id)[0];
    }
    paramsTransformer(params: SearchParams): string {
        return params.searchText;
    }

}