import axios from 'axios';

export const uploadCloudinary = async (file: Express.Multer.File) => {
  if (file) {
    const formData = new FormData();
    const blob = new Blob([file.buffer], { type: file.mimetype });
    formData.append('file', blob, file.fieldname);
    const archivoUpload = await axios.post(
      `https://service-image.onrender.com/clodinary`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return archivoUpload.data.secure_url;
  } else {
    return 'https://p16-va-default.akamaized.net/img/musically-maliva-obj/1665282759496710~c5_720x720.jpeg';
  }
};
