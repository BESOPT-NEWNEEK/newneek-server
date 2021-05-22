import mongoose from "mongoose";

export interface IPosting {
    emoji : string;
    title : string;
    category : string;
    summary : string;
    contents : string;
    date : Date;
}

export interface IPostingInputDTO {
    emoji : string;
    title : string;
    category : string;
    summary : string;
    contents : string;
    date : Date;
}
