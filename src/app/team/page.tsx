import { getJobs, getPosts } from "@/lib/cms";
import Image from "next/image";
import OverLay from "../overlay";

export default async function Page() {
  const jobList = await getJobs();
  const jobs = await jobList.data.allJobs;
  console.log(jobs[0].skills);

  return (
    <>
      <main className="bg-white font-monst text-black w-full h-full flex flex-col justify-center items-center pt-24 pb-12 px-10">
        <OverLay currentRoute="/careers" />
        <div className="font-monst md:my-10">
          <div className="text-7xl md:text-9xl font-bold">
            <h1>WE</h1>
            <h1>MAKE</h1>
            <h1>BIG IDEAS</h1>
            <h1>HAPPEN</h1>
          </div>
          <p className="text-center">JOIN US FOR THE RIDE</p>
        </div>
        <br />
        <hr />
        <div className="flex flex-col gap-7 m-3 w-full md:grid md:grid-cols-3">
          {jobs.map((job) => {
            return (
              <div
                className="z-0 shadow-md rounded-lg p-4 flex flex-col hover:shadow-xl"
                key={job.id}
              >
                <div className="flex flex-col">
                  <h2 className="text-xl">{job.title}</h2>
                  <h3 className="text-sm">@{job.location}</h3>
                </div>
                <br />
                <div className="flex flex-col">
                  <h2 className="font-bold self-end">Skills Expected</h2>
                  <ul className="self-end">
                    {job.skills.split(",").map((skill) => (
                      <li key={skill} className="text-right">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
                <br />
                <a
                  href="mailto:info@atumx.in?subject=Would Love To Join Along"
                  target="_self"
                  aria-disabled="false"
                  className="rounded-full border-2 self-center px-6 md:px-48 w-fit border-orange-600 hover:border-orange-400"
                >
                  APPLY
                </a>
              </div>
            );
          })}
        </div>
        <p className="text-xs my-5">
          WE DON&apos;T CARE ABOUT YOUR DEGREE BY THE WAY
        </p>
      </main>
    </>
  );
}
