import React from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";
import { cl } from "@fullcalendar/core/internal-common";
interface Candidate {
  name: string;
  role: string;
  email: string;
  recruiter: string;
  appliedDate: string;
  phone: string;
  gender: string;
  dob: string;
  nationality: string;
  religion: string;
  maritalStatus: string;
  address: string;
  city: string;
  state: string;
  country: string;
  resumeFileName: string;
  resumeFileSize: string;
}

interface ViewCandidateProps {
  selectedCandidate: Candidate;
}

const ViewCandidate: React.FC<ViewCandidateProps> = ({ selectedCandidate }) => {
  console.log("selectedCandidate", selectedCandidate);
  return (
    <div
      className="offcanvas offcanvas-end offcanvas-large"
      tabIndex={-1}
      id="candidate_details"
    >
      <div className="offcanvas-header border-bottom">
        <h4 className="d-flex align-items-center">
          Candidate Details
          <span className="badge bg-primary-transparent fw-medium ms-2">
            Cand-001
          </span>
        </h4>
        <button
          type="button"
          className="btn-close custom-btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <i className="ti ti-x" />
        </button>
      </div>
      <div className="offcanvas-body">
        <div className="card">
          <div className="card-body">
            <div className="d-flex align-items-center flex-wrap flex-md-nowrap row-gap-3">
              <span className="avatar avatar-xxxl candidate-img flex-shrink-0 me-3">
                <ImageWithBasePath
                  src="assets/img/users/user-03.jpg"
                  alt="Img"
                />
              </span>
              <div className="flex-fill border rounded p-3 pb-0">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <div className="mb-3">
                      <p className="mb-1">Candiate Name</p>
                      <h6 className="fw-normal">
                        {selectedCandidate?.name || "Harold Gaynor"}
                      </h6>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <p className="mb-1">Applied Role</p>
                      <h6 className="fw-normal">
                        {selectedCandidate?.role || "Developer"}
                      </h6>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <p className="mb-1">Applied Date</p>
                      <h6 className="fw-normal">
                        {selectedCandidate?.appliedDate || "--/--/----"}{" "}
                      </h6>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <p className="mb-1">Email</p>
                      <h6 className="fw-normal">
                        {selectedCandidate?.email || "harold@example.com"}
                      </h6>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <p className="mb-1">Recruiter</p>
                      <h6 className="fw-normal d-flex align-items-center">
                        <span className="avatar avatar-xs avatar-rounded me-1">
                          <ImageWithBasePath
                            src="assets/img/users/user-01.jpg"
                            alt="Img"
                          />
                        </span>
                        {selectedCandidate?.recruiter || "Patelsahab"}
                      </h6>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <p className="mb-1">Recruiter</p>
                      <span className="badge badge-purple d-inline-flex align-items-center">
                        <i className="ti ti-point-filled me-1" />
                        New
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-grids-tab p-0 mb-3">
          <ul className="nav nav-underline" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active pt-0"
                id="info-tab"
                data-bs-toggle="tab"
                data-bs-target="#basic-info"
                type="button"
                role="tab"
                aria-selected="true"
              >
                Profile
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link pt-0"
                id="address-tab"
                data-bs-toggle="tab"
                data-bs-target="#address"
                type="button"
                role="tab"
                aria-selected="false"
              >
                Hiring Pipeline
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link pt-0"
                id="address-tab2"
                data-bs-toggle="tab"
                data-bs-target="#address2"
                type="button"
                role="tab"
                aria-selected="false"
              >
                Notes
              </button>
            </li>
          </ul>
        </div>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="basic-info"
            role="tabpanel"
            aria-labelledby="info-tab"
            tabIndex={0}
          >
            <div className="card">
              <div className="card-header">
                <h5>Personal Information</h5>
              </div>
              <div className="card-body pb-0">
                <div className="row align-items-center">
                  <div className="col-md-3">
                    <div className="mb-3">
                      <p className="mb-1">Candiate Name</p>
                      <h6 className="fw-normal">Harold Gaynor</h6>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <p className="mb-1">Phone</p>
                      <h6 className="fw-normal">(146) 8964 278</h6>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <p className="mb-1">Gender</p>
                      <h6 className="fw-normal">Male</h6>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <p className="mb-1">Date of Birth</p>
                      <h6 className="fw-normal">23 Oct 2000</h6>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <p className="mb-1">Email</p>
                      <h6 className="fw-normal">harold@example.com</h6>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <p className="mb-1">Nationality</p>
                      <h6 className="fw-normal">Indian</h6>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <p className="mb-1">Religion</p>
                      <h6 className="fw-normal">Christianity</h6>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <p className="mb-1">Marital status</p>
                      <h6 className="fw-normal">No</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h5>Address Information</h5>
              </div>
              <div className="card-body pb-0">
                <div className="row align-items-center">
                  <div className="col-md-3">
                    <div className="mb-3">
                      <p className="mb-1">Address</p>
                      <h6 className="fw-normal">1861 Bayonne Ave</h6>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <p className="mb-1">City</p>
                      <h6 className="fw-normal">New York</h6>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <p className="mb-1">State</p>
                      <h6 className="fw-normal">New York</h6>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <p className="mb-1">Country</p>
                      <h6 className="fw-normal">United States Of America</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h5>Resume</h5>
              </div>
              <div className="card-body pb-0">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="d-flex align-items-center mb-3">
                      <span className="avatar avatar-lg bg-light-500 border text-dark me-2">
                        <i className="ti ti-file-description fs-24" />
                      </span>
                      <div>
                        <h6 className="fw-medium">Resume.doc</h6>
                        <span>120 KB</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3 text-md-end">
                      <Link
                        to="#"
                        className="btn btn-dark d-inline-flex align-items-center"
                      >
                        <i className="ti ti-download me-1" />
                        Download
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="address"
            role="tabpanel"
            aria-labelledby="address-tab"
            tabIndex={0}
          >
            <div className="card">
              <div className="card-body">
                <h5 className="fw-medium mb-2">Candidate Pipeline Stage</h5>
                <div className="pipeline-list candidates border-0 mb-0">
                  <ul className="mb-0">
                    <li>
                      <Link to="#" className="bg-purple">
                        New
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="bg-gray-100">
                        Scheduled
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="bg-grat-100">
                        Interviewed
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="bg-gray-100">
                        Offered
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="bg-gray-100">
                        Hired / Rejected
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h5>Details</h5>
              </div>
              <div className="card-body pb-0">
                <div className="row align-items-center">
                  <div className="col-md-3">
                    <div className="mb-3">
                      <p className="mb-1">Current Status</p>
                      <span className="badge badge-soft-purple d-inline-flex align-items-center">
                        <i className="ti ti-point-filled me-1" />
                        New
                      </span>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <p className="mb-1">Applied Role</p>
                      <h6 className="fw-normal">Accountant</h6>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <p className="mb-1">Applied Date</p>
                      <h6 className="fw-normal">12 Sep 2024</h6>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <p className="mb-1">Recruiter</p>
                      <div className="d-flex align-items-center">
                        <Link
                          to="#"
                          className="avatar avatar-sm avatar-rounded me-2"
                        >
                          <ImageWithBasePath
                            src="assets/img/users/user-01.jpg"
                            alt="Img"
                          />
                        </Link>
                        <h6>
                          <Link to="#">Anthony Lewis</Link>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="d-flex align-items-center justify-content-end">
                  <Link to="#" className="btn btn-dark me-3">
                    Reject
                  </Link>
                  <Link to="#" className="btn btn-primary">
                    Move to Next Stage
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="address2"
            role="tabpanel"
            aria-labelledby="address-tab2"
            tabIndex={0}
          >
            <div className="card">
              <div className="card-header">
                <h5>Notes</h5>
              </div>
              <div className="card-body">
                <p>
                  Harold Gaynor is a detail-oriented and highly motivated
                  accountant with 4 years of experience in financial reporting,
                  auditing, and tax preparation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCandidate;
