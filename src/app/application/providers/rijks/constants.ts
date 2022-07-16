import { SearchParams } from "src/app/core/entities/search-params";

export const RIJKS_URL = 'https://www.rijksmuseum.nl/api/en/collection';
export const ARTWORKS_ENDPOINT = '';
export const ARTWORK_ENDPOINT = '/{objectNumber}';
export const ARTWORK_TILES = '/{objectNumber}/tiles'
export const AUTH_TOKEN = '&key=yluGpPtn';

export const PARAMS_EQUIVALENCE: SearchParams = {
    author: 'involvedMaker',
    searchText: 'q',
    medium: 'material',
    additionalInfo: ''
}
