import React, { useState } from "react";
import { useTranslation } from 'react-i18next'

const SideBar = (props) => {
  const { t } = useTranslation();
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  const [source, setSource] = useState("");
  const [target, setTarget] = useState("");

  return (
    <div className="control-container">
      <span>{t("control.title")}</span>
      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, "default")}
        draggable
      >
        {t("control.node")}
      </div>
      <div className="control-algorithm">
        <span>{t("control.from")}</span>
        <br />
        <input
          maxLength={1}
          onChange={(e) => {
            const val = e.target.value.toUpperCase();
            setSource(val);
          }}
        ></input>
        <br />
        <span>{t("control.to")}</span>
        <br />
        <input
          maxLength={1}
          onChange={(e) => {
            const val = e.target.value.toUpperCase();
            setTarget(val);
          }}
        ></input>
        <br />
        <button
          type="button"
          onClick={() => {
            props.FindPathHandler(source, target);
          }}
        >
          {t("control.find-btn")}
        </button>
      </div>
    </div>
  );
};

export default SideBar;
