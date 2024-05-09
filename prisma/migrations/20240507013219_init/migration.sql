/*
  Warnings:

  - Added the required column `email` to the `Guest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eventId` to the `Guest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `linkedIn` to the `Guest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Guest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `surname` to the `Guest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eventId` to the `Question` table without a default value. This is not possible if the table is not empty.
  - Added the required column `question` to the `Question` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Guest" ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "eventId" INTEGER NOT NULL,
ADD COLUMN     "linkedIn" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "surname" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Question" ADD COLUMN     "eventId" INTEGER NOT NULL,
ADD COLUMN     "question" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Guest" ADD CONSTRAINT "Guest_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
