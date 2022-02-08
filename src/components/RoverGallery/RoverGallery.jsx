import styles from "./RoverGallery.module.scss";

const RoverGallery = ({ roverPic }) => {
    console.log("roverPic Prop:", roverPic);
    return <div>{<img src={roverPic.img_src} alt="" />}</div>;
};

export default RoverGallery;
