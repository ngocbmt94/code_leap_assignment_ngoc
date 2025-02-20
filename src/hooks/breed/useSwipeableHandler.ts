import { useDispatch } from "react-redux";
import { useSwipeable } from "react-swipeable";

import { setNextPageIndex } from "../../redux/features/pagination/paginationSlice";

const useSwipeableHandler = () => {
  const dispatch = useDispatch();

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipeMove(),
    onSwipedRight: () => handleSwipeMove(),
    onSwipedUp: () => console.log("Swiped Up!"),
    onSwipedDown: () => console.log("Swiped Down!"),

    delta: 0, // Minimum distance (in pixels) required to register a swipe
    trackMouse: true, // Allow mouse swiping for desktop
  });

  const handleSwipeMove = () => {
    dispatch(setNextPageIndex());
  };

  return { handlers };
};

export default useSwipeableHandler;
