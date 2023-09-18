/// <reference types="vite/client" />
interface Rocket{
    rocket_id: string;
    rocket_name: string;
    rocket_type: string;
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
}

interface Capsule{
    capsule_serial: string;
    capsule_id: string;
    status: string;
    original_launch: string;
    original_launch_unix: number;
    missions: [
        {
            name: string;
            flight: number;
        }
    ];
    landings: number;
    type: string;
    details: string;
    reuse_count: number;
}