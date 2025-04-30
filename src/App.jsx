import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ViewAllJobs from "./pages/ViewAllJobs";
import NotFound from "./pages/NotFound";
import JobPage, { JobLoader } from "./pages/JobPage";
import AddJobs from "./pages/AddJobs";
import EditJob from "./pages/EditJob";
import Login from "./pages/Login";

function App() {
  // Add Job
  const addNewJob = async (recentJobs) => {
    console.log(recentJobs);
    const response = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recentJobs),
    });

    return;
  };

  // Delete Job
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
    console.log(`Job with id ${id} is deleted`);
    return;
  };

  //Edit job

  const updatedJob = async (JobUpdate) => {
    const res = await fetch(`/api/jobs/${JobUpdate.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(JobUpdate),
    });

    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        createReactFromElements(
        <Route path="/login" element={<Login />} />
        ) createRoutesFromElements(
        <Route index element={<HomePage />} />
        ), createReactFromElements(
        <Route path="/jobs" element={<ViewAllJobs />} />
        ), createReactFrom Elements(
        <Route path="/add-job" element={<AddJobs submitNewJob={addNewJob} />} />
        ) createReactFromElements(
        <Route
          path="/edit-job/:id"
          element={<EditJob submitEditedJob={updatedJob} />}
          loader={JobLoader}
        />
        ) createReactFromElements(
        <Route
          path="/jobs/:id"
          element={<JobPage deleteSingleJob={deleteJob} />}
          loader={JobLoader}
        />
        ) createRoutesFromElements(
        <Route path="*" element={<NotFound />} />)
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
