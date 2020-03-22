import { NextFunction, Response, Request } from "express";

export function feature(req:Request, res:Response, next:NextFunction) {
    let data = {
        title: "Feature"
    };

    res.render('feature_name/feature.hbs', data);
}