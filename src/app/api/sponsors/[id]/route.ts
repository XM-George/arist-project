import { prisma } from "@/lib/prisma";

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;

    await prisma.sponsor.delete({
        where: {
            id: Number(id),
        },
    });

    return Response.json({ message: "Sponsor deleted" });
}