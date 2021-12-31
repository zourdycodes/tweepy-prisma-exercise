-- CreateTable
CREATE TABLE "Twit" (
    "id" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Twit_pkey" PRIMARY KEY ("id")
);
