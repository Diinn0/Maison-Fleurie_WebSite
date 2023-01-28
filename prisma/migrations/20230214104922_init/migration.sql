/*
  Warnings:

  - You are about to alter the column `status` on the `cat` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(1))`.
  - You are about to drop the column `roleId` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `role` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `role` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `User_roleId_fkey` ON `user`;

-- AlterTable
ALTER TABLE `cat` MODIFY `status` ENUM('Unavailable', 'Option', 'Reserved', 'Available') NULL;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `roleId`,
    ADD COLUMN `role` ENUM('ADMIN') NOT NULL;

-- DropTable
DROP TABLE `role`;
