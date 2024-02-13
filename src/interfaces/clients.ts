
export interface Client {
    id:       number;
    nombre:     string;
    nivel:   nivel;
}    

export enum nivel {
    Premium = "Premium",
    Elevado= "Elevado",
    Inactivo= "Inactivo",
    
}