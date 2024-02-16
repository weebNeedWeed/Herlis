import Exercises from "./Exercises";
import Musics from "./Musics";
import Podcasts from "./Podcasts";
import SearchBar from "./SearchBar";

function HomePage() {
    return (
        <div className="flex flex-col w-full h-full">
            <SearchBar />

            <Podcasts />

            <Musics />

            <Exercises />
        </div>
    );
}

export default HomePage;
