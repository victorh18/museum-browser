import { Artwork } from "src/app/core/entities/artwork"
import { SearchParams } from "src/app/core/entities/search-params"

const transformArtworkObject = (rawArtwork: any): Artwork => {
    return {
        id: 0,
        internalId: rawArtwork.objectNumber,
        title: rawArtwork.title,
        description: rawArtwork.plaqueDescriptionEnglish ?? rawArtwork?.classification?.iconClassDescription ?? 'No description available',
        elaborationDate: new Date(),
        imageUrl: rawArtwork.webImage.url,
        author: rawArtwork.principalOrFirstMaker,
        materials: rawArtwork?.materials ?? [],
        techniques: rawArtwork?.techniques ?? [],
        originLocation: ""
    }
}

const convertParams = (paramsEquivalence: SearchParams, actualParams: SearchParams): string => {
    let params = '';
    for (const key in paramsEquivalence) {
        if (Object.prototype.hasOwnProperty.call(paramsEquivalence, key)) {
            const paramEquivalence = paramsEquivalence[key as keyof typeof paramsEquivalence];
            const paramValue = actualParams[key as keyof SearchParams];
            
            if (paramEquivalence && paramValue) {
                const currentParam = `${paramEquivalence}=${paramValue}`;
                params += (!params ? '' : '&') + currentParam;
            }
            
        }
    }

    return params;
}

export {
    transformArtworkObject,
    convertParams
}