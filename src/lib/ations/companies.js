'use server'

import { serverMutation } from "../api/core/server"

export const createCompany= async(newCompanyData)=> {
    return serverMutation('/api/companies', newCompanyData)
}