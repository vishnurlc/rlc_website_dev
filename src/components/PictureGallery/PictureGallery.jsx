import { SectionHeading } from '..';
import MasonryGrid from '../yachtrental/PictureGallery';

const PictureGallery = ({ title, description }) => {
  return (
    <>
      <SectionHeading title={title} description={description} />
      <MasonryGrid />
    </>
  );
};

export default PictureGallery;
