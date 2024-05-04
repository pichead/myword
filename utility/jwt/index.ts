import * as jwt from 'jsonwebtoken'
import { jwtAccessExpTime, jwtAccessKey, jwtRefreshExpTime, jwtRefreshKey } from '../constant'
import { timestampNow } from '../time'

const exposeAccess = async (token: string): Promise<{ [key: string]: any } | null> => {

    try {
        const objData = await jwt.decode(token, { json: true })

        if (objData && objData.iat + jwtAccessExpTime > timestampNow()) {

            return objData
        }
        else {
            console.log("relse expose token",jwtAccessExpTime)
            return null
        }
    } catch (error) {
        console.error(error)
        return null
    }

}

const exposeRefresh = async (token: string): Promise<{ [key: string]: any } | null> => {

    try {
        const objData = await jwt.decode(token, { json: true })

        if (objData && objData.iat + jwtRefreshExpTime > timestampNow()) {
            return objData
        }
        else {
            return null
        }
    } catch (error) {
        console.error(error)
        return null
    }

}

const generateAccessKey = async (payload: { [key: string]: any }): Promise<string> => {
    try {
        const jwtToken = await jwt.sign(payload, jwtAccessKey)
        return jwtToken || null
    } catch (error) {
        console.log('error at gen access token')
        console.error(error)
        throw new error
        return null
    }
}

const generateRefreshKey = async (payload: { [key: string]: any }): Promise<string> => {
    try {
        const jwtToken = await jwt.sign(payload, jwtRefreshKey)
        return jwtToken || null
    } catch (error) {
        console.log('error at gen refresh token')
        console.error(error)
        return null
    }
}


export {
    exposeAccess,
    exposeRefresh,
    generateAccessKey,
    generateRefreshKey
}