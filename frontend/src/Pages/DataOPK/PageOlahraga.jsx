import Layout from "../Layout";
import Olahraga from "../../Components/DataOPK/Olahraga";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../Features/AuthSlice";
import { useEffect } from "react";
export default function PageOlahraga() {
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
        <Olahraga />
      </Layout>
    </div>
  );
}
