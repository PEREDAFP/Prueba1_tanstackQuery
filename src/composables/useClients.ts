import {  watch } from 'vue'
import { useQuery } from '@tanstack/vue-query'
import { storeToRefs } from 'pinia'
import { useClientsStore } from '@/stores/clients'

import clientsApi from '@/api/api'
import type { Client } from '@/interfaces/clients';


const getClients = async( ):Promise<Client[]> => {

     /* await new Promise( resolve => {
         setTimeout( () => resolve(true), 2500 )
     }) */

    const { data } = await clientsApi.get<Client[]>(`/clientes`);
    return data;
}


const useClients = () => {

   // const store = useClientsStore()
   // const { clients } = storeToRefs( store )

    const { isLoading, data, isError } = useQuery(  {
        queryKey: ['todos'],
        queryFn: getClients,
        staleTime: 1000,
        refetchInterval:1000 * 30,   //aquí está la magia
    }   
        
    )
/* 
    watch( data, (clients) => {
        if( clients ){
            console.log('ha cambiado el data')
            store.setClients( clients )
        }
            
    },{ immediate: true });
 */

    return {
        data,
        isLoading,
        isError,
    }
}


export default useClients;