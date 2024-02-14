import { useQuery } from '@tanstack/vue-query'
import clientsApi from '@/api/api'
import type { Client } from '@/interfaces/clients';


const getClients = async( ):Promise<Client[]> => {

      await new Promise( resolve => {
         setTimeout( () => resolve(true), 2500 )
     }) 

    const { data } = await clientsApi.get<Client[]>(`/clientes`);
    return data;
}


const useClients = () => {


    const { isLoading, data, isError } = useQuery(  {
        queryKey: ['todos'],
        queryFn: getClients,
        staleTime: 1000,
        refetchInterval:1000 * 120,   //aquí está la magia
    }   
        
    )


    return {
        data,
        isLoading,
        isError,
    }
}


export default useClients;