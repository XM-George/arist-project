export default function Home() {
    const sponsors = [
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
    ];

    return (
        <main>
            <h1>Sponsor Management</h1>

            {sponsors.map((sponsor) => (
                <section key={sponsor.id}>
                    <h2>{sponsor.name}</h2>
                    <p>Email: {sponsor.email}</p>
                    <p>Tier: {sponsor.tier}</p>
                    <p>Ποσό: {sponsor.amount} €</p>
                    <p>Υπεύθυνος: {sponsor.contactPerson}</p>
                    <p>Σημειώσεις: {sponsor.notes}</p>
                </section>
            ))}
        </main>
    );
}