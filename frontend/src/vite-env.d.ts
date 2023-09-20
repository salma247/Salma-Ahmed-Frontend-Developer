/// <reference types="vite/client" />

interface Capsule{
    launches: string[];
    id: string;
    reuse_count: number;
    water_landings: number;
    land_landings: number;
    last_update: string;
    status: string;
    serial: string;
    type: string;
}

interface CapsuleResponse{
    docs: Capsule[];
    totalDocs: number;
    limit: number;
    totalPages: number;
    page: number;
    offset: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
    prevPage: number;
    nextPage: number;
    offset: number;
}

interface SearchState{
    status: string;
    serial: string;
    type: string;
}