/*
  Warnings:

  - You are about to drop the `_associationsToprefectures` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `associationsId` to the `prefectures` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_associationsToprefectures" DROP CONSTRAINT "_associationsToprefectures_A_fkey";

-- DropForeignKey
ALTER TABLE "_associationsToprefectures" DROP CONSTRAINT "_associationsToprefectures_B_fkey";

-- AlterTable
ALTER TABLE "prefectures" ADD COLUMN     "associationsId" UUID NOT NULL;

-- DropTable
DROP TABLE "_associationsToprefectures";

-- AddForeignKey
ALTER TABLE "prefectures" ADD CONSTRAINT "prefectures_associationsId_fkey" FOREIGN KEY ("associationsId") REFERENCES "associations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
