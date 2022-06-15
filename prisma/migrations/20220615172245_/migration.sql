-- CreateTable
CREATE TABLE "referees" (
    "id" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "jfaRegistationId" TEXT,
    "usersId" UUID NOT NULL,
    "associationsId" UUID NOT NULL,

    CONSTRAINT "referees_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "prefectures" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "associationsId" UUID NOT NULL,

    CONSTRAINT "prefectures_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "associations" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "associations_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "referees" ADD CONSTRAINT "referees_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "referees" ADD CONSTRAINT "referees_associationsId_fkey" FOREIGN KEY ("associationsId") REFERENCES "associations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prefectures" ADD CONSTRAINT "prefectures_associationsId_fkey" FOREIGN KEY ("associationsId") REFERENCES "associations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
