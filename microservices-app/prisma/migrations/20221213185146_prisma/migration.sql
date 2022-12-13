-- CreateTable
CREATE TABLE "Notification" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,
    "content" TEXT,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);
