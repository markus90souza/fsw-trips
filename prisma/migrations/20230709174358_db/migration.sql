-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "trips" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "price_per_day" DECIMAL(8,2) NOT NULL,
    "description" TEXT NOT NULL,
    "cover_image" TEXT NOT NULL,
    "image_urls" TEXT[],
    "highlights" TEXT[],
    "max_guests" INTEGER NOT NULL,

    CONSTRAINT "trips_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TripReservation" (
    "id" TEXT NOT NULL,
    "trip_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "total_paid" DECIMAL(8,2) NOT NULL,

    CONSTRAINT "TripReservation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TripReservation" ADD CONSTRAINT "TripReservation_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TripReservation" ADD CONSTRAINT "TripReservation_trip_id_fkey" FOREIGN KEY ("trip_id") REFERENCES "trips"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
