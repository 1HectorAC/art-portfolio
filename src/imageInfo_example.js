// This file is an example of how the imageInfo file is formated. Copy or Rename this file imageInfo.js to use it.

// This is a list of images and there related information. Make sure to store the images in a "images/art" folder.
const imagesInfo = [
    { title: 'title1', file: 'title1.jpg', tall: false, format: 'Digital' },
    { title: 'title2', file: 'title2.jpg', tall: false, format: 'Graphite' }
];
export default imagesInfo;

// This is an example of the filters (or format as it is named above) used in the images list.
export const filterOptions = ["All", "Digital", "Graphite"];
