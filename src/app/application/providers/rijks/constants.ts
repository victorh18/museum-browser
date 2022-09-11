import { SearchParams } from "src/app/core/entities/search-params";

export const RIJKS_URL = 'https://www.rijksmuseum.nl/api/en/collection';
export const ARTWORKS_ENDPOINT = '';
export const ARTWORK_ENDPOINT = '/{objectNumber}';
export const ARTWORK_TILES = '/{objectNumber}/tiles'
export const AUTH_TOKEN = '&key=yluGpPtn';

export interface ParamEquivalence {
    author: string,
    searchText: string,
    materials: string,
    techniques: string,
    additionalInfo: string
}

export const PARAMS_EQUIVALENCE: ParamEquivalence = {
    author: 'involvedMaker',
    searchText: 'q',
    materials: 'material',
    techniques: 'technique',
    additionalInfo: ''
}
