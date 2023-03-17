/*
  Warnings:

  - You are about to drop the column `male` on the `cat` table. All the data in the column will be lost.
  - Made the column `status` on table `cat` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `cat` DROP COLUMN `male`,
    ADD COLUMN `sexe` ENUM('Male', 'Femelle') NOT NULL DEFAULT 'Male',
    MODIFY `status` ENUM('Unavailable', 'Option', 'Reserved', 'Available') NOT NULL DEFAULT 'Unavailable';
