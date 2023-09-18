/// <reference types="vite/client" />
interface Rocket{
    type: string;
    name: string;
    id: string;
    active: boolean;
    cost_per_launch: number;
    success_rate_pct: number;
    first_flight: string;
    country: string;
    company: string;
    height: {
        meters: number;
        feet: number;
    };
    diameter: {
        meters: number;
        feet: number;
    };
    mass: {
        kg: number;
        lb: number;
    };
    payload_weights: [
        {
            id: string;
            name: string;
            kg: number;
            lb: number;
        }
    ];
    stages: number;
    wikipedia: string;
}

interface Capsule{
    id: string;
    reuse_count: number;
    water_landings: number;
    land_landings: number;
    last_update: string;
    status: string;
    serial: string;
    type: string;
}