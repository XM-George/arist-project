import { Sponsor } from "@/types/Sponsor";

type SponsorCardProps = {
    sponsor: Sponsor;
};

export default function SponsorCard({ sponsor }: SponsorCardProps) {
    return (
        <section>
            <h2>{sponsor.name}</h2>
            <p>Email: {sponsor.email}</p>
            <p>Tier: {sponsor.tier}</p>
            <p>Ποσό: {sponsor.amount} €</p>
            <p>Υπεύθυνος: {sponsor.contactPerson}</p>
            <p>Σημειώσεις: {sponsor.notes}</p>
        </section>
    );
}