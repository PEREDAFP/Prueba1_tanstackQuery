import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { Client } from '@/interfaces/clients';

export const useClientsStore = defineStore('clients', () => {

    const clients = ref<Client[]>([]);

    return {
        // State
       
        clients,

        // Getters
       
        // Actions
        setClients( newClients: Client[] ) {
            clients.value = newClients
        },
    }
});