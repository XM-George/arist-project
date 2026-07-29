"use client";

import type { Sponsor } from "@/types/Sponsor";

type SponsorCardProps = {
    sponsor: Sponsor;
    onDelete: (id: number) => void;
};

export default function SponsorCard({sponsor, onDelete,}: SponsorCardProps) {
    function handleDelete() {
        alert(`Διαγραφή χορηγού: ${sponsor.name}`);
    }

    return (
        <section>
            <h2>{sponsor.name}</h2>
            <p>Email: {sponsor.email}</p>
            <p>Tier: {sponsor.tier}</p>
            <p>Ποσό: {sponsor.amount} €</p>
            <p>Υπεύθυνος: {sponsor.contactPerson}</p>
            <p>Σημειώσεις: {sponsor.notes}</p>

            <button
                onClick={() => {
                    const confirmed = window.confirm(
                        `Θέλεις σίγουρα να διαγράψεις τον χορηγό ${sponsor.name};`
                    );

                    if (confirmed) {
                        onDelete(sponsor.id);
                    }
                }}
            >
                Διαγραφή
            </button>
        </section>
    );
}