import { getPosts } from "@/lib/cms";
import Image from "next/image";
import OverLay from "../overlay";

export default async function Page() {
  const updatePosts = await getPosts();
  // const posts = updatePosts.data.allPosts;
  // console.log(posts[0].date.split("-")[1]); // yyyy-mm-dd

  const posts = updatePosts.data.allPosts.sort(
    (a, b) => parseInt(a.date.split("-")[1]) - parseInt(b.date.split("-")[1])
  );

  return (
    <>
      <main className="bg-white text-black w-full h-full flex flex-col justify-center items-center pt-24 pb-12 px-10">
        <OverLay currentRoute="/updates" />
        <div className="self-start m-2">
          <h1 className="text-3xl font-bold">Updates</h1>
          <p>Cool things that we&apos;ve done</p>
        </div>
        <hr />
        <div className="flex flex-col gap-2 m-3 md:w-full">
          {posts.map((post) => {
            return (
              <div
                className="z-0 shadow-md rounded-lg p-4 flex flex-col hover:shadow-xl"
                key={post.id}
              >
                <h2 className="text-xl">{post.title}</h2>
                <p className="opacity-75">{post.content}</p>
                <Image
                  className="self-end"
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
