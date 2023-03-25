import {FaQuoteLeft,FaQuoteRight} from "react-icons/fa"
// import {FiChevronLeft, FiChevronRight} from "react-icons/fi"
function Card(props){
    let review = props.review
return(
    <div className="flex flex-col relative">
        <div className="absolute top-[-7rem] z-[10] mx-auto">
            <img src={review.image} alt=""
            className="aspect-square rounded-full  w-[140px] h-[140px] z-25 "/>
            <div className="w-[140px] h-[140px] rounded-full bg-violet-500 absolute z-[-10] top-[-6px]"></div>
        </div>
        <div className="text-center mt-7">
            <p className="font-bold text-2xl capitalize tracking-wider">{review.name}</p>
            <p className="text-violet-500 uppercase text-sm">{review.job}</p>
        </div>
        <div className="text-violet-400 mx-auto mt-5">
            <FaQuoteLeft/>
        </div>
        <div className="text-center mt-4 text-slate-500">
            <p>{review.text}</p>
        </div>
        <div className="text-violet-400 mx-auto mt-5">
            <FaQuoteRight/>
        </div>
    </div>
    
)
}

export default Card;