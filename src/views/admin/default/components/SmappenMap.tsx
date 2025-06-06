import Card from "components/card";
import { MdBarChart } from "react-icons/md";
import SmappenMap from "components/smappenMap/SmappenMap";

const mapFrameUrl="https://www.smappen.fr/app/iframe/iyZ9IzAyRqcbIzsE"

const SmappenMapCard = () => {
  return (
    <Card extra="flex flex-col bg-white w-full rounded-3xl py-6 px-2 text-center">
      <div className="mb-auto flex items-center justify-between px-6">
        <h2 className="text-lg font-bold text-navy-700 dark:text-white">
          Carte Isochrone
        </h2>
        <button className="!linear z-[1] flex items-center justify-center rounded-lg bg-lightPrimary p-2 text-brand-500 !transition !duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10">
          <MdBarChart className="h-6 w-6" />
        </button>
      </div>
      <SmappenMap iframeUrl={mapFrameUrl} />
    </Card>
  );
};

export default SmappenMapCard;
