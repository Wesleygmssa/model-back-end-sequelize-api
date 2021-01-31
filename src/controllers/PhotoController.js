import multer from 'multer';
import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig).single('photo');

class PhotoController {
  async store(req, res) {
    return upload(req, res, (err) => {
      if (err) {
        return res.status(401).json({
          errors: [err.code],
        });
      }

      return res.json(req.file);
    });
  }
}

export default new PhotoController();
