import React from "react";
import "./Table-Item.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { deleteemployee, chunks } from "../store/action";
import { useNavigate, useParams, Link } from "react-router-dom";
import { dataChunks } from "./utils/chunksdata";
import history from "./utils/history";

import {
  compose,
  withHandlers,
  withProps,
  withReducer,
  withState,
} from "recompose";

const TableItem = ({
  getQueryParams,
  data,
  pagedata,
  prevPage,
  nextPage,
  pageClick,
  deleted,
  editForm,
  limit,
}) => {
  // let history = useHistory();
  // const getQueryParams = (query = null) =>
  //   (query || window.location.search.replace("?", ""))
  //     .split("&")
  //     .map((e) => e.split("=").map(decodeURIComponent))
  //     .reduce((r, [k, v]) => ((r[k] = v), r), {});

  const dispatch = useDispatch();

  const navigate = useNavigate();

  // const editForm = (id) => {
  //   let employDetails = pagedata.filter((emp) => emp.id === id);
  //   navigate(`/form/${id}`);
  // };

  // const deleted = (id) => {
  //   if (window.confirm("Really want to delete this data")) {
  //     dispatch(deleteemployee(id));
  //   }
  // };

  // const data = useSelector((state) => state); //-------------------------------------------->>>>>>>> store

  {
    /* ____________________Pagination__________________________ */
  }

  const [pages, setPages] = useState(0);
  const [start, setStart] = useState(0);
  // const [limit, setLimit] = useState(10);
  const [error, setError] = useState("");
  const [disable, setDisable] = useState(Number(getQueryParams().page));

  useEffect(() => {
    setPages(getQueryParams().page);
    dispatch(
      chunks(
        dataChunks(
          getQueryParams().page,
          10 * getQueryParams().page,
          10 + 10 * getQueryParams().page
        ).next().value
      )
    );
  }, [disable]);

  const number = new Array(Math.ceil(data.length / 10)).fill(0);

  // const nextPage = () => {
  //   let currentUrlParams = new URLSearchParams(window.location.search);
  //   currentUrlParams.set("page", limit / 10);
  //   history.push(window.location.pathname + "?" + currentUrlParams.toString());

  //   setStart(limit);
  //   setLimit(limit + 10);
  //   setDisable(Number(getQueryParams().page));
  //   dispatch(chunks(dataChunks(limit / 10, limit, limit + 10).next().value));
  // };

  // 10 20 => 0 10

  // const prevPage = () => {
  //   setStart(start - 10);
  //   setLimit(start);
  //   setDisable(Number(getQueryParams().page));
  //   dispatch(
  //     chunks(dataChunks((start - 10) / 10, start - 10, start).next().value)
  //   );
  //   let currentUrlParams = new URLSearchParams(window.location.search);
  //   currentUrlParams.set("page", (start - 10) / 10);
  //   history.push(window.location.pathname + "?" + currentUrlParams.toString());
  //   setError("");
  // };

  // const PageClick = (e, i) => {
  //   setStart(10 * i);
  //   setLimit(10 + 10 * i);
  //   setDisable(Number(getQueryParams().page));
  //   dispatch(chunks(dataChunks(i, 10 * i, 10 + 10 * i).next().value));
  //   let currentUrlParams = new URLSearchParams(window.location.search);
  //   currentUrlParams.set("page", i);
  //   history.push(window.location.pathname + "?" + currentUrlParams.toString());
  // };

  return (
    <>
      <button
        onClick={() => nextPage()}
        disabled={getQueryParams().page === undefined || limit >= data.length}
      >
        Next
      </button>
      {number.map((el, i) => (
        <button
          name={i}
          key={i}
          onClick={(e) => pageClick(e, i)}
          disabled={Number(getQueryParams().page) === i}
        >
          {i + 1}
        </button>
      ))}
      <button
        onClick={() => prevPage()}
        disabled={
          getQueryParams().page === undefined ||
          Number(getQueryParams().page) <= 0
        }
      >
        Prev
      </button>
      <h1>{error}</h1>
      {pagedata.map((employ) => (
        <div className="main_box" key={employ.id}>
          <div>{employ.id}</div>
          <div>
            {employ.first_name} {employ.last_name}{" "}
          </div>
          <div>{employ.email}</div>
          <div>{employ.sex}</div>
          <div>{employ.designation}</div>
          <div>{employ.phone}</div>

          <div>
            <button className="edited" onClick={() => editForm(employ.id)}>
              Edit/Update
            </button>
            <button className="deleted" onClick={() => deleted(employ.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

const enhance = compose(
  connect(
    (store) => ({
      data: store.data,
      pagedata: store.pagedata,
    }),
    (dispatch) => ({
      chunksPrev: (start) =>
        dispatch(
          chunks(dataChunks((start - 10) / 10, start - 10, start).next().value)
        ),
      chunksPage: (i) =>
        dispatch(chunks(dataChunks(i, 10 * i, 10 + 10 * i).next().value)),
      deleteEmployee: (id) => dispatch(deleteemployee(id)),
    })
  ),
  withProps(() => {
    const navigate = useNavigate();
    return {
      getQueryParams: (query = null) =>
        (query || window.location.search.replace("?", ""))
          .split("&")
          .map((e) => e.split("=").map(decodeURIComponent))
          .reduce((r, [k, v]) => ((r[k] = v), r), {}),
      navigate,
    };
  }),

  withState("pages", "setPages", 0),
  withState("start", "setStart", 0),
  withState("limit", "setLimit", 10),
  withState("disable", "setDisable", ({ getQueryParams }) =>
    Number(getQueryParams().page)
  ),

  withHandlers({
    prevPage:
      ({
        setStart,
        start,
        limit,
        setLimit,
        disable,
        setDisable,
        getQueryParams,
        chunksPrev,
      }) =>
      () => {
        setStart(start - 10);
        setLimit(start);
        setDisable(Number(getQueryParams().page));
        chunksPrev(start);
        console.log(start);
        let currentUrlParams = new URLSearchParams(window.location.search);
        currentUrlParams.set("page", (start - 10) / 10);
        history.push(
          window.location.pathname + "?" + currentUrlParams.toString()
        );
      },

    nextPage:
      ({
        setStart,
        start,
        limit,
        setLimit,
        disable,
        setDisable,
        getQueryParams,
        chunksPrev,
      }) =>
      () => {
        let currentUrlParams = new URLSearchParams(window.location.search);
        currentUrlParams.set("page", limit / 10);
        history.push(
          window.location.pathname + "?" + currentUrlParams.toString()
        );

        setStart(limit);
        setLimit(limit + 10);
        setDisable(Number(getQueryParams().page));
        chunksPrev(limit);
      },

    pageClick:
      ({
        setStart,
        start,
        limit,
        setLimit,
        disable,
        setDisable,
        getQueryParams,
        chunksPage,
      }) =>
      (e, i) => {
        console.log(i);
        setStart(10 * i);
        setLimit(10 + 10 * i);
        setDisable(Number(getQueryParams().page));
        chunksPage(i);
        let currentUrlParams = new URLSearchParams(window.location.search);
        currentUrlParams.set("page", i);
        history.push(
          window.location.pathname + "?" + currentUrlParams.toString()
        );
      },
    deleted:
      ({ deleteEmployee }) =>
      (id) => {
        if (window.confirm("Really want to delete this data")) {
          deleteEmployee(id);
        }
      },

    editForm:
      ({ pagedata,navigate }) =>
      (id) => {
        //  const navigate = useNavigate()
        let employDetails = pagedata.filter((emp) => emp.id === id);
        navigate(`/form/${id}`);
      },
  })
);

export default enhance(TableItem);
