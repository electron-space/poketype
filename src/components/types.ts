

/**
 * Types & Interfaces
 */


export interface Pokemon {
    id: number;
    name: {
        english: string;
    }
    type: string[];
    base: Record<string, number>;
}