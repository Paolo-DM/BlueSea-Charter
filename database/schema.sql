set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "public"."users" (
	"userId" serial NOT NULL,
	"firstName" TEXT NOT NULL,
	"lastName" TEXT NOT NULL,
	"email" TEXT NOT NULL UNIQUE,
	"hashedPassword" TEXT NOT NULL,
	"phoneNumber" TEXT NOT NULL UNIQUE,
	CONSTRAINT "users_pk" PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."products" (
	"productId" serial NOT NULL,
	"categoryId" integer NOT NULL,
	"price" DECIMAL NOT NULL,
	"priceId" TEXT NOT NULL,
	"shortDescription" TEXT NOT NULL,
	"longDescription" TEXT NOT NULL,
	"imageUrl" TEXT NOT NULL,
	"navigationAreas" TEXT,
	"title" TEXT NOT NULL,
	"subTitle" TEXT NOT NULL,
	CONSTRAINT "products_pk" PRIMARY KEY ("productId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."orders" (
	"orderId" serial NOT NULL,
	"orderDate" DATE NOT NULL,
	"total" DECIMAL NOT NULL,
	"userId" integer NOT NULL,
	"bookingDate" DATE NOT NULL,
	"productId" integer NOT NULL,
	CONSTRAINT "orders_pk" PRIMARY KEY ("orderId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."categories" (
	"categoryId" serial NOT NULL,
	"categoryName" TEXT NOT NULL,
	CONSTRAINT "categories_pk" PRIMARY KEY ("categoryId")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "public"."boats" (
	"boatId" serial NOT NULL,
	"name" TEXT NOT NULL,
	"model" TEXT NOT NULL,
  "speed" TEXT NOT NULL,
	"motorization" TEXT NOT NULL,
	"length" TEXT NOT NULL,
	"capacity" integer NOT NULL,
	"beds" TEXT NOT NULL,
	"kitchen" integer NOT NULL,
  "imageUrl" TEXT NOT NULL,
  "internal1" TEXT NOT NULL,
  "internal2" TEXT NOT NULL,
  "internal3" TEXT NOT NULL,
	CONSTRAINT "boats_pk" PRIMARY KEY ("boatId")
) WITH (
  OIDS=FALSE
);



ALTER TABLE "products" ADD CONSTRAINT "products_fk0" FOREIGN KEY ("categoryId") REFERENCES "categories"("categoryId");

ALTER TABLE "orders" ADD CONSTRAINT "orders_fk0" FOREIGN KEY ("userId") REFERENCES "users"("userId");
ALTER TABLE "orders" ADD CONSTRAINT "orders_fk1" FOREIGN KEY ("productId") REFERENCES "products"("productId");
