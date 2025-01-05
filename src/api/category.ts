import { call } from "./BaseApi";

const url = process.env.NEXT_PUBLIC_BASE_URL

 // eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getListCategories = async (): Promise<any> => {
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
