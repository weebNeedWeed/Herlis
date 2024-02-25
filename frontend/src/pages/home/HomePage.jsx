import { Helmet } from "react-helmet-async";
import Exercises from "./Exercises";
import Musics from "./Musics";
import Podcasts from "./Podcasts";
import SearchBar from "./../../components/SearchBar";

function HomePage() {
    return (
        <div className="flex flex-col w-full h-full">
            <Helmet>
                <title>Trang chủ</title>
            </Helmet>

            <SearchBar />

            <Podcasts />

            <Musics />

            <Exercises />
        </div>
    );
}

export default HomePage;
