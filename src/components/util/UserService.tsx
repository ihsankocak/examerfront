import { localStorageConstants } from "./Constants"

export const isLoggedIn = ()=>{
 return "" !== JSON.parse(localStorage.getItem(localStorageConstants.userInfo)!).jwt;
}
export const getJwt = ()=>{
    return JSON.parse(localStorage.getItem(localStorageConstants.userInfo)!).jwt;
   }
export const createAuthorizationHeaderOfLoggedInUser=()=>{
   return  {headers:{"Authorization": "Bearer ".concat(getJwt())}};
}
export const getLoggedInUser= ():string =>{
return JSON.parse(localStorage.getItem(localStorageConstants.userInfo)!).username
}