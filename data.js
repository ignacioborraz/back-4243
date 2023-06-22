import User from "./src/models/User.js"
import Movie from "./src/models/Movie.js"
import "dotenv/config.js"
import "./src/server.js"
import { faker } from "@faker-js/faker"

const createData = async (users,movies) => {
    try {
        for (let j = 1; j <= users; j++) {
            const randomName = faker.person.firstName()
            const randomAge =  Math.ceil(Math.random() * 100)
            let user = await User.create({ name: randomName, age: randomAge })
            for (let i = 1; i <= movies; i++) {
                const randomTitle = faker.music.songName()
                const randomCapacity = Math.ceil(Math.random() * 100000)
                const randomPrice = Math.ceil(Math.random() * 100)
                await Movie.create({ title: randomTitle, capacity: randomCapacity, price: randomPrice, producer:user._id })
            }
        }
        console.log("data created!");
    } catch (error) {
        console.log(error);
    }
};
createData(10,20)