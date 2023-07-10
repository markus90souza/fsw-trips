/*
  Warnings:

  - You are about to drop the `TripReservation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TripReservation" DROP CONSTRAINT "TripReservation_trip_id_fkey";

-- DropForeignKey
ALTER TABLE "TripReservation" DROP CONSTRAINT "TripReservation_user_id_fkey";

-- DropTable
DROP TABLE "TripReservation";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "trip_reservations" (
    "id" TEXT NOT NULL,
    "trip_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "total_paid" DECIMAL(8,2) NOT NULL,

    CONSTRAINT "trip_reservations_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "trip_reservations" ADD CONSTRAINT "trip_reservations_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trip_reservations" ADD CONSTRAINT "trip_reservations_trip_id_fkey" FOREIGN KEY ("trip_id") REFERENCES "trips"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
