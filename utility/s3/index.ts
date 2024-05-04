import * as AWS_S3 from '@aws-sdk/client-s3';
import { uuid } from '../uuid';
import { extname } from 'path';

const AWS_S3_BUCKET = process.env.AWS_BUCKET_NAME;
const AWS_S3_REGION = process.env.AWS_BUCKET_REGION;
const AWS_S3_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;
const AWS_S3_ACCESS_KEY = process.env.AWS_ACCESS_KEY;
const AWS_S3_END_POINT = process.env.AWS_ENDPOINT;

const s3 = new AWS_S3.S3({
  endpoint: AWS_S3_END_POINT,
  credentials: {
    accessKeyId: AWS_S3_ACCESS_KEY,
    secretAccessKey: AWS_S3_SECRET_ACCESS_KEY,
  },
  region: AWS_S3_REGION,
});

export async function saveFile(file: any, folder: string) {
  const id = await uuid();
  const s3_upload = async (file, bucket: string, name: string, mimetype) => {

    const filepath = extname(name)
    const params = {
      Bucket: bucket,
      Key: `${folder}/${id + folder + filepath}`,
      Body: file,
      ACL: 'public-read' as const,
      ContentType: mimetype,
      ContentDisposition: 'inline',
      CreateBucketConfiguration: {
        LocationConstraint: AWS_S3_REGION,
      },
    };
    try {
      const data = await s3.send(new AWS_S3.PutObjectCommand(params));
      return {
        ...data,
        src: `https://ndsi-real.sgp1.digitaloceanspaces.com/${folder}/${id + folder + filepath}`,
        path: `${folder}/${id + folder + filepath}`,
        saveFileName: id + folder + filepath
      };
    } catch (e) {
      console.log(e);
    }
  };

  const { originalname } = file;

  return await s3_upload(
    file.buffer,
    AWS_S3_BUCKET,
    originalname,
    file.mimetype,
  );
}
