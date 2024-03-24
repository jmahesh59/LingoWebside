
import { serial, pgTable, text } from "drizzle-orm/pg-core";

export const courses = pgTable("courses",{
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    imgSrc: text("image_src").notNull(),
});




