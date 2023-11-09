function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[ item.replace('./', '') ] = r(item);
  });
  // console.log('images--', images)
  return images;
}

export function Icon(imageName) {
  const allIcons = importAll(
    require.context('../assets/icons', false, /\.(png)$/)
  );

  const iconsKeys = Object.keys(allIcons);

  const iconsValues = Object.values(allIcons);
  const iconIndex = iconsKeys.indexOf(imageName);

  return iconsValues[ iconIndex ];
}