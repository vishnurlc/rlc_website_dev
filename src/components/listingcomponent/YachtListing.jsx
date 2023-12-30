import { SectionHeading } from "..";
import Card from "../ui/card/card";
const ListingComponent = ({ variant, data }) => {
  return (
    <div className="py-[40px] flex flex-col items-center gap-8 md:gap-16 px-6">
      <SectionHeading
        title={"Sail in Splendor"}
        description={
          "Chart Your Course to Unparalleled Luxury with our Exclusive Yachts"
        }
        mobile={false}
      />
      <div className="flex flex-col gap-8 w-full">
        {data.data.map((yacht, index) => (
          <Card data={yacht} variant={variant} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ListingComponent;
