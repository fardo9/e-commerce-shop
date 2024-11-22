import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./server/migrations",
  schema: "./server/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
