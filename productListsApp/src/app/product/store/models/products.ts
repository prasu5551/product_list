export interface Products {
    id: number;
    uid: string;
    blend_name: string;
    origin: string;
    variety: string;
    notes: string;
    intensifier: string;
}
export interface ProductStateInterface {
    isLoading: boolean;
    products: Products[];
    error: string | null;
}