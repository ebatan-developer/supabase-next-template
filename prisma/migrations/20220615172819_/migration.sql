/*
  Warnings:

  - You are about to drop the column `nameEng` on the `associations` table. All the data in the column will be lost.
  - You are about to drop the column `nameKana` on the `associations` table. All the data in the column will be lost.
  - You are about to drop the column `nameEng` on the `prefectures` table. All the data in the column will be lost.
  - You are about to drop the column `nameKana` on the `prefectures` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "associations" DROP COLUMN "nameEng",
DROP COLUMN "nameKana";

-- AlterTable
ALTER TABLE "prefectures" DROP COLUMN "nameEng",
DROP COLUMN "nameKana";
