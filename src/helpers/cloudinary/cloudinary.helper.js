import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cl,
})

const uploadImage = async (folder, file) => {
  const { secure_url } = await cloudinary.uploader.upload(file, {
    folder: `codeverse/${folder}`,
  })
  return secure_url
}

export default { uploadImage }
