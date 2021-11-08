import { ElasticLogger } from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

// bu sayfayı ekranımız olarak düşünelim.
console.log('user component yüklendi.')

let userService = new UserService(new ElasticLogger())

userService.add(new User(1,'Emre', 'Felek', 'İstanbul'))
userService.add(new User(2,'Ali', 'Veli', 'Ankara'))

let findResultUser = userService.getById(1)
console.log(findResultUser);

console.log(userService.list())





let customer = {id: 1, firstName: "Ali"}

// yukarıda mevcut olmayan bir property yi sonradan sorunsuz ekleyebildim. 
// biz buna prototyping diyoruz.
customer.lastName = "Veli"

console.log(customer)