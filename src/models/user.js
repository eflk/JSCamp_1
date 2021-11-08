// models içerisindeki filelar DTO gibi çalışır

export default class User{
    constructor(id, firstName, lastName, city){
        // bu properyler js nin prototyping yapılıyor yani properyler dinamic olarak oluşuyor zaten.
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.city = city
    }
}