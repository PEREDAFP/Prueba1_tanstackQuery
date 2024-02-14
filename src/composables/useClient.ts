import { useQuery } from '@tanstack/vue-query'
import clientsApi from '@/api/api'
import type { Client } from '@/interfaces/clients';


const getClient = async(id:string ):Promise<Client> => {

      await new Promise( resolve => {
         setTimeout( () => resolve(true), 2500 )
     }) 

    const { data } = await clientsApi.get<Client>(`/clientes/${id}`);
    return data;
}

const useClients = (id:string) => {


    const { isLoading, data:client, isError } = useQuery(  {
        queryKey: ['uno', id],
        queryFn: () => getClient(id),
        staleTime: 1000,
        refetchInterval:1000 * 120,   //aquí está la magia
    }   
        
    )


    return {
        client,
        isLoading,
        isError,
    }
}


export default useClients;