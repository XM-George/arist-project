"use client";

import { useEffect, useState } from "react";
import SponsorCard from "@/components/SponsorCard";
import SponsorForm from "@/components/SponsorForm";
import type { NewSponsor, Sponsor } from "@/types/Sponsor";


export default function Home() {
    const [sponsors, setSponsors] = useState<Sponsor[]>([]);

    const [isFormOpen, setIsFormOpen] = useState(false);

    async function handleDelete(id: number) {
        const response = await fetch(`/api/sponsors/${id}`, {
            method: "DELETE",
        });

        if (!response.ok) {
            return;
        }

        setSponsors(
            sponsors.filter((sponsor) => sponsor.id !== id)
        );
    }

    async function handleAdd(newSponsor: NewSponsor) {
        const response = await fetch("/api/sponsors", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newSponsor),
        });

        if (!response.ok) {
            alert("Αποτυχία προσθήκης χορηγού");
            return;
        }

        const createdSponsor: Sponsor = await response.json();

        setSponsors([...sponsors, createdSponsor]);
        setIsFormOpen(false);
    }

    useEffect(() => {
        async function loadSponsors() {
            const response = await fetch("/api/sponsors");

            if (!response.ok) {
                alert("Αποτυχία φόρτωσης χορηγών");
                return;
            }

            const data: Sponsor[] = await response.json();
            setSponsors(data);
        }

        loadSponsors();
    }, []);

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
}