import React from "react";
import { useState } from "react";

export const UseLocalStorage = (props, type, method) => {
    // localStorage.clear();
    let localData = JSON.parse(localStorage.getItem(type))||[];
    // if (localData == null) {
    //     localData = [];
    // }
    switch (method) {
        case 'get':
            console.log(localData);
            return localData;
        // break;
        case 'post':
            try{
                // localData=[...localData,props]
            localData.push(props);
            localStorage.setItem(type, JSON.stringify(localData));
            console.log("succed");
            console.log(localData);
        }
        catch{
            console.log("Local Storage is full, Please empty data");
        }
            break;
        default:
            break;
    }

}