import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const CustomVideoPlayer = ({ url }) => {
  return <ReactPlayer url={url} width={'100%'} height={'100%'} controls />;
};

export default CustomVideoPlayer;
