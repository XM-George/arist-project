export type SponsorTier =
    | "PLATINUM"
    | "GOLD"
    | "SILVER"
    | "BRONZE"
    | "SUPPORTER";

export type Sponsor = {
    id: number;
    name: string;
    email: string;
    tier: SponsorTier;
    amount: number;
    contactPerson: string;
    notes: string;
};

export type NewSponsor = Omit<Sponsor, "id">;