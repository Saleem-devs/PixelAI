import React, { useContext, useEffect, useState } from "react";
import Nav from "../Components/Nav";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../Config/firebase";
import FormField from "../Components/FormField";
import Loader from "../Components/Loader";
import Card from "../Components/Card";
import { Link } from "react-router-dom";
import ProtectedComponent from "../Components/ProtectedComponent";
import { SnackbarContext } from "../SnackbarContext";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";

const RenderCards = ({ data, title, deleteImage }) => {
  const currentId = auth?.currentUser?.uid;
  const [deleted, setDeleted] = useState(false);
  const { setSnackbarText } = useContext(SnackbarContext);

  if (data?.length > 0) {
    console.log(data);
    return data.map((post) => {
      const { image, prompt, id, userId } = post;
      console.log(id);
      return (
        <section className={`${currentId === userId ? "block" : "hidden"}`}>
          {currentId === userId && (
            <Card
              key={id}
              id={id}
              prompt={prompt}
              image={image}
              userId={userId}
              deleteImage={deleteImage}
            />
          )}
        </section>
      );
    });
  }

  return <div className="mt-5  font-bold text-gray-600 text-lg">{title}</div>;
};

function CreateImg() {
  return (
    <div className="text-center w-full flex flex-col items-center justify-center">
      <p className="mb-4">No image yet</p>
      <Link to="/create">
        <p className="text-[18px] underline font-normal">Create </p>
      </Link>
    </div>
  );
}

function Dashboard() {
  const { setSnackbarText, snackbarText } = useContext(SnackbarContext);
  const photosCollectionRef = collection(db, "Saved Images");
  const [user, loading] = useAuthState(auth);
  const [loader, setLoader] = useState(false);
  const [savedImages, setSavedImages] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState(null);

  useEffect(() => {
    setSnackbarText({
      ...snackbarText,
      open: false,
    });

    async function getImages() {
      setLoader(true);
      try {
        const response = await getDocs(photosCollectionRef);
        const data = response.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log(data);
        setSavedImages(data.reverse());
      } catch (error) {
        setSnackbarText({
          open: true,
          message: `${error}`,
          success: false,
        });
      } finally {
        setLoader(false);
      }
    }

    getImages();
  }, []);

  async function deleteImage(id) {
    const imageDoc = doc(db, "Saved Images", id);
    await deleteDoc(imageDoc);
    setSavedImages(savedImages.filter((image) => image.id !== id));
  }

  function handleSearchChange(e) {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResults = savedImages.filter((image) =>
          image.prompt.toLowerCase().includes(searchText.toLowerCase())
        );

        setSearchedResults(searchResults);
      }, 500)
    );
  }

  return (
    <>
      <ProtectedComponent>
        <main className="bg-[#f9fafc] min-h-screen">
          <Nav />

          <section className="py-14 ">
            <div className="page_container max-w-7xl">
              <div>
                <h1 className="font-bold text-[27px] md:text-3xl">
                  Welcome,{" "}
                  <span className="font-normal">
                    {user?.displayName || user?.email}
                  </span>
                </h1>
                <p className="mt-2 mb-4 text-[16px] max-w-[550px] text-[#666e75]">
                  Browse through all the amazing images you've created so far
                  and get inspired for your next masterpiece!
                </p>
                <Link to="/create">
                  <button className="py-1.5 px-4 rounded-md text-white bg-primary text-lg transition-transform duration-300 ease-out transform hover:-translate-y-1">
                    Create
                  </button>
                </Link>
              </div>

              <div className="mt-16">
                <FormField
                  labelName="Search saved images"
                  type="text"
                  name="text"
                  placeholder="Enter prompt to search"
                  value={searchText}
                  handleChange={handleSearchChange}
                />
              </div>
              <div className="mt-10">
                {loader ? (
                  <div className="flex items-center justify-center">
                    <Loader />
                  </div>
                ) : (
                  <>
                    {searchText && (
                      <h2 className="font-medium text-lg text-[#666e75] mb-3">
                        Showing result for{" "}
                        <span className="text-black font-semibold text-sm">
                          {searchText}
                        </span>
                      </h2>
                    )}
                    <div>
                      {savedImages?.length > 0 && (
                        <p className="text-[#666e75] font-semibold text-[14px] mb-3">
                          NB: Some images won't be shown 2 hours afer being
                          generated as you are on free mode, download before
                          then and delete after.
                        </p>
                      )}
                    </div>
                    <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
                      {searchText ? (
                        <RenderCards
                          data={searchedResults}
                          title="No Search Results Found"
                        />
                      ) : (
                        <RenderCards
                          data={savedImages}
                          title={<CreateImg />}
                          deleteImage={deleteImage}
                        />
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          </section>
        </main>
      </ProtectedComponent>
    </>
  );
}

export default Dashboard;

// export default withAuthProtection(Dashboard);
