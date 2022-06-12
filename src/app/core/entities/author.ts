import { Museum } from "./museum"

export interface Author {
    id: number,
    firstName: string,
    lastName: string,
    nationality: string,
    birthdate: string,
    imageUrl: string
    museum: Museum
}