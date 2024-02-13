# prueba_tanstackQuery

Se ha instalado tanstackQuery
```sh
npm i @tanstack/vue-query
```

### Prueba de refresco de la página de clientes de manera automática y pasado el tiempo indicado en caché

const { isLoading, data, isError } = useQuery(  {
        queryKey: ['todos'],
        queryFn: getClients,
        staleTime: 1000,
        refetchInterval:1000 * 30,   //aquí está la magia
    }   
        

