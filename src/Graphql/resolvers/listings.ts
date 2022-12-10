import {Listing, ListingSchema, ListingType} from "../../model/listingModel";
import {CreateListing, UpdateListing} from './type'

const ListingResolver = {
    Query: {
        allListings:async() => {
            try{
                const listing = await Listing.find()
                return listing
            }catch(err){
                console.log(err)
            }
        }
    },

    Mutation:{
        createListing: async(_:unknown, args:CreateListing)=>{
            try{
                const newListing = {
                    title:args.input.title,
                    image:args.input.image,
                    address:args.input.address,
                    price:args.input.price,
                    numsOfBeds:args.input.numsOfBeds,
                    numsofBaths:args.input.numsofBaths,
                    rating:args.input.rating,
                }
                const listings =  await Listing.create(newListing)
                if(listings){
                    return listings
                }
            }catch(err){

            }
        },

        updateListing: async(_:unknown, args:UpdateListing)=>{
            try{
                const id = args.input.id
                const updateListing = {
                    id:args.input.id,
                    title:args.input.title,
                    image:args.input.image,
                    address:args.input.address,
                    price:args.input.price,
                    numsOfBeds:args.input.numsOfBeds,
                    numsofBaths:args.input.numsofBaths,
                    rating:args.input.rating,
                }
                const updateNew =  await Listing.findByIdAndUpdate(id, updateListing, {new:true})
                if(updateNew){
                    return updateNew
                }
            }catch(err){

            }
        }   
    }


}

export default ListingResolver