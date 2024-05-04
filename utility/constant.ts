const saltOrRounds = process.env.BCRYPT_SALTORROUNDS ? parseInt(process.env.BCRYPT_SALTORROUNDS) : 10
const jwtAccessKey = process.env.JWT_ACCESS_SECRET_KEY
const jwtAccessExpTime = process.env.JWT_ACCESS_EXPIRATION_TIME ? parseInt(process.env.JWT_ACCESS_EXPIRATION_TIME) : 300
const jwtRefreshKey = process.env.JWT_REFRESH_SECRET_KEY
const jwtRefreshExpTime = process.env.JWT_REFRESH_EXPIRATION_TIME ? parseInt(process.env.JWT_REFRESH_EXPIRATION_TIME) : 604800

const senderEmail = process.env.EMAIL_SENDER_EMAIL
const senderPassword = process.env.EMAIL_SENDER_PASSWORD
const senderName = process.env.EMAIL_SENDER_NAME
const urlResetPassword = process.env.RESET_PASSWORD_URL
const timeExpResetPassword = process.env.TIME_EXP_RESET_PASSWORD

const lineNotiAccessToken = process.env.LINE_NOTI_ACCESS_TOKEN


const firebaseApiKey = process.env.FIREBASE_API_KEY
const firebaseAuthDomain = process.env.FIREBASE_AUTH_DOMAIN
const firebaseProjectId = process.env.FIREBASE_PROJECT_ID
const firebaseStorageBucket = process.env.FIREBASE_STORAGE_BUCKET
const firebaseMessagingSenderId = process.env.FIREBASE_MESSAGING_SENDER_ID
const firebaseAppId = process.env.FIREBASE_APP_ID
const firebaseMeasurementId = process.env.FIREBASE_MEASUREMENT_ID

export {
    saltOrRounds,
    jwtAccessKey,
    jwtRefreshKey,
    jwtAccessExpTime,
    jwtRefreshExpTime,
    senderEmail,
    senderPassword,
    senderName,
    urlResetPassword,
    timeExpResetPassword,
    lineNotiAccessToken,
    firebaseApiKey,
    firebaseAuthDomain,
    firebaseProjectId,
    firebaseStorageBucket,
    firebaseMessagingSenderId,
    firebaseAppId,
    firebaseMeasurementId
}