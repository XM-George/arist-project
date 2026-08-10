import { prisma } from "@/lib/prisma";

export async function GET() {
    const sponsors = await prisma.sponsor.findMany();

    return Response.json(sponsors);
}

export async function POST(request: Request) {
    const body = await request.json();

    const sponsor = await prisma.sponsor.create({
        data: {
            name: body.name,
            email: body.email,
            tier: body.tier,
            amount: body.amount,
            contactPerson: body.contactPerson,
            notes: body.notes,
        },
    });

    return Response.json(sponsor, { status: 201 });
}