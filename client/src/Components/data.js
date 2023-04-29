const images = require.context(
  "../Images/AI_images",
  true,
  /\.(jpg|jpeg|png|gif|svg|webp)$/
);
const data = images.keys().map((key) => images(key));
export default data;
