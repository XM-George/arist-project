export type Sponsor = {
    id: number;
    name: string;
    email: string;
    tier: "PLATINUM" | "GOLD" | "SILVER" | "BRONZE" | "SUPPORTER";
    amount: number;
    contactPerson: string;
    notes: string;
};