'use server' 

import { serverMutation } from "../api/core/server"

export const createJob = async (newJobData) => {
  return serverMutation("jobs", newJobData);
};
