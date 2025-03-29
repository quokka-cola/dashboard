import React from "react";

type SmappenMapProps = {
  iframeUrl?: string;
}

class SmappenMap extends React.Component<SmappenMapProps>{
  constructor(props: SmappenMapProps){
    super(props);
  }

  componentDidUpdate(newProps: SmappenMapProps) {
    // ✅ Vérifie si les props ont changé avant de mettre à jour l'état
    if (newProps.iframeUrl !== this.props.iframeUrl) {
      this.setState({
        iframeUrl: newProps.iframeUrl.length > 0 ? newProps.iframeUrl : this.props.iframeUrl,
      });
    }
  }

  render(): React.ReactNode {
    // ✅ Integrate smappen map in a 16:10 ratio
    return (
      <div className="relative w-full pb-[62.5%]"> {/* 16:10 aspect ratio */}
        <iframe
          src={this.props.iframeUrl}
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full rounded-lg"
        ></iframe>
      </div>
    );
  }

}
/*
const SmappenMap: React.FC<SmappenMapProps> = ({
  iframeUrl = "https://www.smappen.fr/app/iframe/iyZ9IzAyRqcbIzsE",
}) => {
  return (
    <Card extra="flex flex-col bg-white w-full rounded-3xl py-6 px-2 text-center">
      <div className="mb-auto flex items-center justify-between px-6">
        <h2 className="text-lg font-bold text-navy-700 dark:text-white">
          Carte Isochrone Smappen
        </h2>
        <button className="!linear z-[1] flex items-center justify-center rounded-lg bg-lightPrimary p-2 text-brand-500 !transition !duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10">
          <MdBarChart className="h-6 w-6" />
        </button>
      </div>

   
      <div className="relative w-full pb-[62.5%]"> 
        <iframe
          src={iframeUrl}
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full rounded-lg"
        ></iframe>
      </div>
    </Card>
  );
};*/

export default SmappenMap;