import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";


function GalleryScreen({ gallery, videos }) {
  const [activeTab, setActiveTab] = React.useState("images");

  function getFirstAndLastHalf(array) {
    const halfwayIndex = Math.ceil(array.length / 2);
    const firstHalf = array.slice(0, halfwayIndex);
    const lastHalf = array.slice(-halfwayIndex);
    return { firstHalf, lastHalf };
  }

  const galleryArray = getFirstAndLastHalf(gallery ?? []);

  return (
    <div>
      <Navbar />

      <div className="text-center mt-5">
        <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
          Our<span className="text-primary"> Gallery</span>
        </h3>
      </div>

      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-10">
        <Tabs value={activeTab}>
          <TabsHeader>
            <Tab value="images" onClick={() => setActiveTab("images")}>
              Images
            </Tab>
            <Tab value="videos" onClick={() => setActiveTab("videos")}>
              Videos
            </Tab>
          </TabsHeader>
          <TabsBody>
            <TabPanel value="images">
              <div className="-m-1 flex flex-wrap md:-m-2">
                <div className="flex w-1/2 flex-wrap">
                  {gallery && galleryArray.firstHalf.map((gall, index) => (
                    <div key={index} className={`${(index + 1) % 3 === 0 ? 'w-full' : 'w-1/2'} p-1 md:p-2`}>
                      <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center"
                        src={gall.image} />
                    </div>
                  ))}
                </div>
                <div className="flex w-1/2 flex-wrap">
                  {gallery && galleryArray.lastHalf.map((gall, index) => (
                    <div key={index} className={`${(index + 1) % 3 === 1 ? 'w-full' : 'w-1/2'} p-1 md:p-2`}>
                      <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center"
                        src={gall.image} />
                    </div>
                  ))}
                </div>
              </div>
            </TabPanel>
            <TabPanel value="videos">
              <div className="grid md:grid-cols-2">
                {videos.map((video, index) => (
                  <VideoPlayer key={index} video={video} />
                ))}
              </div>
            </TabPanel>
          </TabsBody>
        </Tabs>
      </div>
      <Footer />
    </div>
  )
}

function VideoPlayer({ video }) {
  const videoRef = React.useRef(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  React.useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  function handlePlay() {
    setIsPlaying(true);
  }

  function handlePause() {
    setIsPlaying(false);
  }

  return (
    <div className="relative">
      <video src={video.image} className="w-full" ref={videoRef} />
      <div className="absolute inset-0 flex items-center justify-center">
        {isPlaying ? (
          <button className="text-white" onClick={handlePause}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-20 h-20">
              <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM9 8.25a.75.75 0 00-.75.75v6c0 .414.336.75.75.75h.75a.75.75 0 00.75-.75V9a.75.75 0 00-.75-.75H9zm5.25 0a.75.75 0 00-.75.75v6c0 .414.336.75.75.75H15a.75.75 0 00.75-.75V9a.75.75 0 00-.75-.75h-.75z" clipRule="evenodd" />
            </svg>
          </button>
        ) : (
          <button className="text-white" onClick={handlePlay}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-20 h-20">
              <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

export default GalleryScreen