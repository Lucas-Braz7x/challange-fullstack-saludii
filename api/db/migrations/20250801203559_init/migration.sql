-- CreateTable
CREATE TABLE "receita" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titulo" TEXT NOT NULL,
    "ingredientes" TEXT NOT NULL,
    "modo_preparo" TEXT NOT NULL,
    "tempo_preparo" INTEGER NOT NULL,
    "porcoes" INTEGER NOT NULL,
    "nota_pessoal" TEXT,
    "slug" TEXT NOT NULL,
    "curtidas" INTEGER NOT NULL DEFAULT 0,
    "created_at" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME
);

-- CreateTable
CREATE TABLE "categoria" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "tag" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "categoria_receita" (
    "receita_id" TEXT NOT NULL,
    "categoria_id" TEXT NOT NULL,

    PRIMARY KEY ("receita_id", "categoria_id"),
    CONSTRAINT "categoria_receita_receita_id_fkey" FOREIGN KEY ("receita_id") REFERENCES "receita" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "categoria_receita_categoria_id_fkey" FOREIGN KEY ("categoria_id") REFERENCES "categoria" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "tag_receita" (
    "receita_id" TEXT NOT NULL,
    "tag_id" TEXT NOT NULL,

    PRIMARY KEY ("receita_id", "tag_id"),
    CONSTRAINT "tag_receita_receita_id_fkey" FOREIGN KEY ("receita_id") REFERENCES "receita" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "tag_receita_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "tag" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "receita_slug_key" ON "receita"("slug");
