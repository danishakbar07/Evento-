export interface user{
   name?:string
   email?:string
   number?:number
   password?:string
   type?:string

}
export interface loginUser{
   email?:string
   password?:string
   exist?:boolean
   user?:boolean
   success?:boolean
   


}
export interface test{
name?:string
password?:number
}