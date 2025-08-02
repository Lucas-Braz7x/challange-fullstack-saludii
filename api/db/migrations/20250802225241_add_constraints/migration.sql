/*
  Warnings:

  - A unique constraint covering the columns `[nome]` on the table `categoria` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nome]` on the table `tag` will be added. If there are existing duplicate values, this will fail.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_receita" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titulo" TEXT NOT NULL,
    "ingredientes" TEXT NOT NULL,
    "modo_preparo" TEXT NOT NULL,
    "tempo_preparo" INTEGER NOT NULL,
    "porcoes" INTEGER NOT NULL,
    "nota_pessoal" TEXT,
    "slug" TEXT NOT NULL,
    "curtidas" INTEGER DEFAULT 0,
    "created_at" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME
);
INSERT INTO "new_receita" ("created_at", "curtidas", "id", "ingredientes", "modo_preparo", "nota_pessoal", "porcoes", "slug", "tempo_preparo", "titulo", "updated_at") SELECT "created_at", "curtidas", "id", "ingredientes", "modo_preparo", "nota_pessoal", "porcoes", "slug", "tempo_preparo", "titulo", "updated_at" FROM "receita";
DROP TABLE "receita";
ALTER TABLE "new_receita" RENAME TO "receita";
CREATE UNIQUE INDEX "receita_slug_key" ON "receita"("slug");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "categoria_nome_key" ON "categoria"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "tag_nome_key" ON "tag"("nome");
