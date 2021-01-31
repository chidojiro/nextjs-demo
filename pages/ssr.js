import { fetchThousandsOfPhotos } from "../service"

export const getServerSideProps = async () => {
  const data = await fetchThousandsOfPhotos()

  return {
    props: {
      data
    }
  }
}

export default function SSR({ data }) {
  return <div style={{ backgroundColor: 'cyan', height: '100vh' }}>{data.map((photo, idx) => <div key={idx}>{photo.title}</div>)}</div>
}