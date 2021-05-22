import mongoose from "mongoose";
import { IPosting } from "../interfaces/IPosting";

const PostingSchema = new mongoose.Schema({

    emoji : {
        type : String,
        required : true,
    },
    title : {
        type : String,
        required : true,
        unique : true,
    },
    category : {
        type : String,
        required : true,
    },
    summary : {
        type : String,
        required : true,
    },
    contents : {
        type : String,
        required : true,
    },
    date : {
        type : Date,
        default : Date.now,
        required : true,
    }

});

export default mongoose.model<IPosting & mongoose.Document>(
  "Posting",
  PostingSchema
);
