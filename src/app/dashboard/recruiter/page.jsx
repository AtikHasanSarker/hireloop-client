'use client'
import StatCard from '@/components/StatCard';
import { useSession } from '@/lib/auth-client';
import { FaRegFileAlt } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { SiTicktick } from "react-icons/si";
import { SlEnergy } from "react-icons/sl";

const RecruiterHomePage = () => {
    const recruiterStats = [
      {
        value: "50K",
        label: "Total Job Posts",
        icon: <FaRegFileAlt />,
      },
      {
        value: "12K",
        label: "Total Applicants",
        icon: <LuUsers />,
      },
      {
        value: "2M",
        label: "Active Jobs",
        icon: <SlEnergy />,
      },
      {
        value: "97%",
        label: "Job Closed",
        icon: <SiTicktick />,
      },
    ];
    const {data: session} = useSession()
    const user = session?.user
    return (
      <div className="p-6">
        <h2 className=" text-4xl mb-10">Welcome Back, {user?.name}</h2>
        <StatCard recruiterStats={recruiterStats} />
      </div>
    );
};

export default RecruiterHomePage;