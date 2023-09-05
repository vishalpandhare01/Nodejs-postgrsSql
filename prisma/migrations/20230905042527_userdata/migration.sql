-- CreateTable
CREATE TABLE "user_Data" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "user_Data_pkey" PRIMARY KEY ("id")
);
