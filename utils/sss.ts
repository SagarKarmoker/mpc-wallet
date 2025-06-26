import { split, combine } from 'shamir-secret-sharing';

export async function splitKey(key: string) {
    try {
        const privateKeyBytes = Uint8Array.from(Buffer.from(key.slice(2), 'hex'));
        const shares = await split(privateKeyBytes, 3, 2);
        // Convert each share (Uint8Array) to hex string
        const hexShares = shares.map((share: Uint8Array) => Buffer.from(share).toString('hex'));
        return hexShares;
    } catch (error) {
        console.log("error while spliting the key", error)
    }
}

export async function combineKey(shares: string[]) {
    try {
        if (!Array.isArray(shares) || shares.length < 2) {
            throw new Error("At least 2 shares are required to reconstruct the key.");
        }
        // Convert hex string shares to Uint8Array
        const normalizedShares = shares.slice(0, 2).map((share) => {
            if (typeof share === "string") {
                return Uint8Array.from(Buffer.from(share, "hex"));
            }
            throw new Error("Share must be a hex string");
        });
        const recovered = await combine(normalizedShares);
        const recoveredHex = '0x' + Buffer.from(recovered).toString('hex');
        return recoveredHex;
    } catch (error) {
        console.log("error while combining the key", error);
    }
}