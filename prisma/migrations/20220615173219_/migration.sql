/*
  Warnings:

  - Added the required column `code` to the `associations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `code` to the `prefectures` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "associations" ADD COLUMN     "code" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "prefectures" ADD COLUMN     "code" INTEGER NOT NULL;
