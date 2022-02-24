const multer = require("multer");

const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
};

const storage = multer.diskStorage({
  // Creating configuration object for multer
  destination: (req, file, callback) => {
    callback(null, "images");
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(".")[0].split(" ").join("_");
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + "." + extension); // Creating an name for the image
  },
});

const fileFilter = (req, file, callback) => {
  const extension = MIME_TYPES[file.mimetype]; // Fiding the uploaded file's mine type
  if (extension === "jpg" || extension === "png") {
    callback(null, true); // Making sure it is a png or a jpg
  } else {
    callback("Erreur : Mauvais type de fichier", false);
  }
};


module.exports = multer({
  storage,  
  limits: { fileSize: 104857600 }, // Taille image max 100 Mo
 }),
 single("image"); // Seulement 1 image authorisée