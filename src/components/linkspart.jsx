import React from 'react';

const Linkspart = () => {
  return (
    <div className='links'>
      <a
        className="flex flex-row font-mono"
        href="https://github.com/deepikadhameja10"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="github (1).svg"
          width={25}
          height={25}
          alt="github"
          className="mr-3"
        />
      </a>
      <a
        className="flex flex-row font-mono"
        href="https://www.linkedin.com/in/deepika-dhameja-techie/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="linkedin.png"
          width={25}
          height={25}
          alt="twitter"
          className="mr-3"
        />
        {/* <p className="sm:hidden">Twitter</p> */}
      </a>
      <a
        className="flex flex-row font-mono"
        href="https://www.instagram.com/deepika._.dhameja/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="instagram (1).svg"
          width={25}
          height={25}
          alt="instagram"
          className="mr-4"
        />
        {/* <p className="sm:hidden">Instagram</p> */}
      </a>
    </div>
  );
};

export default Linkspart;
