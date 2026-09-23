"use client";

import { useMemo, useState } from "react";

import JobFilters from "@/components/jobs/JobFilters";
import JobCard from "./JobCard";

const JobListingContainer = ({ jobs = [] }) => {
  const [filters, setFilters] = useState({
    search: "",
    category: null,
    jobType: null,
    workMode: null,
    salary: null,
  });

  const filteredJobs = useMemo(() => {
    let result = [...jobs];

    /* ---------------- Search ---------------- */

    const search = filters.search.trim().toLowerCase();

    if (search) {
      result = result.filter((job) => {
        return (
          job.jobTitle?.toLowerCase().includes(search) ||
          job.companyName?.toLowerCase().includes(search) ||
          job.jobCategory?.toLowerCase().includes(search) ||
          job.requirements?.toLowerCase().includes(search) ||
          job.responsibilities?.toLowerCase().includes(search)
        );
      });
    }

    /* ---------------- Category ---------------- */

    if (filters.category) {
      result = result.filter((job) => job.jobCategory === filters.category);
    }

    /* ---------------- Job Type ---------------- */

    if (filters.jobType) {
      result = result.filter((job) => job.jobType === filters.jobType);
    }

    /* ---------------- Work Mode ---------------- */

    if (filters.workMode) {
      if (filters.workMode === "remote") {
        result = result.filter((job) => job.isRemote === true);
      }

      if (filters.workMode === "onsite") {
        result = result.filter((job) => job.isRemote === false);
      }
    }

    /* ---------------- Salary ---------------- */

    if (filters.salary) {
      result = result.filter((job) => {
        const minSalary = Number(job.minSalary || 0);
        const maxSalary = Number(job.maxSalary || 0);

        switch (filters.salary) {
          case "50000":
            return maxSalary >= 50000;

          case "100000":
            return maxSalary >= 100000;

          case "150000":
            return maxSalary >= 150000;

          case "200000":
            return maxSalary >= 200000;

          default:
            return true;
        }
      });
    }

    return result;
  }, [jobs, filters]);

  return (
    <>
      {/* Filters */}
      <JobFilters jobs={jobs} filters={filters} onFiltersChange={setFilters} />

      {/* Result Count */}
      <div className="mb-6 mt-8">
        <p className="text-sm text-muted-foreground">
          Showing{" "}
          <span className="font-semibold text-foreground">
            {filteredJobs.length}
          </span>{" "}
          {filteredJobs.length === 1 ? "job" : "jobs"}
        </p>
      </div>

      {/* Job Cards */}
      {filteredJobs.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredJobs.map((job) => (
            <JobCard key={job._id} job={job} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-default p-12 text-center">
          <h3 className="text-lg font-semibold">No jobs found</h3>

          <p className="mt-2 text-sm text-muted-foreground">
            Try changing your search or filter options.
          </p>
        </div>
      )}
    </>
  );
};

export default JobListingContainer;
