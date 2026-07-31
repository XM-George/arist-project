"use client";

import { useState } from "react";
import SponsorCard from "@/components/SponsorCard";
import SponsorForm from "@/components/SponsorForm";
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

    const [isFormOpen, setIsFormOpen] = useState(false);

    function handleDelete(id: number) {
        setSponsors(
            sponsors.filter((sponsor) => sponsor.id !== id)
        );
    }

    function handleAdd(newSponsor: Sponsor) {
        setSponsors([...sponsors, newSponsor]);
        setIsFormOpen(false);
    }

    return (
        <main>
            <h1>Sponsor Management</h1>

            <button onClick={() => setIsFormOpen(!isFormOpen)}>
                {isFormOpen ? "Ακύρωση" : "Νέος χορηγός"}
            </button>

            {isFormOpen && (
                <SponsorForm onAdd={handleAdd} />
            )}

            {sponsors.map((sponsor) => (
                <SponsorCard
                    key={sponsor.id}
                    sponsor={sponsor}
                    onDelete={handleDelete}
                />
            ))}
        </main>
    );


    //test for push
}