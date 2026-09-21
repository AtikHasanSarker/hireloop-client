'use server' 

import { serverMutation } from "../api/core/server"

export const createJob = async (newJobData) => {
  return serverMutation("/api/jobs", newJobData);
};
