import React, { useContext, useState } from "react";
import withAuthProtection from "../HOC/withAuthProtection";
import Nav from "../Components/Nav";
import Preview from "../Images/preview.png";
import { getRandomPrompt } from "../randomPrompts";
import FormField from "../Components/FormField";
import Loader from "../Components/Loader";
import { SnackbarContext } from "../SnackbarContext";
import { auth, db } from "../Config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { Link } from "react-router-dom";

function CreateImage() {
  const [form, setForm] = useState({
    prompt: "",
    photo: "",
  });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);
  const [customPrompt, setCustomPrompt] = useState("");
  const [imgGenerated, setImgGenerated] = useState(false);

  const photosCollectionRef = collection(db, "Saved Images");
  const { setSnackbarText } = useContext(SnackbarContext);

  function handleSubmit() {}
  function handleChange(e) {
    setCustomPrompt(e.target.value);
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }
  function handleRandomPrompt() {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  }
  async function generateImg(e) {
    e.preventDefault();
    if (form.prompt || customPrompt) {
      try {
        setGeneratingImg(true);
        const response = await fetch(
          "https://pixelai-5c5a.onrender.com/api/v1/dalle",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              prompt: form.prompt || customPrompt,
            }),
          }
        );

        const data = await response.json();

        setForm({ ...form, photo: data.photo });
        setImgGenerated(true);
      } catch (error) {
        setSnackbarText({
          open: true,
          message: `${error}`,
          success: false,
        });
      } finally {
        setGeneratingImg(false);
      }
    } else {
      setSnackbarText({
        open: true,
        message: "Enter a prompt or get random prompt",
        success: false,
      });
    }
  }

  async function saveImage(e) {
    e.preventDefault();
    if (imgGenerated) {
      try {
        setLoading(true);
        await addDoc(photosCollectionRef, {
          image: form.photo,
          prompt: form.prompt || customPrompt,
          userId: auth?.currentUser?.uid,
        });

        setSnackbarText({
          open: true,
          message: "Image successfully saved.",
          linkText: "Go to dashboard",
          success: true,
        });
      } catch (error) {
        setSnackbarText({
          open: true,
          message: `${error}`,
          success: false,
        });
      } finally {
        setLoading(false);
      }
    } else {
      setSnackbarText({
        open: true,
        message: "Generate an image",
        success: false,
      });
    }
  }

  return (
    <>
      <section className="bg-[#f9fafc]">
        <Nav />
        <div className="page_container pt-8 underline  text-[#666e75] hover:text-primary">
          <Link to="/dashboard">Go to dashboard</Link>
        </div>
        <main className="page_container max-w-7xl py-14">
          <div>
            <h1 className="font-bold text-[27px] md:text-3xl">
              Create Images with PixelAI
            </h1>
            <p className="mt-2 text-[16px] max-w-[550px] text-[#666e75]">
              The Ultimate Image Creation Tool: Transform your prompts into
              visuals with PixelAI
            </p>
          </div>
          <form className="max-w-3xl mt-16 " onSubmit={handleSubmit}>
            <div className="flex flex-col gap-5">
              <FormField
                labelName="Prompt"
                type="text"
                name="prompt"
                placeholder="A 3D render of a futuristic hoverbike speeding through a neon-lit city"
                value={customPrompt ? customPrompt : form.prompt}
                handleChange={handleChange}
                isRandomPrompt
                handleRandomPrompt={handleRandomPrompt}
              />

              <div className="relative bg-white border text-gray-900 text-sm rounded-md flex justify-center items-center w-64 h-64 p-3">
                {form.photo ? (
                  <img
                    src={form.photo}
                    alt={form.prompt}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <img
                    src={Preview}
                    alt="Preview"
                    className="w-9/12 h-9/12 object-contain opacity-40"
                  />
                )}

                {generatingImg && (
                  <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                    <Loader />
                  </div>
                )}
              </div>
            </div>

            <div className="mt-5 flex  gap-5">
              <button
                type="submit"
                onClick={generateImg}
                className="font-medium text-white py-1.5 px-4 bg-primary w-full sm:w-auto rounded-md"
              >
                {generatingImg ? "Generating Image..." : "Generate"}
              </button>
            </div>

            <div className="mt-10">
              <p className="text-[#666e75] text-[14px]">
                Save your generated image to your dashboard, so you can easily
                access and view it anytime in the future.
              </p>
              <button
                onClick={saveImage}
                type="submit"
                className="my-3 font-medium text-white py-1.5 px-4 bg-gray-600 w-full sm:w-auto rounded-md"
              >
                {loading ? "Saving..." : "Save"}
              </button>
            </div>
          </form>
        </main>
      </section>
    </>
  );
}

export default withAuthProtection(CreateImage);
