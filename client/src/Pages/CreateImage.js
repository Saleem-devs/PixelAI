import React, { useState } from "react";
import withAuthProtection from "../HOC/withAuthProtection";
import Nav from "../Components/Nav";
import Preview from "../Images/preview.png";
import { getRandomPrompt } from "../randomPrompts";
import FormField from "../Components/FormField";
import Loader from "../Components/Loader";
import { useNavigate } from "react-router-dom";

function CreateImage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    prompt: "",
    photo: "",
  });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit() {}
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleRandomPrompt() {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  }
  function generateImg() {}

  return (
    <>
      <section className="bg-[#f9fafc]">
        <Nav />
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
                value={form.prompt}
                handleChange={handleChange}
                isRandomPrompt
                handleRandomPrompt={handleRandomPrompt}
              />

              <div>
                <span className="block text-sm font-medium text-gray-900  ">
                  Size
                </span>
                <div className="flex items-end gap-3">
                  <FormField type="number" name="width" value={form.name} />
                  <p className="self-center">x</p>
                  <FormField type="number" name="height" value={form.name} />
                </div>
              </div>

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
                type="submit"
                className="mt-3 font-medium text-white py-1.5 px-4 bg-gray-600 w-full sm:w-auto rounded-md"
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
