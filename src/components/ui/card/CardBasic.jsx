import React from "react";

function CardBasic() {
  return (
    <div>
      <div className="grid grid-cols-1 w-full lg:grid-cols-5  max-w-[1200px] rounded-sm overflow-hidden mx-auto bg-white]">
        <div className="col-span-3 relative w-full aspect-[2/1] min-h-[120px] ">
          <Image
            src={data.attributes.images?.data[0].attributes.url}
            alt={`Rent ${data.attributes.name} with Richy life Club`}
            fill
            style={{
              objectFit: "contain",
              objectPosition: "center",
            }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 80vw"
            id="selectDisable"
            className="mx-auto"
          />
        </div>
        <div className="p-5 col-span-1 md:col-span-2">
          <div className="text-black h-full flex flex-col items-start justify-between">
            <h3 className="text-primary text-2xl font-bold leading-[29.04px]">
              <Link href={`${path}/${data.id}`}>{data.attributes.name}</Link>
            </h3>

            <CarDetail data={data} />

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full py-5 gap-6">
              <div className="w-full md:w-fit">
                <span className="text-primary font-normal text-2xl">
                  {convertPrice(data.attributes.price)}{" "}
                  <span className="text-secondary text-sm font-normal">
                    {variant === "car" ? "/Day" : "Starting Price"}
                  </span>
                </span>
                {variant === "car" ? (
                  <span className="text-primary text-xs">
                    {data.attributes.deposit.data && (
                      <div className="text-primary flex items-center gap-1  font-medium leading-tight">
                        {data.attributes.deposit.data?.attributes.type ===
                        "No Deposit" ? (
                          <>
                            <AiOutlineCheckCircle />
                            <span>
                              {data.attributes.deposit.data?.attributes.type}
                            </span>
                          </>
                        ) : (
                          <>
                            <AiOutlineExclamationCircle />
                            <span>
                              Deposit:&nbsp;
                              {convertPrice(
                                data.attributes.deposit.data.attributes.type
                              )}
                            </span>
                          </>
                        )}
                      </div>
                    )}
                  </span>
                ) : (
                  <span className="text-primary text-xs">
                    <div className="text-primary flex items-center gap-1  font-medium leading-tight">
                      {/* <AiOutlineExclamationCircle /> Min booking 3 hours */}
                    </div>
                  </span>
                )}
              </div>
              <div className="flex justify-between md:justify-start items-center gap-4 w-full md:w-fit">
                <div className="flex gap-4 ">
                  <Link
                    href={`tel:${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer"
                  >
                    <FaPhoneAlt size={24} color="#DCA24B" />
                  </Link>
                  <Link
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer"
                    href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=I would like to know more about ${data.attributes.name} booking`}
                  >
                    <RiWhatsappFill size={24} color="#25D366" />
                  </Link>
                </div>
                <Button
                  action={() => setBookingOpen(true)}
                  msg={`I would like to know more about ${data.attributes.name} booking`}
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardBasic;
