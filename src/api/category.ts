import { call } from "./BaseApi";

const url = process.env.NEXT_PUBLIC_BASE_URL

export const getListCategory = async (): Promise<any> => {
    try {
      const response = await call({
        method: 'GET',
        url: `${url}/products/categories`,
      })
  
      return response ;

    } catch (error) {
      console.error('Error making API call', error)
    }
  }
