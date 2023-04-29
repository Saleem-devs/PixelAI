import React from "react";
import FileSaver from "file-saver";
import download from "../Images/icons8-downloading-updates-30 (1).png";
import deleteIcon from "../Images/icons8-delete-30 (1).png";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../Config/firebase";

function Card({ id, prompt, image, userId, deleteImage }) {
  async function downloadImage(id, image) {
    FileSaver.saveAs(image, `download-${id}.png`);
  }

  return (
    <>
      <div className={`${image ? "block" : "hidden"}`}>
        <div className="rounded-xl group card cursor-pointer relative shadow-card hover:shadow-cardhover">
          <img
            src={image}
            alt={prompt}
            className="w-full h-auto object-cover rounded-xl"
          />

          <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">
            <p className="text-white text-sm overflow-y-auto prompt">
              {prompt}
            </p>
          </div>
        </div>
        <div
          className={`flex items-center justify-between bg-[#10131f] my-2 px-4 py-1.5 rounded-md`}
        >
          <button
            type="button"
            className="bordrer-none bg-transparent outline-none"
            onClick={() => deleteImage(id)}
          >
            <img
              src={deleteIcon}
              alt="delete-icon"
              className="w-[20px] cursor-pointer "
            />
          </button>

          <button
            type="button"
            className="bordrer-none bg-transparent outline-none"
            onClick={() => downloadImage(id, image)}
          >
            <img
              src={download}
              alt="delete-icon"
              className="w-[20px] cursor-pointer "
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
