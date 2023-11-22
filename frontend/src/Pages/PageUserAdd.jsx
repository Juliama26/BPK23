import React from "react";
import Layout from "./Layout";
import UserAdd from "../Components/UserAdd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../Features/AuthSlice";
import { useEffect } from "react";
export default function PageUserAdd() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);
  useEffect(() => {
    if (isError) {
      navigate("/");
    }
    if (user && user.role !== "Admin") {
      navigate("/dashboard");
    }
  }, [isError, user, navigate]);
  return (
    <div>
      <Layout>
        <UserAdd />
      </Layout>
    </div>
  );
}
