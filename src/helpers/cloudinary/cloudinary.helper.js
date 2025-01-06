import { v2 as cloudinary } from 'cloudinary'
import stream from 'stream'

cloudinary.config({
  cloud_name: 'dxoubdrds',
  api_key: '651877584949126',
  api_secret: 'VeSyKNnrUWB0FSJQYxCSvRKAh9Q',
})

const uploadImage = async (folder, fileBuffer, fileName) => {
  // Creamos un stream de lectura a partir del buffer
  const bufferStream = new stream.PassThrough()
  bufferStream.end(fileBuffer) // Pasamos el buffer al stream

  return new Promise((resolve, reject) => {
    // Usamos el método upload_stream de Cloudinary
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: `codeverse/${folder}`,
        overwrite: true,
        public_id: fileName,
      },
      (error, result) => {
        if (error) {
          reject(
            new Error('Error uploading image to Cloudinary: ' + error.message)
          )
        } else {
          resolve(result.secure_url)
        }
      }
    )

    // Pasamos el stream al uploader de Cloudinary
    bufferStream.pipe(uploadStream)
  })
}

export default { uploadImage }
