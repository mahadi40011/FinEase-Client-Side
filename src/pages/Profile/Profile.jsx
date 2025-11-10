import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const Profile = () => {
  const { user, loading } = useContext(AuthContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) return <LoadingSpinner />;

  const { photoURL, displayName, email } = user;

  return (
    <div className=" flex flex-col justify-start items-center">
      <title>SkillSwap - Profile</title>
      <div>
        <div className="flex flex-col text-center md:text-start justify-center items-center gap-6 md:gap-10 p-8 w-fit mt-5 md:mt-10  ">
          <img
            src={photoURL}
            alt="User Avatar"
            className="w-40 h-40 mx-auto rounded-full border-3 border-sky-900 shadow-sm"
          />
          <div>
            <div className="space-y-2 text-center mb-6">
              <p className="md:text-3xl text-2xl">{displayName}</p>
              <p className="md:text-xl text-lg">{email}</p>

              <button className=" btn px-4 py-2 mt-6 text-white bg-sky-900 rounded-md">
                Update Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
