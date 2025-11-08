// Prisma and database adapters were removed to simplify local setup.
// This file now exports a minimal stub so importing modules don't fail at build time.
// If you later want to reconnect a database, re-introduce the adapter here.

export const auth = {
    // Minimal placeholders. Extend with real implementations if you re-add a DB.
    initialized: false,
    async getUser() {
        return null;
    },
    async signIn() {
        throw new Error("Auth is not configured. Prisma/database has been removed.");
    },
};