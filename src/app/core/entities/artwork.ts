export interface Artwork {
    id: number,
    internalId: string,
    title: string,
    description: string
    elaborationDate: Date,
    presentingDate: string,
    imageUrl: string,
    author: string,
    materials: string[],
    techniques: string[],
    originLocation: string
}