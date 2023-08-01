-- CreateTable
CREATE TABLE "user_reportee" (
    "id" TEXT NOT NULL,
    "reporteeId" TEXT NOT NULL,
    "managerId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_reportee_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "user_reportee" ADD CONSTRAINT "user_reportee_reporteeId_fkey" FOREIGN KEY ("reporteeId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_reportee" ADD CONSTRAINT "user_reportee_managerId_fkey" FOREIGN KEY ("managerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
