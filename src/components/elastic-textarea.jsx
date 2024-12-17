import { useEffect, useRef, useCallback } from "react";
import { tripUnit } from "../utils/dom";
import React from "react";

const ElasticTextarea = ({ onChange, maxRows, ...props }) => {
  const ref = useRef(null);

  const adjustHeight = useCallback((el) => {
    const styles = window.getComputedStyle(el);
    const maxHeight = (maxRows ?? 1) * tripUnit(styles.lineHeight);

    el.style.minHeight = "0px";
    if (maxHeight && maxHeight < el.scrollHeight) {
      el.style.minHeight = `${maxHeight}px`;
    } else {
      el.style.minHeight = `${el.scrollHeight}px`;
    }
  }, [maxRows]);

  useEffect(() => {
    if (ref.current) {
      adjustHeight(ref.current);
    }
  }, [adjustHeight]);

  return (
    <textarea
      {...props}
      style={{
        height: "auto",
        paddingTop: 0,
        paddingBottom: 0,
        resize: "none",
      }}
      ref={ref}
      onChange={(e) => {
        if (onChange) {
          onChange(e);
        }
        adjustHeight(e.currentTarget);
      }}
      rows={1}
    />
  );
};
export default ElasticTextarea;
