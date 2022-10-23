import React from "react";
import { BsTwitter, BsInstagram, BsGithub } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://twitter.com/_riich_god">
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href="https://github.com/RichGod93">
          <BsGithub />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/_riich_god/">
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
