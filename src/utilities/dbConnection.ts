import mongoose from 'mongoose';

// export async function dbConnect() {
//         // let uri = "mongodb://localhost:27017/test";
//         //let uri = "mongodb+srv://chamodi:123@cluster0.xrhhn.mongodb.net/Thirdfort?retryWrites=true&w=majority";
//     if(uri == undefined){
//         throw new Error('environment variable undefined : mongodb uri');
//     }
//     try{
//         await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
//         console.log('mongodb connection successful');
//     } catch (error){
//         console.log(error);
//     }
    
// }

export async function dbConnect(uri: string | undefined) {
    if(uri == undefined){
      throw new Error('enviroment variable undefined : mongodb uri');
    }
    try {
      await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
      console.log('mongodb connection succesfull');
    } catch (error) {
      console.log(error);
    }
  }