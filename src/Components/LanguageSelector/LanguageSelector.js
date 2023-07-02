import React, { useState } from "react";
import i18n from "../../i18n";
import "./LanguageSelector.css";
const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // i18n.language contains the language assigned to lng in i18n.js file.

  const chooseLanguage = (e) => {
    // e.preventDefault();
    i18n.changeLanguage(e.target.value); // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
    setSelectedLanguage(e.target.value);
  };

  return (
    <div>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "center", marginLeft: "1rem"}}>
        <label class="rad-label">
          <input type="radio" class="rad-input" name="rad" value="en" defaultChecked onClick={chooseLanguage}/>
          <div class="rad-design"></div>
          <div class="rad-text">English</div>
        </label>
        <label class="rad-label">
          <input type="radio" class="rad-input" name="rad" value="es" onClick={chooseLanguage}/>
          <div class="rad-design"></div>
          <div class="rad-text">Spanish</div>
        </label>
      </div>
    </div>
  );
};

export default LanguageSelector;
