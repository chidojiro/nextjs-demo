export const fetchThousandsOfPhotos = async () => {
  const data = await Promise.all(new Array(5).fill(null).map(async () => (await fetch('https://jsonplaceholder.typicode.com/photos')).json()))

  return data.reduce((acc, cur) => [...acc, ...cur], [])
}