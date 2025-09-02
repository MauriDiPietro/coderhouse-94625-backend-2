import config from "./config";
import {connect} from 'mongoose'

export const initMongoDB = async(): Promise<void> =>{
    try {
        // await connect(<string>config.MONGO_URL)
        // await connect(config.MONGO_URL as string)
        await connect(config.MONGO_URL)
    } catch (error: unknown) {
        throw new Error((error as Error).message)
    }
}