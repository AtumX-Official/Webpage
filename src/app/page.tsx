import ScrollVideo from "@/app/scrollvideo";
import OverLay from "./overlay";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preload" href="/desktop/image1.jpg" as="image" />
        <link rel="preload" href="/desktop/image2.jpg" as="image" />
        <link rel="preload" href="/desktop/image3.jpg" as="image" />
        <link rel="preload" href="/desktop/image4.jpg" as="image" />
        <link rel="preload" href="/desktop/image5.jpg" as="image" />
        <link rel="preload" href="/desktop/image6.jpg" as="image" />
        <link rel="preload" href="/desktop/image7.jpg" as="image" />
        <link rel="preload" href="/desktop/image8.jpg" as="image" />
        <link rel="preload" href="/desktop/image9.jpg" as="image" />
        <link rel="preload" href="/desktop/image10.jpg" as="image" />
        <link rel="preload" href="/desktop/image11.jpg" as="image" />
        <link rel="preload" href="/desktop/image12.jpg" as="image" />
        <link rel="preload" href="/desktop/image13.jpg" as="image" />
        <link rel="preload" href="/desktop/image14.jpg" as="image" />
        <link rel="preload" href="/desktop/image15.jpg" as="image" />
        <link rel="preload" href="/desktop/image16.jpg" as="image" />
        <link rel="preload" href="/desktop/image17.jpg" as="image" />
        <link rel="preload" href="/desktop/image18.jpg" as="image" />
        <link rel="preload" href="/desktop/image19.jpg" as="image" />
        <link rel="preload" href="/desktop/image20.jpg" as="image" />
        <link rel="preload" href="/desktop/image21.jpg" as="image" />
        <link rel="preload" href="/desktop/image22.jpg" as="image" />
        <link rel="preload" href="/desktop/image23.jpg" as="image" />
        <link rel="preload" href="/desktop/image24.jpg" as="image" />
        <link rel="preload" href="/desktop/image25.jpg" as="image" />
      </Head>
      <main>
        <ScrollVideo dir="/desktop" max={25} />
        <OverLay />
      </main>
    </>
  );
}
