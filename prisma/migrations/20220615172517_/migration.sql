/*
  Warnings:

  - Added the required column `nameEng` to the `associations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nameKana` to the `associations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nameEng` to the `prefectures` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nameKana` to the `prefectures` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "associations" ADD COLUMN     "nameEng" TEXT NOT NULL,
ADD COLUMN     "nameKana" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "prefectures" ADD COLUMN     "nameEng" TEXT NOT NULL,
ADD COLUMN     "nameKana" TEXT NOT NULL;
