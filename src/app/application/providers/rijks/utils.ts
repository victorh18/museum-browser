const transformArtworkObject = (rawArtwork: any) => {
    return {
        id: 0,
        internalId: rawArtwork.objectNumber,
        title: rawArtwork.title,
        description: rawArtwork?.classification?.iconClassDescription ?? '',
        elaborationDate: new Date(),
        imageUrl: rawArtwork.webImage.url,
        author: rawArtwork.principalOrFirstMaker,
        materials: rawArtwork?.materials ?? [],
        techniques: rawArtwork?.techniques ?? [],
        originLocation: ""
    }
}

export {
    transformArtworkObject
}