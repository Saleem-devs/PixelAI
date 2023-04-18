import React, { useState } from "react";
import Nav from "../Components/Nav";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Config/firebase";
import FormField from "../Components/FormField";
import Loader from "../Components/Loader";
import Card from "../Components/Card";
import { Link } from "react-router-dom";
import ProtectedComponent from "../Components/ProtectedComponent";

const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return data.map((post) => <Card key={post._id} {...post} />);
  }

  return <div className="mt-5  font-bold text-gray-600 text-xl">{title}</div>;
};

function CreateImg() {
  return (
    <div className="text-center w-full flex flex-col items-center justify-center">
      <p className="mb-4">No images yet</p>
      <Link to="/create">
        <button className="py-1.5 px-4 rounded-md text-white bg-primary font-semibold text-lg transition-transform duration-300 ease-out transform hover:-translate-y-1">
          Create
        </button>
      </Link>
    </div>
  );
}

function Dashboard() {
  const [user, loading] = useAuthState(auth);
  const [loader, setLoader] = useState(false);
  const [savedImages, setSavedImages] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState(null);

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
                <p className="mt-2 text-[16px] max-w-[550px] text-[#666e75]">
                  Browse through all the amazing images you've created so far
                  and get inspired for your next masterpiece!
                </p>
              </div>

              <div className="mt-16">
                <FormField />
              </div>
              <div className="mt-10">
                {loader ? (
                  <div className="flex items-center justify-center">
                    <Loader />
                  </div>
                ) : (
                  <>
                    {searchText && (
                      <h2 className="font-medium text-xl text-[#666e75] mb-3">
                        Showing result for{" "}
                        <span className="text-black">{searchText}</span>
                      </h2>
                    )}
                    <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
                      {searchText ? (
                        <RenderCards
                          data={searchedResults}
                          title="No Search Results Found"
                        />
                      ) : (
                        <RenderCards data={savedImages} title={<CreateImg />} />
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
