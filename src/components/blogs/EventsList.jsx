import InfinitScroll from '../chaufferservice/InfinitScroll';

const EventsList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      <InfinitScroll fetchApi={'events'} />
    </div>
  );
};

export default EventsList;
