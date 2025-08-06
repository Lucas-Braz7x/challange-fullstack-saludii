-- CreateIndex
CREATE INDEX "categoria_nome_idx" ON "categoria"("nome");

-- CreateIndex
CREATE INDEX "receita_titulo_idx" ON "receita"("titulo");

-- CreateIndex
CREATE INDEX "receita_ingredientes_idx" ON "receita"("ingredientes");

-- CreateIndex
CREATE INDEX "tag_nome_idx" ON "tag"("nome");
