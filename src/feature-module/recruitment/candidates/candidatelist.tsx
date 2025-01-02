import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PredefinedDateRanges from "../../../core/common/datePicker";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";
import { all_routes } from "../../router/all_routes";

import Table from "../../../core/common/dataTable/index";
import CollapseHeader from "../../../core/common/collapse-header/collapse-header";
import axios from "axios";
import ViewCandidate from "./ViewCandidate";
import { fetchSheetData } from "../../../core/api/axios-api/GetApi";

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

const CandidatesList = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [error, setError] = useState<string>("");
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(
    null
  );

  const openCandidateDetails = (candidate: Candidate) => {
    setSelectedCandidate(candidate);
  };

  console.log("-----------------------------------", candidates);

  useEffect(() => {
    const fetchGoogleSheetData = async () => {
      try {
        const fetchedData = await fetchSheetData(); // Fetch the data from your API

        // Assuming the date is in `item[16]` (the 17th column)
        const sortedData = fetchedData
          .slice(1) // Skip the first row (headers)
          .map((item: string[]) => ({
            firstName: item[0],
            lastName: item[1],
            job: item[2],
            rejected: item[3] === "TRUE",
            question: item[4] === "TRUE",
            screening: item[5] === "TRUE",
            interviewScheduled: item[6] === "TRUE",
            hire: item[7] === "TRUE",
            contractSigned: item[8] === "TRUE",
            rating: item[9],
            indeedEmail: item[10],
            email: item[11],
            phone: item[12],
            resume: item[13],
            notes: item[14],
            dateAdded: item[15],
            source: item[16],
            skills: item[17],
            linkedinProfile: item[18],
          }))
          .sort((a: any, b: any) => {
            const dateA = new Date(a.dateAdded);
            const dateB = new Date(b.dateAdded);
            return dateB.getTime() - dateA.getTime();
          });

        setCandidates(sortedData);
      } catch (err) {
        setError("Error fetching Google Sheets data");
      }
    };
    fetchGoogleSheetData();
  }, []);
  console.log(candidates);

  // Define the columns for the table
  const columns = [
    {
      title: "Cand ID",
      dataIndex: "Cand_ID",
      sorter: (a: any, b: any) => a.Cand_ID.length - b.Cand_ID.length,
    },
    {
      title: "Candidate",
      dataIndex: "Candidate",
      render: (text: string, record: any) => (
        <div className="d-flex align-items-center file-name-icon">
          <div className="ms-2">
            <h6 className="fw-medium">
              <Link to="#">{record.Candidate}</Link>
            </h6>
            <span className="d-block mt-1">{record.Email}</span>
          </div>
        </div>
      ),
      sorter: (a: any, b: any) => a.Candidate.length - b.Candidate.length,
    },
    {
      title: "Applied Role",
      dataIndex: "Applied_Role",
      sorter: (a: any, b: any) => a.Applied_Role.length - b.Applied_Role.length,
    },
    {
      title: "Phone",
      dataIndex: "Phone",
      sorter: (a: any, b: any) => a.Phone.length - b.Phone.length,
    },
    {
      title: "Applied Date",
      dataIndex: "Applied_Date",
      sorter: (a: any, b: any) => a.Applied_Date.length - b.Applied_Date.length,
    },
    {
      title: "Resume",
      dataIndex: "Resume",
      render: (text: string, record: any) => (
        <div className="d-inline-flex">
          <Link to="#" className="text-gray me-2 fs-16">
            <i className="ti ti-file-text" />
          </Link>
          <Link to="#" className="text-gray fs-16">
            <i className="ti ti-download" />
          </Link>
        </div>
      ),
      sorter: (a: any, b: any) => a.Resume.length - b.Resume.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text: string, record: any) => (
        <span
          className={`badge border ${
            text === "Sent"
              ? "border-purple text-purple"
              : text === "Scheduled"
              ? "border-pink text-pink"
              : text === "Interviewed"
              ? "border-info text-info"
              : text === "Offered"
              ? "border-warning text-warning"
              : text === "Hired"
              ? "border-success text-success"
              : text === "App Received"
              ? "border-purple text-purple"
              : "border-danger text-danger"
          }`}
        >
          <i className="ti ti-point-filled" />
          {text}
        </span>
      ),
      sorter: (a: any, b: any) => a.Status.length - b.Status.length,
    },
    {
      title: "",
      dataIndex: "actions",
      render: () => (
        <Link to="#" data-bs-toggle="modal" data-bs-target="#delete_modal">
          <i className="ti ti-trash" />
        </Link>
      ),
    },
  ];

  if (candidates.length === 0) {
    return <div>Loading...</div>; // Or any other loading indicator
  }

  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content">
          {/* Breadcrumb */}
          <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
            <div className="my-auto mb-2">
              <h2 className="mb-1">Candidates List</h2>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to={all_routes.adminDashboard}>
                      <i className="ti ti-smart-home" />
                    </Link>
                  </li>
                  <li className="breadcrumb-item">Administration</li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Candidates List
                  </li>
                </ol>
              </nav>
            </div>
            <div className="d-flex my-xl-auto right-content align-items-center flex-wrap">
              <div className="me-2 mb-2">
                <div className="d-flex align-items-center border bg-white rounded p-1 me-2 icon-list">
                  <Link
                    to={all_routes.candidateskanban}
                    className="btn btn-icon btn-sm me-1"
                  >
                    <i className="ti ti-layout-kanban" />
                  </Link>
                  <Link
                    to={all_routes.candidateslist}
                    className="btn btn-icon btn-sm active bg-primary text-white me-1"
                  >
                    <i className="ti ti-list-tree" />
                  </Link>
                  <Link
                    to={all_routes.candidateskanban}
                    className="btn btn-icon btn-sm"
                  >
                    <i className="ti ti-layout-grid" />
                  </Link>
                </div>
              </div>
              <div className="me-2 mb-2">
                <div className="dropdown">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    <i className="ti ti-file-export me-1" />
                    Export
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        <i className="ti ti-file-type-pdf me-1" />
                        Export as PDF
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        <i className="ti ti-file-type-xls me-1" />
                        Export as Excel{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="head-icons ms-2">
                <CollapseHeader />
              </div>
            </div>
          </div>
          {/* /Breadcrumb */}
          <div className="card">
            <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
              <h5>Candidates List</h5>
              <div className="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
                <div className="me-3">
                  <div className="input-icon-end position-relative">
                    <PredefinedDateRanges />
                    <span className="input-icon-addon">
                      <i className="ti ti-chevron-down" />
                    </span>
                  </div>
                </div>
                <div className="dropdown me-3">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    Role
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Accountant
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Accountant
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Technician
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="dropdown me-3">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    Select Status
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Accepted
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        sent
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Expired
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Declined
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="dropdown">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    Sort By : Last 7 Days
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Recently Added
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Ascending
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Desending
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Last Month
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Last 7 Days
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-body p-0">
              <Table
                dataSource={candidates}
                columns={columns}
                Selection={true}
              />
            </div>
          </div>
        </div>
        {selectedCandidate && (
          <ViewCandidate selectedCandidate={selectedCandidate} />
        )}
        <div className="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
          <p className="mb-0">2014 - 2025 © SmartHR.</p>
          <p>
            Designed &amp; Developed By{" "}
            <Link to="#" className="text-primary">
              Dreams
            </Link>
          </p>
        </div>
      </div>
      {/* /Page Wrapper */}
    </>
  );
};

export default CandidatesList;
