import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";

const Profile = () => {
  const { user, updateUserProfile, setUser } = useAuth();
  const [showForm, setShowForm] = useState(false);
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);

  const handleUpdateProfile = () => {
    setLoading(true);
    updateUserProfile(displayName, photoURL).then(() => {
      setUser(() => ({
        ...user,
        displayName,
        photoURL,
      }));
      setLoading(false);
      setShowForm(false);
    });
  };

  return (
    <div className="flex justify-center items-center mt-7 p-4">
      <div className="border border-gray-100 shadow-lg rounded-2xl p-6 w-full max-w-sm text-center">
        <h2 className="text-2xl font-bold mb-6">My Profile</h2>

        {/* Profile Photo */}
        <div className="flex justify-center mb-4">
          <img
            src={photoURL || user?.photoURL}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
          />
        </div>

        {!showForm ? (
          <>
            <p className="text-lg font-semibold mb-2">
              {displayName || "No Name"}
            </p>
            <p className="text-base font-semibold mb-4">
              {user?.email || "No Email"}
            </p>

            {/* Update Profile Button */}
            <button
              onClick={() => setShowForm(true)}
              className="w-full bg-sky-900  py-2 rounded-lg hover:bg-sky-700 text-white transition"
            >
              Update Profile
            </button>
          </>
        ) : (
          <>
            {/* Editable Form */}
            <div className="mb-4 space-y-2">
              <input
                type="text"
                defaultValue={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-900"
                placeholder="Name"
              />
              <input
                type="text"
                defaultValue={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-900"
                placeholder="Photo URL"
              />
            </div>

            <button
              onClick={handleUpdateProfile}
              disabled={loading}
              className={`w-full bg-sky-900 text-white py-2 rounded-lg hover:bg-sky-700 transition ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Updating..." : "Save Changes"}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
