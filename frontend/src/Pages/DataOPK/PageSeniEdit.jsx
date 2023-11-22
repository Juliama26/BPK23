import React from "react";
import Layout from "../Layout";
import SeniEdit from "../../Components/DataOPK/SeniEdit";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../Features/AuthSlice";
import { useEffect } from "react";

export default function PageSeniEdit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);
  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);
  return (
    <div>
      <Layout>
        <SeniEdit />
      </Layout>
    </div>
  );
}
