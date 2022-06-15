/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `associations` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[code]` on the table `prefectures` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "associations_code_key" ON "associations"("code");

-- CreateIndex
CREATE UNIQUE INDEX "prefectures_code_key" ON "prefectures"("code");
