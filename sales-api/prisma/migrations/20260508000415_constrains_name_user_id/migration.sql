/*
  Warnings:

  - A unique constraint covering the columns `[name,userId]` on the table `produts` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "produts_name_userId_key" ON "produts"("name", "userId");
