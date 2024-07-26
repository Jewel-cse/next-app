-- CreateTable
CREATE TABLE "Snippet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "code" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Snippet_title_key" ON "Snippet"("title");
