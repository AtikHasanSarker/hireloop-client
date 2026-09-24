'use server'

import { serverFetch, serverMutation } from "../api/core/server";

export const submitApplication = async (applicationData) => {
  return serverMutation('applications', applicationData);
};

export const getApplicationsByApplicant = async (applicantId) => {
  return serverFetch(`applications?applicantId=${applicantId}`);
};