import Link from 'next/link';

export default function Home() {
  return <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '20vh' }}>
    <Link href='/csr'>Client-side rendering</Link>
    <Link href='/ssr'>Server-side rendering</Link>
    <Link href='/static'>Static generation</Link>
  </div>
}