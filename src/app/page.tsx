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
        <link rel="preload" href="/desktop/image26.jpg" as="image" />
        <link rel="preload" href="/desktop/image27.jpg" as="image" />
        <link rel="preload" href="/desktop/image28.jpg" as="image" />
        <link rel="preload" href="/desktop/image29.jpg" as="image" />
        <link rel="preload" href="/desktop/image30.jpg" as="image" />
        <link rel="preload" href="/desktop/image31.jpg" as="image" />
        <link rel="preload" href="/desktop/image32.jpg" as="image" />
        <link rel="preload" href="/desktop/image33.jpg" as="image" />
        <link rel="preload" href="/desktop/image34.jpg" as="image" />
        <link rel="preload" href="/desktop/image35.jpg" as="image" />
        <link rel="preload" href="/desktop/image36.jpg" as="image" />
        <link rel="preload" href="/desktop/image37.jpg" as="image" />
        <link rel="preload" href="/desktop/image38.jpg" as="image" />
        <link rel="preload" href="/desktop/image39.jpg" as="image" />
        <link rel="preload" href="/desktop/image40.jpg" as="image" />
        <link rel="preload" href="/desktop/image41.jpg" as="image" />
        <link rel="preload" href="/desktop/image42.jpg" as="image" />
        <link rel="preload" href="/desktop/image43.jpg" as="image" />
        <link rel="preload" href="/desktop/image44.jpg" as="image" />
        <link rel="preload" href="/desktop/image45.jpg" as="image" />
        <link rel="preload" href="/desktop/image46.jpg" as="image" />
        <link rel="preload" href="/desktop/image47.jpg" as="image" />
        <link rel="preload" href="/desktop/image48.jpg" as="image" />
        <link rel="preload" href="/desktop/image49.jpg" as="image" />
        <link rel="preload" href="/desktop/image50.jpg" as="image" />
        <link rel="preload" href="/desktop/image51.jpg" as="image" />
        <link rel="preload" href="/desktop/image52.jpg" as="image" />
        <link rel="preload" href="/desktop/image53.jpg" as="image" />
        <link rel="preload" href="/desktop/image54.jpg" as="image" />
        <link rel="preload" href="/desktop/image55.jpg" as="image" />
        <link rel="preload" href="/desktop/image56.jpg" as="image" />
        <link rel="preload" href="/desktop/image57.jpg" as="image" />
        <link rel="preload" href="/desktop/image58.jpg" as="image" />
        <link rel="preload" href="/desktop/image59.jpg" as="image" />
        <link rel="preload" href="/desktop/image60.jpg" as="image" />
        <link rel="preload" href="/desktop/image61.jpg" as="image" />
        <link rel="preload" href="/desktop/image62.jpg" as="image" />
        <link rel="preload" href="/desktop/image63.jpg" as="image" />
        <link rel="preload" href="/desktop/image64.jpg" as="image" />
        <link rel="preload" href="/desktop/image65.jpg" as="image" />
        <link rel="preload" href="/desktop/image66.jpg" as="image" />
        <link rel="preload" href="/desktop/image67.jpg" as="image" />
        <link rel="preload" href="/desktop/image68.jpg" as="image" />
        <link rel="preload" href="/desktop/image69.jpg" as="image" />
        <link rel="preload" href="/desktop/image70.jpg" as="image" />
        <link rel="preload" href="/desktop/image71.jpg" as="image" />
        <link rel="preload" href="/desktop/image72.jpg" as="image" />
        <link rel="preload" href="/desktop/image73.jpg" as="image" />
        <link rel="preload" href="/desktop/image74.jpg" as="image" />
        <link rel="preload" href="/desktop/image75.jpg" as="image" />
        <link rel="preload" href="/desktop/image76.jpg" as="image" />
        <link rel="preload" href="/desktop/image77.jpg" as="image" />
        <link rel="preload" href="/desktop/image78.jpg" as="image" />
        <link rel="preload" href="/desktop/image79.jpg" as="image" />
        <link rel="preload" href="/desktop/image80.jpg" as="image" />
        <link rel="preload" href="/desktop/image81.jpg" as="image" />
        <link rel="preload" href="/desktop/image82.jpg" as="image" />
        <link rel="preload" href="/desktop/image83.jpg" as="image" />
        <link rel="preload" href="/desktop/image84.jpg" as="image" />
        <link rel="preload" href="/desktop/image85.jpg" as="image" />
        <link rel="preload" href="/desktop/image86.jpg" as="image" />
        <link rel="preload" href="/desktop/image87.jpg" as="image" />
        <link rel="preload" href="/desktop/image88.jpg" as="image" />
        <link rel="preload" href="/desktop/image89.jpg" as="image" />
        <link rel="preload" href="/desktop/image90.jpg" as="image" />
        <link rel="preload" href="/desktop/image91.jpg" as="image" />
        <link rel="preload" href="/desktop/image92.jpg" as="image" />
        <link rel="preload" href="/desktop/image93.jpg" as="image" />
        <link rel="preload" href="/desktop/image94.jpg" as="image" />
        <link rel="preload" href="/desktop/image95.jpg" as="image" />
        <link rel="preload" href="/desktop/image96.jpg" as="image" />
        <link rel="preload" href="/desktop/image97.jpg" as="image" />
        <link rel="preload" href="/desktop/image98.jpg" as="image" />
        <link rel="preload" href="/desktop/image99.jpg" as="image" />
        <link rel="preload" href="/desktop/image100.jpg" as="image" />
        <link rel="preload" href="/desktop/image101.jpg" as="image" />
        <link rel="preload" href="/desktop/image102.jpg" as="image" />
        <link rel="preload" href="/desktop/image103.jpg" as="image" />
        <link rel="preload" href="/desktop/image104.jpg" as="image" />
        <link rel="preload" href="/desktop/image105.jpg" as="image" />
        <link rel="preload" href="/desktop/image106.jpg" as="image" />
        <link rel="preload" href="/desktop/image107.jpg" as="image" />
        <link rel="preload" href="/desktop/image108.jpg" as="image" />
        <link rel="preload" href="/desktop/image109.jpg" as="image" />
        <link rel="preload" href="/desktop/image110.jpg" as="image" />
        <link rel="preload" href="/desktop/image111.jpg" as="image" />
        <link rel="preload" href="/desktop/image112.jpg" as="image" />
        <link rel="preload" href="/desktop/image113.jpg" as="image" />
        <link rel="preload" href="/desktop/image114.jpg" as="image" />
        <link rel="preload" href="/desktop/image115.jpg" as="image" />
        <link rel="preload" href="/desktop/image116.jpg" as="image" />
        <link rel="preload" href="/desktop/image117.jpg" as="image" />
        <link rel="preload" href="/desktop/image118.jpg" as="image" />
        <link rel="preload" href="/desktop/image119.jpg" as="image" />
        <link rel="preload" href="/desktop/image120.jpg" as="image" />
        <link rel="preload" href="/desktop/image121.jpg" as="image" />
        <link rel="preload" href="/desktop/image122.jpg" as="image" />
        <link rel="preload" href="/desktop/image123.jpg" as="image" />
      </Head>
      <main>
        <ScrollVideo dir="/desktop" max={123} />
        <OverLay currentRoute="/" />
      </main>
    </>
  );
}
