import { prisma } from "@/lib/prisma";

export async function GET() {
    const sponsors = await prisma.sponsor.findMany();

    return Response.json(sponsors);
}