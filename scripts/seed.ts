import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from '../db/schema';

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

const main = async () => {
    try {
        console.log("Seeding database");

        await db.delete(schema.courses);
        await db.delete(schema.userProgress);

        // Ensure 'image_src' column is used and provide a valid value
        await db.insert(schema.courses).values([
             {
                id: 1,
                title: "Spanish",
                imageSrc: "/es.svg" // Ensure correct column name 'image_src' is used
             },
        
             {
                id: 2,
                title: "Italian",
                imageSrc: "/it.svg" // Ensure correct column name 'image_src' is used
             },
             {
                id: 3,
                title: "French",
                imageSrc: "/fr.svg" // Ensure correct column name 'image_src' is used
             },
             {
                id: 4,
                title: "Croation",
                imageSrc: "/hr.svg" // Ensure correct column name 'image_src' is used
             },
        ]);

        console.log("Seeding finished");

    } catch (error) {
        console.error(error);
        throw new Error("Failed to seed the database");
    }
}

main();
