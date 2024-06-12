import Marquee from "../components/magicui/marquee";
import { data } from "../constant/data";
import Image from "next/image";

const firstRow = data.slice(0, data.length / 2);
const secondRow = data.slice(data.length / 2);

const ReviewCard = ({ src, alt }) => {
    return (
        <figure>
            <div className="flex flex-row items-center gap-2">
                <Image src={src} width="200" height="100" alt={alt} />
            </div>
        
        </figure>
    );
};

const MarqueeDemo = () => {
    console.log(secondRow);
    console.log("hello");

    return (
        <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background py-20 md:shadow-xl">
            <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((review, index) => (
                    <ReviewCard key={index} src={review.src} alt={review.alt} />
                ))}
            </Marquee>
          
            <div className=" pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r"></div>
            <div className=" pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l"></div>
        </div>
    );
};

export default MarqueeDemo;


