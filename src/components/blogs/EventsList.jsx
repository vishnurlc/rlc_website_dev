import InfinitScroll from '../chaufferservice/InfinitScroll';

const EventsList = () => {
  return <InfinitScroll fetchApi={'events'} blog={true} />;
};

export default EventsList;
