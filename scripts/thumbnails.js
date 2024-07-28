const path = require('path');
const fs = require('fs-extra');
const sharp = require('sharp');

// Save thumbnail file from each posts "images" metadata
hexo.extend.filter.register('before_post_render', async function(data) {
  const photoRelativePath = data.photos?.[0];
  if (!photoRelativePath) {
    return data;
  }

  data.thumbnail = await createThumbnail(photoRelativePath);

  return data;
});

async function createThumbnail(photoRelativePath) {
  const photoFullPath = path.join(__dirname, '../source', photoRelativePath);
  const thumbnailRelativePath = photoRelativePath + '_thumb.jpg';
  const thumbnailFullPath = path.join(__dirname, '../public', thumbnailRelativePath);
  const thumbnailFullPathParentDir = path.dirname(thumbnailFullPath);

  await fs.ensureDir(thumbnailFullPathParentDir);
  // console.log({
  //   photoRelativePath,
  //   photoFullPath,
  //   thumbnailFullPath,
  //   thumbnailRelativePath,
  //   thumbnailFullPathParentDir,
  // })
  await sharp(photoFullPath)
    .resize({ width: 200 })
    .toFile(thumbnailFullPath)
  return thumbnailRelativePath;
}
