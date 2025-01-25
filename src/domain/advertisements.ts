import { ENDPOINT } from '@/constants'

const getAdvertisements = async () => {
  const response = await fetch(`${ENDPOINT}/advertisements.json`)
  return response.json()
}

const getAdvertisement = async (id: string) => {
  const response = await fetch(`${ENDPOINT}/advertisements.json`)
  const result = await response.json()
  return result.find((x: any) => x.id === id)
}

const getAdvertisementAnalytics = async (id: string) => {
  const response = await fetch(`${ENDPOINT}/advertisements-analytics.json`)
  const result = await response.json()
  return result.find((x: any) => x.id === id)
}
export { getAdvertisements, getAdvertisement, getAdvertisementAnalytics }
