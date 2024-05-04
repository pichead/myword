import * as bcrypt from 'bcrypt';
import { saltOrRounds } from '../constant';

const hashPassword = async (password: string): Promise<string | null> => {
  try {
    return await bcrypt.hash(password, saltOrRounds);
  } catch (error) {
    console.log('error bcrypt hash')
    console.log(error)
    return null
  }
}

const comparePassword = async (password: string, hashedPassword: string): Promise<boolean | null> => {
  try {
    return await bcrypt.compare(password, hashedPassword);
  } catch (error) {
    console.log('error bcrypt compare')
    console.log(error)
    return null
  }
}

export {
  hashPassword,
  comparePassword
}

