import React, { useEffect, useRef } from "react";
import { render } from "react-dom";

import data from "@emoji-mart/data";
import { Picker } from "emoji-mart";

function EmojiPicker(props) {
  const ref = useRef();

  const executedRef = useRef(false);
  useEffect(() => {
    if (executedRef.current) return;
    new Picker({ ...props, data, ref });
    executedRef.current = true;
  }, []);

  return <div ref={ref} />;
}

export default EmojiPicker;
