"use client";

import type { NewSponsor, SponsorTier } from "@/types/Sponsor";

import { useState } from "react";

type SponsorFormProps = {
    onAdd: (sponsor: NewSponsor) => void;
};

export default function SponsorForm({ onAdd }: SponsorFormProps) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [tier, setTier] = useState("SUPPORTER");
    const [amount, setAmount] = useState("");
    const [contactPerson, setContactPerson] = useState("");
    const [notes, setNotes] = useState("");

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const newSponsor: NewSponsor = {
            name: name,
            email: email,
            tier: tier as SponsorTier,
            amount: Number(amount),
            contactPerson: contactPerson,
            notes: notes,
        };

        onAdd(newSponsor);

        setName("");
        setEmail("");
        setTier("SUPPORTER");
        setAmount("");
        setContactPerson("");
        setNotes("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Όνομα χορηγού</label>

            <input
                id="name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />

            <label htmlFor="email">Email</label>

            <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />

            <label htmlFor="tier">Tier</label>

            <select
                id="tier"
                value={tier}
                onChange={(event) => setTier(event.target.value)}
            >
                <option value="PLATINUM">PLATINUM</option>
                <option value="GOLD">GOLD</option>
                <option value="SILVER">SILVER</option>
                <option value="BRONZE">BRONZE</option>
                <option value="SUPPORTER">SUPPORTER</option>
            </select>

            <label htmlFor="amount">Ποσό χορηγίας (€)</label>

            <input
                id="amount"
                type="number"
                min="0"
                step="0.01"
                value={amount}
                onChange={(event) => setAmount(event.target.value)}
            />

            <label htmlFor="contactPerson">Υπεύθυνος επικοινωνίας</label>

            <input
                id="contactPerson"
                type="text"
                value={contactPerson}
                onChange={(event) => setContactPerson(event.target.value)}
            />

            <label htmlFor="notes">Σημειώσεις</label>

            <textarea
                id="notes"
                value={notes}
                onChange={(event) => setNotes(event.target.value)}
            />

            <button type="submit">Προσθήκη χορηγού</button>
        </form>
    );
}