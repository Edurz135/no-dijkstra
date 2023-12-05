import React from "react";
import "./customNavbar.component.css";

const NavbarItem = (props) => {
  return (
    <span
      className={
        props.trigger
          ? "font-aborder mx-4 decoration-none hover:underline transition duration-100 text-con-primary"
          : "font-bborder mx-4 decoration-none hover:underline transition duration-100 text-con-secondary"
      }
    >
      <a
        className={
          props.trigger
            ? "font-aborder transition duration-100 hover:text-con-primary"
            : "font-bborder transition duration-100 hover:text-con-secondary"
        }
        href={props.url}
      >
        {props.name}
      </a>
    </span>
  );
};

export default function CustomNavbar(props) {
  return (
    <div className="fixed px-20 pt-14 z-50 w-full font-fheader">
      <div className="flex flex-row justify-between text-con-primary">
        <div className="text-3xl">
          <span
            className={
              props.userOnHomeSection
                ? "font-aborder transition duration-100 text-con-primary"
                : "font-bborder transition duration-100 text-con-secondary"
            }
          >
            EDURZ
          </span>
        </div>
        <div className="flex flex-row">
          <NavbarItem
            name="HOME"
            url="#home"
            trigger={props.userOnHomeSection}
          />
          <NavbarItem
            name="DESCRIPTION"
            url="#description"
            trigger={props.userOnHomeSection}
          />
          <NavbarItem
            name="ALGORITHM"
            url="#algorithm"
            trigger={props.userOnHomeSection}
          />
          <NavbarItem
            name="ABOUT"
            url="#about"
            trigger={props.userOnHomeSection}
          />
        </div>
        <div>
          <a
            href="#about"
            className="bg-con-secondary-60 px-4 py-1 rounded-full hover:text-con-primary hover:underline"
          >
            CONTACT ME
          </a>
        </div>
      </div>
    </div>
  );
}
