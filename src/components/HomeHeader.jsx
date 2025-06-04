import ProfileIcon from "./ProfileIcon";

const HomeHeader = () => {

    return (
        <div>
            <header className="flex h-16 justify-between md:justify-end items-center gap-4 px-5">
                <div className="flex gap-4">
                    <span className="text-black/[0.87] text-[15px] line-height hover:underline cursor-pointer">
                Gmail
                    </span>
                    <span className="text-black/[0.87] text-[15px] line-height hover:underline cursor-pointer">
                images
                    </span>

                </div>
                <ProfileIcon/>
            </header>
        </div>
    )
};

export default HomeHeader;
