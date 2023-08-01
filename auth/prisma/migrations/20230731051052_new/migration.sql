-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_roleId_fkey";

-- DropForeignKey
ALTER TABLE "user_reportee" DROP CONSTRAINT "user_reportee_managerId_fkey";

-- DropForeignKey
ALTER TABLE "user_reportee" DROP CONSTRAINT "user_reportee_reporteeId_fkey";

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_reportee" ADD CONSTRAINT "user_reportee_reporteeId_fkey" FOREIGN KEY ("reporteeId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_reportee" ADD CONSTRAINT "user_reportee_managerId_fkey" FOREIGN KEY ("managerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
