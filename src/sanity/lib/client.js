import { apiVersion, dataset, projectId, useCdn } from '../env'
import { createClient } from 'next-sanity'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: process.env.NEXT_PUBLIC_SANITY_API_SEED_DATA_TOKEN
})
