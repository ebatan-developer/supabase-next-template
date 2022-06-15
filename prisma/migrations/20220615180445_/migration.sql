/*
  Warnings:

  - You are about to drop the column `associationsId` on the `prefectures` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "prefectures" DROP CONSTRAINT "prefectures_associationsId_fkey";

-- AlterTable
ALTER TABLE "prefectures" DROP COLUMN "associationsId";

-- CreateTable
CREATE TABLE "_associationsToprefectures" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_associationsToprefectures_AB_unique" ON "_associationsToprefectures"("A", "B");

-- CreateIndex
CREATE INDEX "_associationsToprefectures_B_index" ON "_associationsToprefectures"("B");

-- AddForeignKey
ALTER TABLE "_associationsToprefectures" ADD CONSTRAINT "_associationsToprefectures_A_fkey" FOREIGN KEY ("A") REFERENCES "associations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_associationsToprefectures" ADD CONSTRAINT "_associationsToprefectures_B_fkey" FOREIGN KEY ("B") REFERENCES "prefectures"("id") ON DELETE CASCADE ON UPDATE CASCADE;
