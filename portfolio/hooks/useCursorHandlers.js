import { useContext, useCallback } from "react";
import { MouseContext } from "../utils/mouse-context";

const useCursorHandlers = (options = {}) => {
  const [, setCursor] = useContext(MouseContext);

  const toggleCursor = () => {
    setCursor(({ active }) => ({ active: !active }));
  };
  const onMouseEnter = useCallback(event => {
    if (options.onMouseEnter) {
      options.onMouseEnter(event);
    }
    toggleCursor();
  });
  const onMouseLeave = useCallback(event => {
    if (options.onMouseLeave) {
      options.onMouseLeave(event);
    }
    toggleCursor();
  });
  return { onMouseEnter, onMouseLeave };
};

export default useCursorHandlers;