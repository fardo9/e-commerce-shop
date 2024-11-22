import { pgTable, serial, text } from 'drizzle-orm/pg-core'

const posts = pgTable('posts', {
  id: serial('id').primaryKey().notNull(),
  title: text('title').notNull()
})

export const schema = { posts }
