import bcrypt from 'bcrypt';

const saltrounds = 10;

export async function getHashedPassword (plainTextPassword : string) {
    return await bcrypt.hash(plainTextPassword, saltrounds);
}

export async function hashedMatchesPlain(plainTextPassword : string, hashedPassword : string){
    return await bcrypt.compare(plainTextPassword , hashedPassword)
}