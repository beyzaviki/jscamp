import { BaseLogger, ElasticLogger, MongoLogger} from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("user component yüklendi")

let logger1 = new MongoLogger()
let userService = new UserService(logger1)

let user1 = new User(1,"beyza","savun","eskişehir")
let user2 = new User(2,"salihUras","savun","diyarbakır")
userService.add(user1)
userService.add(user2)

console.log(userService.list())
console.log(userService.getById(2))



let customer = {id:1, firstName:"beyza"}

//prototyping
customer.lastName = "savun"

console.log(customer.lastName)