'use server'

import { serverFetch } from "./core/server";

const baseUrl = process.env.NEXT_PUBLIC_URL;

export const getCompanyJobs = async(companyId, status= 'active')=>{
    const res = await fetch(
      `${baseUrl}/api/jobs?companyId=${companyId}&status=${status}`,
    );
    return res.json()
}

export const getJobs = async()=>{
    const res = await fetch(`${baseUrl}/api/jobs`);
    return res.json()
}

export const getJobById = async(id)=>{
    return serverFetch(`jobs/${id}`)
}