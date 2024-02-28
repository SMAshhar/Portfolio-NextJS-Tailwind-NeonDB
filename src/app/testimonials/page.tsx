

// components
import TestSlider from "@/components/Test/Test";
import FollowPointer from "@/utils/FollowPointer";

export default function Testimonials() {


    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="h-1 w-1 bg-gradient-to-t from-red-500 to-red-800">
                <FollowPointer />
            </div>
            <TestSlider />
        </div>
    )
}