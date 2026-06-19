import { useState, useEffect } from "react";

function Profile() {
  const [showPasswordFields, setShowPasswordFields] = useState(false);
  const [user, setUser] = useState({});
  const [newPassword, setNewPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await fetch(
          "http://localhost:5000/api/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProfile();
  }, []);

 return (
  <div className="container-fluid p-4">
    <div className="row justify-content-center">
      <div className="col-lg-8 col-xl-7">
        <div className="card shadow border-0">
          <div className="card-body p-4">

              <div className="text-center mb-4">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  alt="Profile"
                  className="rounded-circle border"
                  width="100"
                  height="100"
                />
                <h3 className="mt-2 text-success fw-bold">
                  My Profile
                </h3>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={user.fullname || ""}
                    readOnly
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    value={user.email || ""}
                    readOnly
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">
                    User ID
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={user._id || ""}
                    readOnly
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">
                    Joined On
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={
                      user.createdAt
                        ? new Date(user.createdAt).toLocaleDateString()
                        : ""
                    }
                    readOnly
                  />
                </div>
              </div>

              {showPasswordFields && (
                <>
                  <hr />

                  <h5 className="text-primary mb-3">
                    Change Password
                  </h5>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-semibold">
                        New Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-semibold">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm password"
                      />
                    </div>
                  </div>
                </>
              )}

              <div className="text-center mt-3">
               

                <button
                  className="btn btn-primary"
                  onClick={() =>
                    setShowPasswordFields(!showPasswordFields)
                  }
                >
                  {showPasswordFields
                    ? "Cancel"
                    : "Change Password"}
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;