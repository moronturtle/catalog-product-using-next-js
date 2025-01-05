import { call } from "./BaseApi";

const url = process.env.NEXT_PUBLIC_BASE_URL

 // eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getListAllProduct = async (): Promise<any> => {
    try {
      const response = await call({
        method: 'GET',
        url: `${url}/products`,
      })
  
      return response ;

    } catch (error) {
      console.error('Error making API call', error)
    }
  }

   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const getProductById = async (id: string): Promise<any> => {
    try {
      const response = await call({
        method: 'GET',
        url: `${url}/products/${id}`,
      })
  
      return response ;

    } catch (error) {
      console.error('Error making API call', error)
    }
  }

   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const getProductByCategory = async (category: string): Promise<any> => {
    try {
      const response = await call({
        method: 'GET',
        url: `${url}/products/category/${category}`,
      })
  
      return response ;

    } catch (error) {
      console.error('Error making API call', error)
    }
  }