import mongoose, {Schema} from 'mongoose'

export interface ListingType{
    _id:string,
    title:string,
    image:string,
    address:string,
    price:number,
    numsOfBeds:number,
    numsofBaths:number,
    rating:number,
}

export const ListingSchema = new Schema({
    title: {type: String, required: true},
    image: {type: String, required: true},
    address: {type: String},
    price: {type: Number},
    numsOfBeds: {type: Number},
    numsofBaths: {type: Number},    
    rating: {type: Number}
}, {
    timestamps: true
})

export const Listing = mongoose.model<ListingType>("Listing", ListingSchema)
