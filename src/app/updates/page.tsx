import { getPosts } from "@/lib/cms";
import Image from "next/image";
import OverLay from "../overlay";

export default async function Page() {
  const updatePosts = await getPosts();

  const posts = updatePosts.data.allPosts.sort(
    (a, b) => parseInt(a.date.split("-")[1]) - parseInt(b.date.split("-")[1])
  );

  return (
    <>
      <main className="bg-white text-black font-mono w-full h-full flex flex-col justify-center items-center pt-24 pb-12 px-10">
        <OverLay currentRoute="/updates" />
        <div className="font-monst md:my-10 md:text-center">
          <h1 className="text-5xl font-bold">BIG THINGS HAVE BEEN HAPPENING</h1>
          <p>DO CHECK US OUT</p>
        </div>
        <br />
        <hr />
        <div className="flex flex-col gap-2 m-3 w-full md:w-3/4">
          {posts.map((post) => {
            return (
              <div
                className="z-0 shadow-md rounded-lg p-4 flex flex-col hover:shadow-xl"
                key={post.id}
              >
                <h2 className="text-xl">{post.title}</h2>
                <p className="opacity-75">{post.content}</p>
                <br />
                <Image
                  className="self-end m-2"
                  src={post.image.url}
                  alt={post.id}
                  width={100}
                  height={100}
                />
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
