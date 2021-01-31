import useSWR from 'swr'
import { fetchThousandsOfPhotos } from '../service'

export default function CSR() {
  const { isValidating, data = [] } = useSWR('someKey', () => fetchThousandsOfPhotos())

  if (isValidating) return (
    <div style={{ backgroundColor: 'yellow', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      Loading ...
    </div>
  )

  return <div style={{ backgroundColor: 'cyan', height: '100vh' }}>{data.map((photo, idx) => <div key={idx}>{photo.title}</div>)}</div>
}