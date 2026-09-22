"use client";
import Image from "next/image";
import globe from "../../public/images/globe.png";
import { IoLocationOutline, IoSearchOutline } from "react-icons/io5";
import { HiOutlineBriefcase } from "react-icons/hi";
import { MdOutlinePersonSearch, MdOutlineStarRate } from "react-icons/md";
import { TbChartBarPopular } from "react-icons/tb";

const stats = [
  {
    value: "50K",
    label: "Active Jobs",
    icon: <HiOutlineBriefcase />,
  },
  {
    value: "12K",
    label: "Companies",
    icon: <TbChartBarPopular />,
  },
  {
    value: "2M",
    label: "Job Seekers",
    icon: <MdOutlinePersonSearch />,
  },
  {
    value: "97%",
    label: "Satisfaction Rate",
    icon: <MdOutlineStarRate />,
  },
];

export default function Banner() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Main Background Glow */}
      <div className="absolute inset-0" />

      {/* Globe Background */}
      <div className="absolute inset-x-0 top-0 flex justify-center overflow-hidden">
        <Image
          src={globe}
          alt="Globe"
          priority
          className="w-full max-w-none opacity-90 select-none pointer-events-none"
        />
      </div>

      {/* Content */}
      <div className=" pt-60 relative z-20 mx-auto max-w-6xl px-6">
        {/* Badge */}
        <div className="flex justify-center">
          <div className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs tracking-widest text-gray-300 backdrop-blur-xl">
            🔥 <span className="font-semibold text-white">50,000+</span> NEW
            JOBS THIS MONTH
          </div>
        </div>

        {/* Heading */}
        <div className="mx-auto mt-8 max-w-4xl text-center">
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Find Your Dream Job Today
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-xl leading-relaxed text-gray-400">
            HireLoop connects top talent with world-class companies. Browse
            <br /> thousands of curated opportunities and land your next role
            faster.
          </p>
        </div>

        {/* Search */}
        <div className="mx-auto mt-8 flex max-w-3xl items-center rounded-xl border border-white/10 bg-[#0d0d12]/80 px-3 py-2 backdrop-blur-xl">
          {/* Search Input */}
          <div className="flex flex-1 items-center gap-2 px-3">
            <IoSearchOutline className="text-lg text-gray-500" />

            <input
              type="text"
              placeholder="Job title, skill or company"
              className="w-full bg-transparent text-sm outline-none placeholder:text-gray-500"
            />
          </div>

          <div className="mx-2 hidden h-5 w-px bg-white/10 md:block" />

          {/* Location Input */}
          <div className="hidden flex-1 items-center gap-2 px-3 md:flex">
            <IoLocationOutline className="text-lg text-gray-500" />

            <input
              type="text"
              placeholder="Location or Remote"
              className="w-full bg-transparent text-sm outline-none placeholder:text-gray-500"
            />
          </div>

          <button className="ml-2 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 hover:bg-indigo-500">
            <IoSearchOutline className="text-2xl" />
          </button>
        </div>

        {/* Tags */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-xs">
          <span className="text-gray-500">Trending Position</span>

          {["Product Designer", "AI Engineering", "DevOps Engineer"].map(
            (tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-gray-300"
              >
                {tag}
              </span>
            ),
          )}
        </div>

        {/* Globe Text */}
        <div className="mt-80">
          <h2 className="mx-auto text-center max-w-2xl text-2xl font-medium leading-snug md:text-4xl my-18">
            Assisting over 15,000 job seekers
            <br />
            find their dream positions.
          </h2>
          {/* Stats Cards */}
          <div className="relative grid gap-6 md:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="w-full space-y-8 text-left rounded-2xl border border-white/10 bg-linear-to-b from-[#101015] to-[#2b2b2f] p-7 backdrop-blur-xl"
              >
                {" "}
                <span className="text-2xl ">{item.icon}</span>
                <h3 className="text-5xl font-bold mt-15">{item.value}</h3>
                <p className="mt-3 text-2xl">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
