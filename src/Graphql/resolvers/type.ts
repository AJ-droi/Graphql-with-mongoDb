export interface Listing {
    title:string,
    image:string,
    address:string,
    price:number,
    numsOfBeds:number,
    numsofBaths:number,
    rating:number,
}

export interface CreateListing {
    input: Listing
}

export interface  ArgForUpdateListing {
    id:string,
    title:string,
    image:string,
    address:string,
    price:number,
    numsOfBeds:number,
    numsofBaths:number,
    rating:number,
}

export interface UpdateListing {
    input: ArgForUpdateListing
}
