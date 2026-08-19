'use server'

import { serverFetch, serverMutation } from "../api/core/server"

export const createCompany = async (newCompanyData) => {
  return serverMutation('companies', newCompanyData);
};

export const getRecruiterCompany = async (recruiterId) => {
  if (!recruiterId) return null;
  return serverFetch(`my/company?recruiterId=${recruiterId}`);
};