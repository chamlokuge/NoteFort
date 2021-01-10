import mongoose from 'mongoose';

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