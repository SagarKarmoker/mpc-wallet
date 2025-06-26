import { ethers } from "ethers";

type Wallet = {
    address: string;
    publicKey?: string;
    privateKey: string;
};

export async function GET(): Promise<Response> {
    try {
        const wallet = ethers.Wallet.createRandom();

        const walletData: Wallet = {
            address: wallet.address,
            publicKey: wallet.publicKey,
            privateKey: wallet.privateKey
        };

        return new Response(
            JSON.stringify(walletData),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );
    } catch (error) {
        console.error("error while creating wallet", error);
        return new Response(
            JSON.stringify({ error: "error while creating wallet" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}

export async function POST(req: Request): Promise<Response> {
    try {
        const { privateKey } = await req.json();

        const wallet = new ethers.Wallet(privateKey);

        const walletData: Wallet = {
            address: wallet.address,
            privateKey: wallet.privateKey
        };

        return new Response(
            JSON.stringify(walletData),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );

    } catch (error) {
        console.error("error while regenerating wallet", error);
        return new Response(
            JSON.stringify({ error: "error while regenereating wallet" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}