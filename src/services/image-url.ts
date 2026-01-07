import noImage from "../assets/no-image.webp";

const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage;
  const target = "media/";
  const index = url.indexOf(target);

  if (index === -1) return url;

  const insertIndex = index + target.length;
  return url.slice(0, insertIndex) + "crop/600/400/" + url.slice(insertIndex);
};

export default getCroppedImageUrl;
