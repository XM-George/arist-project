"use client";

import { useState } from "react";
import SponsorCard from "@/components/SponsorCard";
import type { Sponsor } from "@/types/Sponsor";

export default function Home() {
    const [sponsors, setSponsors] = useState<Sponsor[]>([
        {
            id: 1,
            name: "Acme Company",
            email: "contact@acme.com",
            tier: "GOLD",
            amount: 5000,
            contactPerson: "George Papadopoulos",
            notes: "Κύριος χορηγός της εκδήλωσης",
        },
        {
            id: 2,
            name: "Tech Solutions",
            email: "info@techsolutions.com",
            tier: "SILVER",
            amount: 2500,
            contactPerson: "Maria Nikolaou",
            notes: "Επικοινωνία ξανά τον επόμενο μήνα",
        },
    ]);

    function handleDelete(id: number) {
        setSponsors(
            sponsors.filter((sponsor) => sponsor.id !== id)
        );
    }

    return (
        <main>
            <h1>Sponsor Management</h1>

            {sponsors.map((sponsor) => (
                <SponsorCard
                    key={sponsor.id}
                    sponsor={sponsor}
                    onDelete={handleDelete}
                />
            ))}
        </main>
    );
}