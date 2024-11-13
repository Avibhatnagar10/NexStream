// pages/offline.js
import Head from 'next/head';

export default function Offline() {
  return (
    <>
      <Head>
        <title>StreamForge - Offline</title>
      </Head>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#09090B' }}>
        <creattie-embed
          src="https://d1jj76g3lut4fe.cloudfront.net/saved_colors/104908/VxCodJtvMmcDY3PD.json"
          delay="1"
          speed="100"
          frame_rate="24"
          trigger="loop"
          style={{ width: '600px', backgroundColor: '#09090B' }}
        ></creattie-embed>
        <script src="https://creattie.com/js/embed.js?id=3f6954fde297cd31b441" defer></script>
      </div>
    </>
  );
}
