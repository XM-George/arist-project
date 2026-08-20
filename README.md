# Sponsor Management App

Μια απλή web εφαρμογή για τη διαχείριση χορηγών.

Η εφαρμογή επιτρέπει:

* προβολή χορηγών
* προσθήκη νέου χορηγού
* διαγραφή χορηγού

Κάθε χορηγός περιλαμβάνει:

* όνομα
* email
* επίπεδο χορηγίας
* ποσό χορηγίας
* υπεύθυνο επικοινωνίας
* σημειώσεις

## Τεχνολογίες

Το project χρησιμοποιεί:

* Next.js
* React
* TypeScript
* PostgreSQL
* Prisma ORM
* Docker
* Docker Compose

## Προαπαιτούμενα

Για να τρέξει η εφαρμογή χρειάζεται:

* Docker Desktop (περιλαμβάνει Docker Compose)

Δεν είναι απαραίτητο να υπάρχει εγκατεστημένη PostgreSQL τοπικά, καθώς η βάση δεδομένων εκτελείται μέσα σε Docker container.

## Εκτέλεση με Docker

Κλωνοποιήστε ή κατεβάστε το repository.

```bash
git clone https://github.com/XM-George/arist-project.git
cd arist-project
```

Ανοίξτε terminal στον φάκελο του project και εκτελέστε:

```bash
docker compose up --build
```

Το Docker Compose θα:

1. ξεκινήσει την PostgreSQL βάση δεδομένων
2. περιμένει μέχρι η βάση να είναι έτοιμη
3. εκτελέσει τα Prisma migrations
4. ξεκινήσει την Next.js εφαρμογή

Όταν ολοκληρωθεί η εκκίνηση, ανοίξτε:

```text
http://localhost:3000
```

## Τερματισμός της εφαρμογής

Για να σταματήσουν τα containers:

```bash
docker compose down
```

Τα δεδομένα της PostgreSQL αποθηκεύονται σε Docker volume και παραμένουν διαθέσιμα μετά από απλό `docker compose down`.

Για πλήρη διαγραφή των containers και των αποθηκευμένων δεδομένων:

```bash
docker compose down -v
```

**Προσοχή:** Η επιλογή `-v` διαγράφει και τα δεδομένα της βάσης.

## Database Migrations

Τα migrations βρίσκονται στον φάκελο:

```text
prisma/migrations
```

Κατά την εκκίνηση μέσω Docker Compose εκτελείται αυτόματα:

```bash
npx prisma migrate deploy
```

ώστε το database schema να είναι ενημερωμένο.

## Development χωρίς Docker για το Next.js

Για development μπορεί να εκτελεστεί το Next.js τοπικά.

Εγκατάσταση dependencies:

```bash
npm install
```

Αντιγράψτε το αρχείο `.env.example` σε `.env` αρχείο στο root του project.

Στη συνέχεια δημιουργήστε το Prisma Client με:

```bash
npx prisma generate
```

Η PostgreSQL μπορεί να ξεκινήσει μέσω Docker και στη συνέχεια η εφαρμογή με:

```bash
npm run dev
```

Η εφαρμογή θα είναι διαθέσιμη στο:

```text
http://localhost:3000
```

## Database Decision

Η επιλογή της βάσης δεδομένων και τα σχετικά trade-offs τεκμηριώνονται στο:

```text
db_decision.md
```

