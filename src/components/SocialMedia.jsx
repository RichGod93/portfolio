import React from "react";
import { BsTwitter, BsInstagram, BsGithub } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://twitter.com/riichgod_">
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href="https://github.com/RichGod93">
          <BsGithub />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/riichgod_/">
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
