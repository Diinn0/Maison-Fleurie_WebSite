// @ts-ignore
import bcrypt from "bcrypt";
const saltRounds = 15;


const encryptPassword = (password: string) => {
    const hash = bcrypt.hashSync(password, saltRounds);

    console.log(hash)
    return hash;
}

const comparePassword = (password: string, hash: string) => {
    if (bcrypt.compareSync(password, hash)) {
        return true;
    }

    return false;
}

export { encryptPassword, comparePassword };
