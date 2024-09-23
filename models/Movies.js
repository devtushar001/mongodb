import mongoose from "mongoose";

//Define Schema
const movieSchema = new mongoose.Schema ({
    name: { type: String, required: true, trim: true},
    ratings: {type: Number, required: true, min: 1, max: 5},
    money: {
        type: mongoose.Decimal128,
        required: true,
        validate: v => v >= 10,
    },
    genre: {type: Array},
    isActive: {type: Boolean},
    comments: [
       {value: {type: String}, published: {type: Date, default: Date.now}}
    ],
})

// Creating Model
const movieModel = mongoose.model('Movie', movieSchema);

// Creating Document
const insertMannyDoc = async () => {
    try {
    //   const m1 = new movieModel({
    //         name: "Transformer",
    //         ratings: 2,
    //         money: 72454685,
    //         genre: ['Action', 'Robotics'],
    //         isActive: true,
    //         comments: [{value: "Hillarious Movie"}]
    //     })

    //     const m2 = new movieModel({
    //         name: "Avatar 1",
    //         ratings: 5,
    //         money: 12455487650415,
    //         genre: ['Action', 'Sci-Fie', 'Science'],
    //         isActive: true,
    //         comments: [{value: "very interested movie"}, {value: "Awesome Graphics"}, {value: "One of the best movie i have ever seen"}]
    //     })

    //     const m3 = new movieModel({
    //         name: "Avenger -1",
    //         ratings: 5,
    //         money: 8712456,
    //         genre: ['Comedy', 'Awesome Graphics'],
    //         isActive: true,
    //         comments: [{value: "I love this movie"}]
    //     })

    //     const m4 = new movieModel({
    //         name: "Avatar - 2",
    //         ratings: 4.5,
    //         money: 987545316456312,
    //         genre: ['vfx', 'adventure', 'action'],
    //         isActive: true,
    //         comments: [{value: "Nice vfx"}, {value: "cool graphics"}]
    //     })

    //     const m5 = new movieModel({
    //         name: "Pirates of carabian",
    //         ratings: 4.7,
    //         money: 9254865462156,
    //         genre: ['action', 'comedy'],
    //         isActive: true,
    //         comments: [{value: "I wached all parts of this series"}]
    //     })

        // const result = await m1.save(); // to save one document
        // const result = await movieModel.insertMany([m1, m2, m3, m4, m5]);
    } catch (error) {
        console.log(error);
    }
}

export default movieModel;
// export {insertMannyDoc};